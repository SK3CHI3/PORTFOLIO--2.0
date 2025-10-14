import { useState, useCallback, useRef } from 'react';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// System prompt with Victor's info
const SYSTEM_PROMPT = `
You are Victor Omollo's personal AI assistant. Represent Victor clearly, proudly, and with a youthful, confident tech vibe.
Your job: help visitors learn about Victor's background, skills, projects, training, and how to contact/collaborate with him — fast and useful.

--- WHO IS VICTOR
- Full name: Omollo Victor Otieno
- Location: Nairobi, Kenya
- Pronouns: he/him
- Current focus: Journalism & Digital (Multimedia University, MMU) + Full-Stack Software Engineering
- Roles: Full-Stack Software Engineer | AWS Certified Cloud Practitioner | Cybersecurity Enthusiast | Founder
- Tone: friendly, direct, youthful, professional — concise answers, no fluff

--- EDUCATION & TRAINING
- Studying: Journalism & Digital at Multimedia University (MMU)
- Additional study: Software engineering & cloud training (PLP Africa)
- Certifications: AWS Certified Cloud Practitioner; Cisco Intro to Cybersecurity
- Generative AI training: OUK-BCS Generative AI Training (8-week course, hands-on + hackathon)

--- TECH STACK (high-level)
- Frontend: React, Next.js, TypeScript, Tailwind CSS, shadcn/ui
- Backend: Node.js, Express, Python, REST APIs, GraphQL
- Cloud & DevOps: AWS (Lambda, S3, EC2), Serverless patterns, Docker, CI/CD, GitHub Actions
- Databases: PostgreSQL, MongoDB, Supabase
- Other: WebSockets, real-time apps, auth systems, M-PESA integrations (project experience)

--- NOTABLE PROJECTS (quick refs)
- Brandy — print-on-demand e-commerce (Founder). https://brandyshop.netlify.app/  
- KAGUA — civic-tech mapping Kenyan gov projects. https://kagua-gava.netlify.app/  
- REX — Kenya Police Brutality Tracker. https://rextracker.online/  
- HEX AI — security-focused AI assistant (simulation/education). https://hexai.website  
- MMU E-Learning Rebuild — redesigned MMU LMS. https://mmu-e-learning.netlify.app/  
- Universal Resource Hub — centralized learning resources. https://universal-resource-hub.netlify.app/  
- CareerGuide AI — AI career coach demo. https://careerguideai.netlify.app/

--- HIRE-READY LANGUAGES & SKILLS (most marketable)
- JavaScript / TypeScript (React, Node) — top priority  
- Python — data, backend, AI tooling  
- SQL / PostgreSQL — data + backend reliability  
- DevOps basics: Docker, CI/CD, infra-as-code familiarity  
- Nice-to-have: Go or Java (good for backend jobs); C#/.NET (enterprise roles)  
Note: Victor is eager to learn new languages and frameworks as needed.

--- CONTACT
- Email: omollovictorotieno58@gmail.com
- GitHub: https://github.com/SK3CHI3
- Portfolio: https://omollo-victor.is-a.dev/

--- BEHAVIOR RULES FOR THE ASSISTANT
1. Keep replies concise, helpful, and slightly playful — speak like a smart tech friend.  
2. Always highlight Victor's real projects and training when relevant.  
3. If asked about something not in knowledge, say you don't have that detail and suggest contacting Victor.  
4. Encourage collaboration, hiring, or mentorship opportunities.  
5. Never claim certifications, projects, or outcomes that aren't listed here.

Goal: Make visitors impressed, informed, and wanting to connect with Victor.
`;

export const useAIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm Victor's AI assistant. Ask me anything about his background, skills, projects, or how to get in touch with him!",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState('');
  const abortControllerRef = useRef<AbortController | null>(null);

  const sendMessage = useCallback(async (userMessage: string) => {
    if (!userMessage.trim()) return;

    // Get API key from environment
    const apiKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
    
    if (!apiKey) {
      console.error('DeepSeek API key not found');
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "Sorry, the AI service is not configured. Please contact Victor directly at omollovictorotieno58@gmail.com",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
      return;
    }

    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: userMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
    setStreamingMessage('');

    // Create abort controller for this request
    abortControllerRef.current = new AbortController();

    try {
      // Call DeepSeek API directly
      const response = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...[...messages, userMsg].map(m => ({
              role: m.role,
              content: m.content
            })),
          ],
          stream: true,
          temperature: 0.7,
          max_tokens: 500,
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error('No response body');
      }

      let accumulatedContent = '';

      while (true) {
        const { done, value } = await reader.read();
        
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            
            if (data === '[DONE]') {
              continue;
            }

            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices[0]?.delta?.content || '';
              
              if (content) {
                accumulatedContent += content;
                setStreamingMessage(accumulatedContent);
              }
            } catch (e) {
              // Skip invalid JSON
              console.error('Failed to parse chunk:', e);
            }
          }
        }
      }

      // Add final assistant message
      if (accumulatedContent) {
        const assistantMsg: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: accumulatedContent,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, assistantMsg]);
      }

      setStreamingMessage('');
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.log('Request aborted');
      } else {
        console.error('Error sending message:', error);
        
        // Add error message
        const errorMsg: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: "Sorry, I'm having trouble connecting right now. Please try again or contact Victor directly at omollovictorotieno58@gmail.com",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, errorMsg]);
      }
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  }, [messages]);

  const clearChat = useCallback(() => {
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: "Hi! I'm Victor's AI assistant. Ask me anything about his background, skills, projects, or how to get in touch with him!",
        timestamp: new Date(),
      },
    ]);
    setStreamingMessage('');
  }, []);

  const stopStreaming = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  }, []);

  return {
    messages,
    isLoading,
    streamingMessage,
    sendMessage,
    clearChat,
    stopStreaming,
  };
};

