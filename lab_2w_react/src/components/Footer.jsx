import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    const systemInfo = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      savedAt: new Date().toLocaleTimeString()
    };

    localStorage.setItem('system_info', JSON.stringify(systemInfo));

    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      items.push({ key, value: localStorage.getItem(key) });
    }
    setStoredData(items);
  }, []); 
  
  const renderValue = (val) => {
    try {
      const parsed = JSON.parse(val);
      if (typeof parsed === 'object' && parsed !== null) {
        return (
          <div className="pl-4 mt-1 space-y-1 border-l-2 border-rose-500/50 font-mono text-[11px]">
            {Object.entries(parsed).map(([k, v]) => (
              <div key={k} className="flex gap-2">
                <span className="text-rose-400 font-semibold">{k}:</span>
                <span className="text-zinc-300">{v}</span>
              </div>
            ))}
          </div>
        );
      }
    } catch (e) {}
    return <span className="text-zinc-300 ml-2">{val}</span>;
  };

  return (
    <footer className="p-6 rounded-2xl border-2 transition-colors mt-8 text-xs font-mono bg-zinc-950 border-rose-900/50 text-zinc-400">
      <div className="text-center mb-4">
        <p className="font-serif font-bold text-rose-500 uppercase tracking-widest text-sm mb-1">
          ✝️ LOCALSTORAGE INFO & SYSTEM AUDIT ✝️
        </p>
        <p>© 2026 Riepina Sofiia • Gothic Cyber Edition 🖤 All rights reserved</p>
      </div>

      <div className="p-4 rounded-xl border bg-black/40 border-rose-900/30">
        <p className="font-bold text-rose-500 mb-2">Дані з localStorage:</p>
        <div className="space-y-3">
          {storedData.map(({ key, value }) => (
            <div key={key} className="break-all">
              <span className="text-rose-500 font-bold underline">{key}:</span>
              {renderValue(value)}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}