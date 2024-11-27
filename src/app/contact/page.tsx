'use client'

import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Menu, Building } from "lucide-react";
import ServicesDropdown from '../../components/ui/ServicesDropdown';

export default function Contact() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const contactMethods = [
    {
      icon: <Mail className="w-12 h-12 text-blue-400" />,
      title: "Email",
      description: "For general inquiries and information",
      action: "contact@vectorsummit.com",
      link: "mailto:contact@vectorsummit.com"
    },
    {
      icon: <Phone className="w-12 h-12 text-green-400" />,
      title: "Phone",
      description: "Direct line for immediate assistance",
      action: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-12 h-12 text-purple-400" />,
      title: "Office",
      description: "Our headquarters location",
      action: "New York, NY",
      link: "#"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-normal leading-tight font-montserrat tracking-wider text-white">
              Vector Summit
            </span>
          </Link>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-3 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Menu className="w-8 h-8" />
          </button>

          <nav className="hidden md:flex space-x-8">
            <ServicesDropdown />
            <Link href="/track-record" className="text-gray-300 hover:text-white transition-colors">
              Track Record
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  href="/track-record" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Track Record
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/contact" 
                  className="text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-montserrat text-white mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Get in touch with our team to discuss how we can help achieve your objectives
            </motion.p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-montserrat text-white mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {method.description}
                    </p>
                    <a 
                      href={method.link}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {method.action}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <input 
                  type="text"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white"
                  placeholder="Message subject"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Vector Summit. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
} 