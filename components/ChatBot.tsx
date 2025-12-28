import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { chatWithBot } from '../services/geminiService';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface ChatBotProps {
  currentLanguage: Language;
}

export const ChatBot: React.FC<ChatBotProps> = ({ currentLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[currentLanguage].chatBot;
  
  // Initialize with initial message based on language. 
  // Note: Changing language midway won't translate history, but new initial messages will be correct.
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: t.initialMessage }
  ]);
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const prevLanguage = useRef(currentLanguage);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Reset chat if language changes? Or just update initial message if it's the only one.
  useEffect(() => {
    if (prevLanguage.current !== currentLanguage) {
      // Optional: If chat is empty or only has the welcome message, update it.
      if (messages.length === 1 && messages[0].role === 'model') {
        setMessages([{ role: 'model', text: t.initialMessage }]);
      }
      prevLanguage.current = currentLanguage;
    }
  }, [currentLanguage, t.initialMessage, messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // Format history for Gemini API
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await chatWithBot(history, userMsg, currentLanguage);
      
      if (responseText) {
         setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: t.error }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg shadow-primary-900/20 transition-all duration-300
          ${isOpen ? 'bg-slate-800 text-slate-300 rotate-90' : 'bg-primary-600 text-white hover:scale-110 hover:bg-primary-500'}
        `}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      <div className={`
        fixed bottom-24 right-6 w-80 md:w-96 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right
        ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'}
      `} style={{ maxHeight: 'calc(100vh - 120px)', height: '500px' }}>
        
        {/* Header */}
        <div className="p-4 bg-slate-800 border-b border-slate-700 flex items-center gap-3">
          <div className="bg-primary-600/20 p-2 rounded-lg">
            <Bot size={20} className="text-primary-400" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-100">{t.title}</h3>
            <p className="text-xs text-slate-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              {t.online}
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center shrink-0
                ${msg.role === 'user' ? 'bg-slate-700 text-slate-300' : 'bg-primary-600/20 text-primary-400'}
              `}>
                {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
              </div>
              <div className={`
                max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed
                ${msg.role === 'user' 
                  ? 'bg-primary-600 text-white rounded-br-none' 
                  : 'bg-slate-800 text-slate-300 border border-slate-700 rounded-bl-none'}
              `}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex gap-3">
               <div className="w-8 h-8 rounded-full bg-primary-600/20 text-primary-400 flex items-center justify-center shrink-0">
                  <Bot size={14} />
               </div>
               <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1">
                 <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
                 <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-100"></span>
                 <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-200"></span>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-3 bg-slate-800 border-t border-slate-700 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.placeholder}
            className="flex-1 bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-600"
          />
          <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-primary-600 hover:bg-primary-500 text-white p-2.5 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  );
};