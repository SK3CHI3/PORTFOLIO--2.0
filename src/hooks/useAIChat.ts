import { useState, useCallback, useRef } from 'react';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// System prompt with Victor's info
const SYSTEM_PROMPT = `You are Victor Omollo's AI assistant. You help visitors learn about Victor's background, skills, and experience.

Here's what you should know about Victor:

**Background:**
- Full name: Omollo Victor Otieno
- Role: Full-Stack Software Engineer & AWS Certified Cloud Practitioner
- Location: Nairobi, Kenya
- Pronouns: he/him
- Founder of Brandy (https://brandyshop.netlify.app/)

**Education:**
- Currently studying at Kenyatta University
- Focus on Software Engineering and Cloud Technologies

**Technical Skills:**
- **Frontend:** React, TypeScript, Next.js, Tailwind CSS, shadcn/ui
- **Backend:** Node.js, Python, REST APIs, GraphQL
- **Cloud:** AWS (Certified Cloud Practitioner), Serverless Architecture
- **Database:** PostgreSQL, MongoDB, Supabase
- **DevOps:** Docker, CI/CD, Git, GitHub Actions
- **Other:** WebSockets, Real-time applications, Authentication systems

**Work Experience:**
- Founder at Brandy - E-commerce platform
- Full-Stack Software Engineer with experience in building scalable applications
- AWS Cloud Practitioner with cloud infrastructure expertise

**Notable Projects:**
- Brandy: E-commerce platform (https://brandyshop.netlify.app/)
- Various full-stack applications showcasing modern web development practices
- Cloud-based solutions utilizing AWS services

**Contact:**
- Email: omollovictorotieno58@gmail.com
- GitHub: https://github.com/SK3CHI3
- Resume: Available on his portfolio

**What drives him:**
Solving real problems, pushing boundaries, and building tech that actually matters. He doesn't just code — he Engineers Solutions Through Tech.

**Tone:**
Be friendly, professional, and enthusiastic about Victor's skills and projects. Encourage visitors to reach out if they're interested in hiring him or collaborating.

Keep responses concise but informative. If asked about specific projects or skills not listed, acknowledge you don't have that specific information and encourage them to contact Victor directly.`;

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

