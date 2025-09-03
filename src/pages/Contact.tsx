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
    <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-4 md:p-8 shadow-2xl flex flex-col items-center">
      <div className="overflow-y-auto max-h-[70vh] sm:max-h-none w-full scrollbar-hide">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-foreground mb-2 tracking-tight flex items-center gap-2">
          <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Let's Connect</span>
        </h1>
        <p className="text-center text-muted-foreground mb-8 text-lg font-medium">Reach out for collaborations, opportunities, or just to say hi!</p>
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
      </div>
    </div>
    <style>{`
      .scrollbar-hide {
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE 10+ */
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }
    `}</style>
  </div>
);

export default Contact; 