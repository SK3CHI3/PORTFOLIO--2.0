# 🚀 Local Development Setup for AI Chat

## ⚠️ Important: API Route Requirements

Your AI chat uses **serverless functions** which need special dev servers to work locally.

## ✅ Option 1: Use Vercel Dev (RECOMMENDED)

### Install Vercel CLI:
```bash
npm install -g vercel
```

### Run Development Server:
```bash
vercel dev
```

This will:
- ✅ Load your `.env` file automatically
- ✅ Run the `/api/chat` endpoint locally
- ✅ Serve your frontend on `http://localhost:3000`

### First Time Setup:
```bash
vercel dev
# Follow prompts to link your project
# It will ask: "Set up and develop...?" → Yes
# Select your Vercel project or create new one
```

---

## ✅ Option 2: Use Netlify Dev

### Install Netlify CLI:
```bash
npm install -g netlify-cli
```

### Run Development Server:
```bash
netlify dev
```

This will:
- ✅ Load your `.env` file automatically
- ✅ Run the `/.netlify/functions/chat` endpoint locally
- ✅ Serve your frontend

---

## ❌ Why Regular `npm run dev` Won't Work

The regular Vite dev server (`npm run dev`) **doesn't support serverless functions**.

**What happens:**
- ✅ Frontend runs fine
- ❌ API calls to `/api/chat` fail with 404
- ❌ AI chat won't work

---

## 🔑 Environment Variable Setup

### For Local Development:
Your `.env` file is already set up! Just make sure it has your real API key:

```env
DEEPSEEK_API_KEY=sk-your-actual-key-here
```

### For Production (After Deploy):
Add environment variable in your hosting dashboard:
- **Vercel:** Settings → Environment Variables → Add `DEEPSEEK_API_KEY`
- **Netlify:** Site settings → Environment variables → Add `DEEPSEEK_API_KEY`

---

## 📋 Quick Start Commands

### Development:
```bash
# If using Vercel (recommended)
vercel dev

# If using Netlify
netlify dev
```

### Build:
```bash
npm run build
```

### Deploy:
```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod
```

---

## 🧪 Testing the AI Chat

1. Start dev server: `vercel dev` or `netlify dev`
2. Open browser to the URL shown (usually localhost:3000)
3. Click the Sparkles icon on your profile picture
4. Try asking a question
5. You should see streaming AI responses!

---

## 🐛 Troubleshooting

### "Failed to get response" error:
- ✅ Check your API key is in `.env`
- ✅ Make sure you're using `vercel dev` or `netlify dev` (not `npm run dev`)
- ✅ Restart the dev server after adding API key

### API key not loading:
- ✅ Make sure `.env` file is in project root
- ✅ Restart the dev server
- ✅ Check for typos in variable name

### 404 on /api/chat:
- ✅ You're probably using `npm run dev` instead of `vercel dev`
- ✅ Switch to `vercel dev` or `netlify dev`

---

## 🎯 Recommended Workflow

1. **Install Vercel CLI once:**
   ```bash
   npm install -g vercel
   ```

2. **Start dev server:**
   ```bash
   vercel dev
   ```

3. **Develop normally** - hot reload works!

4. **Deploy when ready:**
   ```bash
   vercel --prod
   ```

---

## 📝 Summary

| Command | Purpose | API Works? |
|---------|---------|------------|
| `npm run dev` | Vite only | ❌ No |
| `vercel dev` | Vite + API | ✅ Yes |
| `netlify dev` | Vite + API | ✅ Yes |

**Use `vercel dev` or `netlify dev` for local development!** 🚀

