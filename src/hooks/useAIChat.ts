import { useState, useCallback, useRef } from 'react';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

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
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({
            role: m.role,
            content: m.content
          })),
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

