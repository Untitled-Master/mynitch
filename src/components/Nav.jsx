import { Sparkles, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation bar */}
      <div className="relative z-30 px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo and brand name */}
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-[#FAFAFA]" />
            <span className="text-xl font-serif font-medium">Philosophia</span>
          </div>

          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a href="/" className="text-[#FAFAFA]/80 hover:text-[#FAFAFA] transition-colors">Home</a>
            <a href="/article" className="text-[#FAFAFA]/80 hover:text-[#FAFAFA] transition-colors">Articles</a>
            <a href="/thinkers" className="text-[#FAFAFA]/80 hover:text-[#FAFAFA] transition-colors">Thinkers</a>
            <a href="/about" className="text-[#FAFAFA]/80 hover:text-[#FAFAFA] transition-colors">About</a>
            <a href="/topics" className="text-[#FAFAFA]/80 hover:text-[#FAFAFA] transition-colors">Topics</a>
          </div>

          {/* Search button and mobile menu toggle */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-[#FAFAFA]/10 hover:bg-[#FAFAFA]/20 transition-colors backdrop-blur-sm">
              <Search className="h-4 w-4" />
            </button>

            {/* Mobile menu toggle button */}
            <button
              className="md:hidden p-2 rounded-full bg-[#FAFAFA]/10 hover:bg-[#FAFAFA]/20 transition-colors backdrop-blur-sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu (dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4 text-sm">
              <a href="/" className="text-[#FAFAFA]/80 hover:text-[#FAFAFA] transition-colors">Home</a>
              <a href="/article" className="text-[#FAFAFA]/80 hover:text-[#FAFAFA] transition-colors">Articles</a>
              <a href="/thinkers" className="text-[#FAFAFA]/80 hover:text-[#FAFAFA] transition-colors">Thinkers</a>
              <a href="/about" className="text-[#FAFAFA]/80 hover:text-[#FAFAFA] transition-colors">About</a>
              <a href="/topics" className="text-[#FAFAFA]/80 hover:text-[#FAFAFA] transition-colors">Topics</a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Nav;