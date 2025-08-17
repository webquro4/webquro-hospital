import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, Mic, Volume2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

interface ChatItem {
  role: "user" | "assistant";
  text: string;
}

const getSuggestions = (path: string) => {
  if (path.startsWith("/doctors")) {
    return ["Find cardiologists", "Doctors available tomorrow", "Top rated surgeons"];
  }
  if (path.startsWith("/services")) {
    return ["What is angioplasty?", "Pediatrics services", "View ICU facilities"];
  }
  if (path.startsWith("/rooms")) {
    return ["Show deluxe rooms", "Room availability", "Compare prices"];
  }
  if (path.startsWith("/admin")) {
    return ["Open bookings", "Latest invoices", "Staff roster today"];
  }
  if (path.startsWith("/profile")) {
    return ["My next appointment", "Download records", "View prescriptions"];
  }
  return ["Book an appointment", "Find a doctor", "Emergency numbers"];
};

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [listening, setListening] = useState(false);
  const [chat, setChat] = useState<ChatItem[]>([
    { role: "assistant", text: "Hi! I can help you find doctors, book appointments, or explore services." },
  ]);
  const [input, setInput] = useState("");
  const location = useLocation();
  const suggestions = useMemo(() => getSuggestions(location.pathname), [location.pathname]);
  const panelRef = useRef<HTMLDivElement>(null);

  // Basic mock bot reply
  const reply = (text: string) => {
    const response = `Here is what I found for: "${text}". This is a demo — navigate using the links above while I guide you.`;
    speak(response);
    setChat((c) => [...c, { role: "assistant", text: response }]);
  };

  const handleSend = (value?: string) => {
    const message = (value ?? input).trim();
    if (!message) return;
    setChat((c) => [...c, { role: "user", text: message }]);
    setInput("");
    setTimeout(() => reply(message), 300);
  };

  // TTS
  const speak = (text: string) => {
    try {
      if (window.speechSynthesis) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        window.speechSynthesis.speak(utterance);
      }
    } catch {}
  };

  // STT (webkit)
  const startListening = () => {
    const w = window as any;
    const SR = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!SR) {
      setChat((c) => [...c, { role: "assistant", text: "Voice not supported on this browser." }]);
      return;
    }
    const rec = new SR();
    rec.lang = "en-US";
    rec.interimResults = false;
    setListening(true);
    rec.onresult = (e: any) => {
      const transcript = e.results[0][0].transcript as string;
      handleSend(transcript);
    };
    rec.onerror = () => setListening(false);
    rec.onend = () => setListening(false);
    rec.start();
  };

  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Floating trigger */}
      {!open && (
        <Button aria-label="Open assistant" variant="default" size="lg" className="shadow-lg animate-fade-in" onClick={() => setOpen(true)}>
          <MessageCircle className="mr-2" /> Ask AI Assistant
        </Button>
      )}

      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          tabIndex={-1}
          className="w-[min(92vw,420px)] h-[min(70vh,560px)] bg-card border rounded-xl shadow-xl animate-slide-in-right flex flex-col"
          role="dialog"
          aria-label="AI Assistant"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b bg-gradient-to-r from-primary/10 to-accent/10">
            <div className="font-semibold">AI Assistant</div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close">
              <X />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 p-4">
            {chat.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                <div
                  className={
                    "inline-block max-w-[85%] px-3 py-2 rounded-lg animate-fade-in " +
                    (m.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground")
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 pb-2">
            <div className="flex gap-2 flex-wrap mb-2">
              {suggestions.map((s, idx) => (
                <Button key={idx} variant="default" size="sm" onClick={() => handleSend(s)}>
                  {s}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2 pb-3">
              <input
                aria-label="Message"
                className="flex-1 h-10 rounded-md border px-3 bg-background outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <Button variant="secondary" onClick={() => handleSend()}>
                Send
              </Button>
              <Button variant={listening ? "default" : "outline"} onClick={startListening} aria-pressed={listening} aria-label="Voice input">
                <Mic className="mr-1" />
              </Button>
              <Button variant="outline" onClick={() => speak("Hello, how can I help today?") } aria-label="Play welcome">
                <Volume2 />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
