import React, { useState, useEffect } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-6 rounded-3xl border-2 shadow-2xl bg-zinc-950 border-rose-600 text-zinc-100 shadow-rose-950/50">
     
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-rose-500 hover:text-rose-300 text-xl font-bold"
        >
          ✖
        </button>

        <h3 className="text-xl font-serif font-bold text-rose-500 mb-2 flex items-center gap-2">
          <span>🖤</span> Feedback Form
        </h3>
        <p className="text-xs font-mono opacity-70 mb-4">
          Залиште ваше повідомлення, і воно буде надіслано на пошту студентки.
        </p>

        <form 
          action="https://formspree.io/f/mljjodqd" 
          method="POST"
          className="space-y-3 font-mono text-xs"
        >
          <div>
            <label className="block text-rose-400 mb-1">Ім’я:</label>
            <input 
              type="text" 
              name="name" 
              required 
              placeholder="Your name"
              className="w-full p-2.5 rounded-xl border outline-none bg-zinc-900 border-zinc-800 text-zinc-200 focus:border-rose-600"
            />
          </div>

          <div>
            <label className="block text-rose-400 mb-1">Email:</label>
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="misa@example.com"
              className="w-full p-2.5 rounded-xl border outline-none bg-zinc-900 border-zinc-800 text-zinc-200 focus:border-rose-600"
            />
          </div>

          <div>
            <label className="block text-rose-400 mb-1">Номер телефону:</label>
            <input 
              type="tel" 
              name="phone" 
              placeholder="+380XXXXXXXXX"
              className="w-full p-2.5 rounded-xl border outline-none bg-zinc-900 border-zinc-800 text-zinc-200 focus:border-rose-600"
            />
          </div>

          <div>
            <label className="block text-rose-400 mb-1">Повідомлення:</label>
            <textarea 
              name="message" 
              rows="3" 
              required 
              placeholder="Ваш текст..."
              className="w-full p-2.5 rounded-xl border outline-none bg-zinc-900 border-zinc-800 text-zinc-200 focus:border-rose-600"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-serif font-bold tracking-widest uppercase rounded-xl transition-all hover:scale-105 shadow-md shadow-rose-900/50"
          >
            Надіслати ✝️
          </button>
        </form>
      </div>
    </div>
  );
}