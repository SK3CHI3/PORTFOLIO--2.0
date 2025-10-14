// Vercel Serverless Function for DeepSeek AI Chat with Streaming
// Deploy this to Vercel or adapt for Netlify

export const config = {
  runtime: 'edge',
};

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

export default async function handler(req: Request) {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  if (!DEEPSEEK_API_KEY) {
    return new Response('DeepSeek API key not configured', { status: 500 });
  }

  try {
    const { messages } = await req.json();

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

    // Return streaming response
    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process chat request' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

