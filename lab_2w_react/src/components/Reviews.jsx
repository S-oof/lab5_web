import React, { useState, useEffect } from 'react';

export default function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const VARIANT_ID = 21; 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT_ID}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Помилка завантаження коментарів:", err);
        setLoading(false);
      });
  }, [VARIANT_ID]);

  return (
    <section className="p-7 rounded-2xl border-2 transition-all shadow-lg bg-zinc-900/90 border-rose-950 text-zinc-200">
      <h2 className="text-2xl font-serif font-bold text-rose-500 tracking-widest mb-4 border-b border-rose-900/60 pb-2 flex items-center gap-2">
        <span>💬</span> Employer Recommendations:
      </h2>

      {loading ? (
        <p className="text-sm font-mono text-rose-400 animate-pulse">Завантаження коментарів...</p>
      ) : (
        <div className="space-y-3">

          {comments.map((comment) => (
            <div 
              key={comment.id}
              className="p-4 rounded-xl border font-mono text-xs transition-all hover:translate-x-1 bg-zinc-950/80 border-rose-900/40 text-zinc-300"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-serif font-bold text-rose-400 text-sm">{comment.name}</span>
                <span className="text-[10px] opacity-60">{comment.email}</span>
              </div>
              <p className="italic opacity-80">{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}