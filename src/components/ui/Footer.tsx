import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-[#1A1A1A] py-16 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1 - Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-light font-montserrat tracking-wider">Vector Summit</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Strategic capital and investment partners architecting bespoke solutions for exceptional growth.
            </p>
          </div>

          {/* Column 2 - Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-montserrat">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services/strategic-advisory" className="text-gray-600 hover:text-[#14213D] transition-colors">
                  Strategic Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/growth-equity" className="text-gray-600 hover:text-[#14213D] transition-colors">
                  Growth Equity
                </Link>
              </li>
              <li>
                <Link href="/services/capital-formation" className="text-gray-600 hover:text-[#14213D] transition-colors">
                  Capital Formation
                </Link>
              </li>
              <li>
                <Link href="/services/mergers-acquisitions" className="text-gray-600 hover:text-[#14213D] transition-colors">
                  Mergers & Acquisitions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-montserrat">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#14213D] transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#14213D] transition-colors">
                  Our Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-montserrat">Get in Touch</h4>
            <Link 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-[#14213D] transition-colors inline-flex items-center"
            >
              Connect on LinkedIn
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Vector Summit. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 