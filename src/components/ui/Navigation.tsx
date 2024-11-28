'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import ServicesDropdown from './ServicesDropdown';
import CalEmbed from '../CalEmbed';

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
        className="md:hidden text-white p-3 hover:bg-gray-800 rounded-lg transition-colors"
      >
        <Menu className="w-8 h-8" />
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <ServicesDropdown currentPath={currentPath} />
        <Link href="/about" className={linkStyle('/about')}>
          Our Profile
        </Link>
        <button
          onClick={() => setIsCalOpen(true)}
          className="text-gray-300 hover:text-white text-base font-normal leading-tight font-montserrat tracking-wider transition-colors"
        >
          Schedule Meeting
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-800 z-50">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <ServicesDropdown currentPath={currentPath} />
            <Link 
              href="/about" 
              className={linkStyle('/about')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Profile
            </Link>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsCalOpen(true);
              }}
              className="text-gray-300 hover:text-white text-base font-normal leading-tight font-montserrat tracking-wider transition-colors text-left"
            >
              Schedule Meeting
            </button>
          </nav>
        </div>
      )}

      {/* Calendar Modal */}
      <CalEmbed 
        isOpen={isCalOpen}
        onClose={() => setIsCalOpen(false)}
      />
    </>
  );
} 