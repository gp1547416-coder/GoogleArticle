import React from 'react';
import { Search, Menu, HelpCircle, ChevronRight, ThumbsUp, ThumbsDown } from 'lucide-react';

export default function WikiHowArticle() {
  return (
    <div className="bg-[#f2f2f2] min-h-screen font-sans text-[#333]">
      {/* Top Navbar */}
      <header className="bg-wikigreen text-white p-3 shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Menu className="w-6 h-6" />
            <h1 className="text-3xl font-bold italic tracking-tighter">wikiHow</h1>
          </div>
          <div className="flex-1 max-w-md mx-8 hidden md:block">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search here..." 
                className="w-full py-1 px-4 rounded-full text-black outline-none"
              />
              <Search className="absolute right-3 top-1.5 text-gray-500 w-5 h-5" />
            </div>
          </div>
          <HelpCircle className="w-6 h-6" />
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto py-3 px-4 text-xs text-gray-500 flex items-center gap-1">
        <span>Home</span> <ChevronRight className="w-3 h-3" />
        <span>Computers and Electronics</span> <ChevronRight className="w-3 h-3" />
        <span className="text-wikigreen font-semibold">Internet</span>
      </nav>

      {/* Main Content Card */}
      <main className="max-w-5xl mx-auto bg-white rounded-t-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            How to Use Google Effectively
          </h1>
          
          <div className="flex items-center gap-2 mb-8 border-b pb-6">
            <span className="bg-wikigreen text-white px-2 py-1 rounded text-xs font-bold uppercase">Co-authored by</span>
            <span className="text-wikigreen font-bold hover:underline cursor-pointer">Gemini AI</span>
          </div>

          {/* Long Paragraph Article Body */}
          <section className="mb-10">
            <div className="bg-wikilight border-l-8 border-wikigreen p-6 rounded-r-lg">
              <h2 className="text-2xl font-bold mb-4 text-wikigreen">Method 1: Mastering the Search Ecosystem</h2>
              <p className="text-lg leading-relaxed text-gray-700 first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
                Google Search has transformed from a simple directory of web links into a sophisticated, AI-driven knowledge engine that serves as the primary interface for human information retrieval in the 21st century. To utilize it to its full potential, one must move beyond basic keyword entry and understand the underlying logic of PageRank and latent semantic indexing, which prioritize sites based on authority, freshness, and user intent. By implementing advanced search operators—such as wrapping specific terms in quotation marks for exact matching, using the "site:" command to narrow results to a single domain, or applying the minus sign to exclude irrelevant topics—users can cut through the noise of the modern web to find precise data points. Furthermore, as Google integrates generative AI into its Search Generative Experience (SGE), the platform is transitioning from a tool that provides links to a tool that synthesizes complex answers, requiring users to become adept at conversational prompting while maintaining a critical eye toward the veracity of the sources cited. This evolution means that digital literacy now requires an understanding of how Google prioritizes local results, visual content via Lens, and academic papers via Scholar, creating a multi-layered ecosystem that, when navigated correctly, places the sum total of human knowledge at your fingertips.
              </p>
            </div>
          </section>

          {/* Interactive Footer (The wikiHow Signature) */}
          <div className="border-t pt-8 mt-8 flex flex-col items-center gap-4">
            <h3 className="text-xl font-bold">Did this article help you?</h3>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-2 border rounded-full hover:bg-gray-100 transition">
                <ThumbsUp className="w-5 h-5 text-wikigreen" /> Yes
              </button>
              <button className="flex items-center gap-2 px-6 py-2 border rounded-full hover:bg-gray-100 transition">
                <ThumbsDown className="w-5 h-5 text-red-500" /> No
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-5xl mx-auto py-10 text-center text-gray-400 text-sm">
        <p>© 2026 wikiHow Clone for iPad. All rights reserved.</p>
      </footer>
    </div>
  );
}
