# 🤖 AI Chat Feature Setup Guide

This guide will help you set up the AI chat feature powered by DeepSeek AI.

## 📋 Prerequisites

1. **DeepSeek API Key** - You need to get an API key from DeepSeek
2. **Deployment Platform** - Vercel or Netlify (both have free tiers)

---

## 🔑 Step 1: Get Your DeepSeek API Key

1. Go to [DeepSeek Platform](https://platform.deepseek.com/)
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key (you'll need it in Step 3)

**Pricing:** DeepSeek is very cheap - around $0.14 per 1M tokens. For a portfolio site, you'll spend less than $1/month.

---

## 🚀 Step 2: Choose Your Deployment Platform

### Option A: Deploy on Vercel (Recommended)

#### 1. Install Vercel CLI (if you haven't)
```bash
npm install -g vercel
```

#### 2. The API route is already set up at `api/chat.ts`
This will automatically work as a serverless function on Vercel.

#### 3. Deploy
```bash
vercel
```

Follow the prompts to link your project.

---

### Option B: Deploy on Netlify

#### 1. Install Netlify CLI (if you haven't)
```bash
npm install -g netlify-cli
```

#### 2. The function is already set up at `netlify/functions/chat.ts`

#### 3. Create `netlify.toml` in your project root:
```toml
[build]
  command = "npm run build"
  publish = "dist"
  functions = "netlify/functions"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

#### 4. Deploy
```bash
netlify deploy --prod
```

---

## 🔐 Step 3: Set Environment Variables

### On Vercel:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add: `DEEPSEEK_API_KEY` with your API key
4. Redeploy if needed

### On Netlify:
1. Go to Site settings → Environment variables
2. Add: `DEEPSEEK_API_KEY` with your API key
3. Redeploy

### For Local Development:
Create a `.env` file in your project root:
```env
DEEPSEEK_API_KEY=your_deepseek_api_key_here
```

⚠️ **IMPORTANT:** Add `.env` to your `.gitignore` to keep your key secure!

---

## 🛠️ Step 4: Local Development

For local development, you'll need to proxy API requests.

### Option 1: Use Vite Proxy (Development Only)

Update `vite.config.ts`:
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Your local API server
        changeOrigin: true,
      },
    },
  },
});
```

Then run a local API server (simple Express server or use `vercel dev`).

### Option 2: Use Vercel Dev
```bash
vercel dev
```

This runs your Vercel functions locally.

### Option 3: Use Netlify Dev
```bash
netlify dev
```

This runs your Netlify functions locally.

---

## ✅ Step 5: Test It Out

1. Start your dev server: `npm run dev`
2. Click the floating AI chat button (bottom right)
3. Ask a question!

If you see an error:
- Check your API key is set correctly
- Check browser console for errors
- Verify the API endpoint is correct (`/api/chat`)

---

## 🎨 Customization

### Change the System Prompt
Edit the `SYSTEM_PROMPT` in `api/chat.ts` or `netlify/functions/chat.ts` to customize what the AI knows about you.

### Change Preset Questions
Edit the `PRESET_QUESTIONS` array in `src/components/AIChat.tsx`.

### Styling
All components use Tailwind CSS and shadcn/ui. Modify the components to match your design.

---

## 💰 Cost Estimation

**DeepSeek Pricing:**
- ~$0.14 per 1 million tokens
- Average conversation: ~500 tokens
- 1000 conversations = ~$0.07

For a portfolio site with moderate traffic, expect **less than $1/month**.

---

## 🔒 Security Notes

1. ✅ API key is stored securely as environment variable
2. ✅ Never commit `.env` files to Git
3. ✅ API calls go through your serverless function (key not exposed to frontend)
4. ✅ CORS is configured for your domain

---

## 🐛 Troubleshooting

### "Failed to get response" error
- Check your API key is valid
- Verify environment variables are set
- Check DeepSeek API status

### Chat not appearing
- Check browser console for errors
- Verify all components are imported correctly

### Streaming not working
- Ensure your deployment platform supports streaming responses
- Vercel Edge Functions support streaming
- Netlify Functions support streaming

---

## 📚 Resources

- [DeepSeek API Docs](https://api-docs.deepseek.com/)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)

---

## 🎉 You're Done!

Your AI chat feature is now set up! Visitors can now interact with your AI assistant to learn more about you.

**Next Steps:**
- Customize the system prompt with more details about your projects
- Add more preset questions
- Monitor usage in your DeepSeek dashboard
- Adjust styling to match your brand

