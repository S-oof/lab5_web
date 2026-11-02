import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Add_info from './components/Additional_info';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 7 && hours < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (

    <div className={`min-h-screen font-sans p-4 md:p-10 transition-colors duration-500 selection:bg-rose-900 selection:text-white ${
      theme === 'dark' ? 'bg-zinc-950 text-zinc-200' : 'bg-rose-50 text-slate-800'
    }`}>
      <div className="max-w-4xl mx-auto space-y-8">
     
        <div className="flex justify-end">
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-full font-serif text-xs font-bold border transition-all duration-300 hover:scale-105 shadow-md ${
              theme === 'dark' 
                ? 'bg-zinc-900 text-rose-400 border-rose-700/60 hover:bg-zinc-800' 
                : 'bg-white text-rose-600 border-rose-300 hover:bg-rose-100'
            }`}
          >
            {theme === 'dark' ? 'Change mode' : 'Change mode'}
          </button>
        </div>

        <Header theme={theme} />
        
        <main className="space-y-8">
          <Education theme={theme} />
          <Experience theme={theme} />
          <Add_info theme={theme} />
        </main>

        <Reviews theme={theme} />
        <Footer theme={theme} />
        <ContactForm theme={theme} />
      </div>
    </div>
  );
}

export default App;