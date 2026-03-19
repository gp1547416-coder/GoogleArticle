"use client";
import { useEffect, useState } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body class="bg-slate-50">
        {loading && (
          <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-500">
            <div className="w-16 h-16 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin"></div>
            <h2 className="mt-4 text-xl font-bold text-emerald-800 tracking-tight">TechWiki</h2>
            <p className="text-slate-400 text-sm">Gathering knowledge...</p>
          </div>
        )}
        {children}
      </body>
    </html>
  );
}
