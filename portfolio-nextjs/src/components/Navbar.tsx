'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Lightbulb } from 'lucide-react';
import { candidate } from '@/data/portfolio';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-white font-bold text-xl">
            {candidate.nav_fullname}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-blue-400 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-blue-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-blue-400 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-white hover:text-blue-400 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-white hover:text-blue-400 transition-colors">
              Experience
            </button>
            <a
              href={candidate.resume_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Resume
            </a>
            <button
              onClick={toggleTheme}
              className="text-white hover:text-yellow-400 transition-colors p-2"
            >
              <Lightbulb size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-white hover:text-yellow-400 transition-colors p-2"
            >
              <Lightbulb size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block text-white hover:text-blue-400 px-3 py-2 w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block text-white hover:text-blue-400 px-3 py-2 w-full text-left">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-white hover:text-blue-400 px-3 py-2 w-full text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('projects')} className="block text-white hover:text-blue-400 px-3 py-2 w-full text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('experience')} className="block text-white hover:text-blue-400 px-3 py-2 w-full text-left">
                Experience
              </button>
              <a
                href={candidate.resume_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition-colors mx-3"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}