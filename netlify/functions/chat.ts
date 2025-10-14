// Netlify Serverless Function for DeepSeek AI Chat with Streaming
import { Handler } from '@netlify/functions';

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || '';
const DEEPSEEK_API_URL = 'https://api.deepseek.com/chat/completions';

// Context about Victor for the AI
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

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export const handler: Handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  if (!DEEPSEEK_API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'DeepSeek API key not configured' }),
    };
  }

  try {
    const { messages } = JSON.parse(event.body || '{}');

    // Add system prompt
    const messagesWithSystem: Message[] = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages,
    ];

    // Call DeepSeek API with streaming
    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: messagesWithSystem,
        stream: true,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      throw new Error(`DeepSeek API error: ${response.statusText}`);
    }

    // Get the response body as text
    const reader = response.body?.getReader();
    const decoder = new TextDecoder();
    let result = '';

    if (reader) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        result += decoder.decode(value, { stream: true });
      }
    }

    // Return streaming response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
      },
      body: result,
    };
  } catch (error) {
    console.error('Error in chat API:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'Failed to process chat request' }),
    };
  }
};

