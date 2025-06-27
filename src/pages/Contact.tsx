import { Mail, Linkedin, Github, Twitter, MessageCircle, Send } from "lucide-react";

const contacts = [
  {
    name: "WhatsApp",
    url: "https://wa.me/254714525667",
    icon: <MessageCircle className="w-6 h-6" />,
    color: "bg-green-500/90 hover:bg-green-600 text-white",
  },
  {
    name: "Email",
    url: "mailto:omollovictorotieno58@gmail.com",
    icon: <Mail className="w-6 h-6" />,
    color: "bg-primary hover:bg-primary/90 text-primary-foreground",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/omollo-victor-28b942356/",
    icon: <Linkedin className="w-6 h-6" />,
    color: "bg-blue-700 hover:bg-blue-800 text-white",
  },
  {
    name: "GitHub",
    url: "https://github.com/SK3CHI3",
    icon: <Github className="w-6 h-6" />,
    color: "bg-zinc-800 hover:bg-zinc-900 text-white",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/omollo_21",
    icon: <Twitter className="w-6 h-6" />,
    color: "bg-black hover:bg-zinc-900 text-white",
  },
  {
    name: "Telegram",
    url: "https://t.me/techtinker0",
    icon: <Send className="w-6 h-6" />,
    color: "bg-blue-400 hover:bg-blue-500 text-white",
  },
];

const Contact = () => (
  <div className="flex flex-col items-center justify-center px-4 py-12">
    <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-2xl flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-foreground mb-2 tracking-tight flex items-center gap-2">
        <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Let's Connect</span>
      </h1>
      <p className="text-center text-muted-foreground mb-8 text-lg font-medium">Reach out for collaborations, opportunities, or just to say hi!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
        {contacts.map((c) => (
          <a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 rounded-xl px-5 py-4 font-semibold text-lg shadow-lg transition-all duration-200 focus:ring-2 focus:ring-primary/60 focus:outline-none ${c.color}`}
          >
            {c.icon}
            <span>{c.name}</span>
          </a>
        ))}
      </div>
      <a
        href="https://github.com/SK3CHI3"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-900 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-200 focus:ring-2 focus:ring-primary/60 focus:outline-none"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.565 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.135 20.163 22 16.417 22 12c0-5.523-4.477-10-10-10z"/></svg>
        Visit My Github
      </a>
    </div>
  </div>
);

export default Contact; 