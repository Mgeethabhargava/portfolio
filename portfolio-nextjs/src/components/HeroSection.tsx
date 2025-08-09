'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import Typed from 'typed.js';
import { candidate } from '@/data/portfolio';

export default function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: candidate.roles,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1000,
        startDelay: 500,
        loop: true
      });

      return () => typed.destroy();
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side: Text */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Welcome to My Portfolio!
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              I'm <strong className="text-blue-600 dark:text-blue-400">{candidate.fullname}</strong>
            </p>

            {/* Animated Text */}
            <div className="flex items-center space-x-2">
              <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[10px] border-l-purple-600"></div>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                <span ref={typedRef}></span>
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6 pt-4">
              <a
                href={candidate.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
              >
                <Linkedin size={32} />
              </a>
              <a
                href={candidate.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors transform hover:scale-110"
              >
                <Github size={32} />
              </a>
              <a
                href={candidate.researchgate_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors transform hover:scale-110"
              >
                <ExternalLink size={32} />
              </a>
            </div>
          </div>

          {/* Right side: Circular Image */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                  <Image
                    src={candidate.image}
                    alt="Profile Photo"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-110"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}