# 🚀 AI Chat Feature - Quick Start

## What Was Added?

✅ **Floating AI Chat Button** - Beautiful animated button in bottom-right corner  
✅ **Full Chat Interface** - Responsive on mobile & desktop with streaming responses  
✅ **Preset Questions** - Quick buttons for common questions  
✅ **DeepSeek AI Integration** - Smart AI assistant with context about you  
✅ **Streaming Support** - Responses appear word-by-word like ChatGPT  

---

## 🎯 Next Steps (3 minutes!)

### 1️⃣ Get DeepSeek API Key (FREE)
1. Visit: https://platform.deepseek.com/
2. Sign up (it's free!)
3. Go to API Keys → Create new key
4. Copy your API key

### 2️⃣ Choose Deployment

#### Option A: Vercel (Easiest)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Add environment variable in Vercel dashboard:
# DEEPSEEK_API_KEY = your_api_key_here
```

#### Option B: Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod

# Add environment variable in Netlify dashboard:
# DEEPSEEK_API_KEY = your_api_key_here
```

### 3️⃣ Test It!
- Click the floating button (bottom-right)
- Ask: "Tell me about Victor's background"
- Watch the streaming response! ✨

---

## 💡 How It Works

**Frontend:**
- `AIChatButton.tsx` - Floating button
- `AIChat.tsx` - Chat interface with streaming
- `useAIChat.ts` - State management hook

**Backend:**
- `api/chat.ts` - Vercel serverless function
- `netlify/functions/chat.ts` - Netlify function
- Both include system prompt with your info

**The AI knows about:**
- Your background & education
- Technical skills
- Work experience
- Projects (Brandy, etc.)
- Contact info

---

## 🎨 Customization

### Change what AI knows about you:
Edit the `SYSTEM_PROMPT` in:
- `api/chat.ts` (Vercel)
- `netlify/functions/chat.ts` (Netlify)

### Change preset questions:
Edit `PRESET_QUESTIONS` in `src/components/AIChat.tsx`

### Change button position:
Edit `AIChatButton.tsx` - change `bottom-6 right-6` classes

---

## 💰 Cost

**DeepSeek is SUPER cheap:**
- ~$0.14 per 1M tokens
- Your portfolio will cost **less than $1/month**
- That's like 1000+ conversations for pennies!

---

## 🔒 Security

✅ API key stored as environment variable  
✅ Never exposed to frontend  
✅ Secure serverless functions  
✅ CORS configured  

---

## 📱 Features

- ✨ Streaming responses (word-by-word)
- 📱 Responsive (mobile & desktop)
- 🎨 Beautiful UI with animations
- 💬 Chat history
- 🗑️ Clear chat button
- ⚡ Fast & lightweight
- 🌙 Dark mode support (inherits your theme)

---

## 🐛 Troubleshooting

**Chat button not showing?**
- Check browser console for errors
- Verify all files are in place

**"Failed to get response"?**
- Set DEEPSEEK_API_KEY environment variable
- Verify API key is valid
- Check deployment logs

**Want to test locally?**
```bash
# Use Vercel dev server
vercel dev

# OR Netlify dev server
netlify dev
```

---

## 📚 Full Documentation

See `AI_CHAT_SETUP.md` for detailed setup instructions.

---

**That's it! Your portfolio now has an AI assistant! 🎉**

