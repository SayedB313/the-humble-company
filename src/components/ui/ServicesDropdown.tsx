'use client'

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceLink {
  title: string;
  href: string;
  description: string;
}

const services: ServiceLink[] = [
  {
    title: "Capital Formation",
    href: "/services/capital-formation",
    description: "Fund raising and structuring solutions for investment firms"
  },
  {
    title: "Growth Advisory & Equity",
    href: "/services/growth-advisory",
    description: "Strategic growth solutions and capital raising for businesses"
  },
  {
    title: "Mergers & Acquisitions",
    href: "/services/mergers-acquisitions",
    description: "Strategic M&A advisory for business transitions"
  },
  {
    title: "Equity Investment",
    href: "/services/equity-investment",
    description: "Direct investment opportunities for growing companies"
  }
];

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 300); // 300ms delay before closing
  };

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div 
      className="relative" 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center gap-1 text-base font-normal leading-tight font-montserrat tracking-wider text-gray-300 hover:text-white transition-colors cursor-pointer"
      >
        Services
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-72 bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden z-50"
          >
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block px-4 py-3 hover:bg-gray-700 transition-colors"
              >
                <div className="text-white font-montserrat">{service.title}</div>
                <div className="text-sm text-gray-400 mt-1">{service.description}</div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 