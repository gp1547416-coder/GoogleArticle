import React from 'react';
import { 
  Search, 
  Menu, 
  Globe, 
  Cpu, 
  CheckCircle2, 
  Clock, 
  UserCheck, 
  ChevronRight,
  TrendingUp
} from 'lucide-react';

export default function TechWikiArticle() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <nav className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-black text-emerald-600 italic tracking-tighter">TechWiki</h1>
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="How to..." 
                className="pl-10 pr-4 py-2 border rounded-full bg-slate-50 w-80 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              />
              <Search className="absolute left-3 top-2.5 text-slate-400 w-5 h-5" />
            </div>
          </div>
          <Menu className="text-slate-600 w-6 h-6 cursor-pointer" />
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 mt-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase mb-4">
          <span>Technology</span>
          <ChevronRight className="w-3 h-3" />
          <span>Software</span>
          <ChevronRight className="w-3 h-3" />
          <span>Search Giants</span>
        </div>

        {/* Article Title Card */}
        <div className="bg-white border rounded-xl p-6 md:p-10 shadow-sm">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            How to Understand the Architecture and Impact of Google
          </h2>
          
          <div className="flex flex-wrap items-center gap-4 mt-6 py-4 border-y border-slate-100">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-100 p-1 rounded-full">
                <UserCheck className="w-4 h-4 text-emerald-700" />
              </div>
              <span className="text-sm font-semibold border-b border-dotted border-slate-400">Tech Editorial Board</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Clock className="w-4 h-4" />
              <span>Updated March 18, 2026</span>
            </div>
          </div>

          <p className="mt-8 text-lg text-slate-600 leading-relaxed italic">
            Google has evolved from a simple search box into a sophisticated global neural network. To truly grasp its scale, one must explore its transition from PageRank algorithms to a leader in generative artificial intelligence and global infrastructure.
          </p>

          {/* Step 1 */}
          <div className="mt-12 space-y-12">
            <section className="relative pl-14">
              <div className="absolute left-0 top-0 bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-emerald-200">
                1
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Analyze the Core Infrastructure.</h3>
              <div className="aspect-video bg-slate-900 rounded-2xl mb-6 flex flex-col items-center justify-center text-emerald-400 p-8 text-center border-4 border-slate-800">
                <Cpu className="w-16 h-16 mb-4 animate-pulse" />
                <p className="font-mono text-sm uppercase tracking-widest">[Visualization: Distributed Data Centers]</p>
              </div>
              <p className="text-slate-700 leading-loose">
                Google's power lies in its massive distributed computing system. At the heart of this is the 
                <strong> Google File System (GFS) </strong> and <strong>MapReduce</strong>, which allow the company to 
                process petabytes of data across thousands of low-cost servers simultaneously. This architecture 
                ensures that when you type a query, the results are fetched in milliseconds from a data center 
                physically closest to you. In the modern era, this has transitioned into the 
                <strong> Borg cluster manager </strong>, the predecessor to Kubernetes, which orchestrates millions 
                of containers. Beyond hardware, Google’s shift toward custom silicon—specifically 
                <strong> Tensor Processing Units (TPUs) </strong>—has allowed them to dominate the AI landscape, 
                powering everything from the Gemini LLM to real-time language translation. This vertical 
                integration of hardware, custom chips, and proprietary software creates a feedback loop of 
                efficiency that remains unmatched in the tech industry.
              </p>
              
              <div className="mt-4 bg-emerald-50 p-4 rounded-lg border border-emerald-100 flex gap-3">
                <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0" />
                <p className="text-sm text-emerald-800"><strong>Did you know?</strong> Google handles over 90% of the global search market share as of 2026.</p>
              </div>
            </section>

            {/* Step 2 */}
            <section className="relative pl-14">
              <div className="absolute left-0 top-0 bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-emerald-200">
                2
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Understand the AI-First Pivot.</h3>
              <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
                <Globe className="w-12 h-12 text-blue-500" />
                <p className="text-slate-600">Google's mission has expanded from "organizing information" to "being an AI-assistant for everyone, everywhere."</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="mt-20 border-t bg-white py-12 text-center">
        <div className="flex justify-center gap-2 mb-4">
          <div className="w-8 h-8 bg-emerald-600 rounded-md flex items-center justify-center text-white font-bold italic">T</div>
          <span className="text-xl font-black text-slate-800 tracking-tighter">TechWiki</span>
        </div>
        <p className="text-slate-400 text-sm italic">"The How-to Manual for the Digital Age"</p>
      </footer>
    </div>
  );
}
