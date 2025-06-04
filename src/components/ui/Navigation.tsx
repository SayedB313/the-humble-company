'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import ServicesDropdown from './ServicesDropdown';
import { motion } from 'framer-motion';
import CalButton from './CalButton';

interface NavigationProps {
  currentPath: string;
}

export default function Navigation({ currentPath }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isCalOpen, setIsCalOpen] = React.useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const linkStyle = (path: string) => 
    `text-base font-normal leading-tight font-montserrat tracking-wider ${
      isActive(path) ? 'text-white' : 'text-gray-300 hover:text-white'
    } transition-colors`;

  return (
    <>
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-white p-2"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {/* <ServicesDropdown currentPath={currentPath} /> */}
        <Link href="/about" className={linkStyle('/about')}>
          Our Profile
        </Link>
        <CalButton className="text-white hover:text-gray-300 transition-colors font-light">
          Schedule Meeting
        </CalButton>
      </nav>

      {/* Full Screen Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? '100vh' : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed inset-0 bg-[#14213D] z-40"
      >
        {isMobileMenuOpen && (
          <div className="container mx-auto px-4 py-12 h-full flex flex-col">
            {/* Close button at the top */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white p-2"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Menu Items */}
            <div className="flex flex-col space-y-8 mt-20">
              {/* Services Links */}
              <Link 
                href="/services/strategic-advisory" 
                className="text-2xl text-white hover:text-gray-300 transition-colors font-light"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Strategic Advisory
              </Link>
              <Link 
                href="/services/growth-equity" 
                className="text-2xl text-white hover:text-gray-300 transition-colors font-light"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Growth Equity
              </Link>
              <Link 
                href="/services/capital-formation" 
                className="text-2xl text-white hover:text-gray-300 transition-colors font-light"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Capital Formation
              </Link>
              <Link 
                href="/services/mergers-acquisitions" 
                className="text-2xl text-white hover:text-gray-300 transition-colors font-light"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Mergers & Acquisitions
              </Link>

              {/* Other Links */}
              <Link 
                href="/about" 
                className="text-2xl text-white hover:text-gray-300 transition-colors font-light"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Profile
              </Link>

              {/* Schedule Meeting Button */}
              <CalButton className="text-2xl text-white hover:text-gray-300 transition-colors font-light text-left">
                Schedule Meeting
              </CalButton>
            </div>

            {/* Bottom Section */}
            <div className="mt-auto mb-8">
              <div className="h-[1px] w-full bg-white/20 mb-8"></div>
              <span className="text-white/60 text-sm">
                © {new Date().getFullYear()} Vector Summit
              </span>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
} 