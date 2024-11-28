'use client'

import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { Building, Users, Globe, Award } from "lucide-react";
import Navigation from '../../components/ui/Navigation';
import CalEmbed from '../../components/CalEmbed';

export default function AboutUs() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isCalOpen, setIsCalOpen] = React.useState(false);

  const teamValues = [
    {
      icon: <Building className="w-12 h-12 text-blue-400" />,
      title: "Excellence",
      description: "Committed to delivering exceptional results and maintaining the highest standards in financial advisory."
    },
    {
      icon: <Users className="w-12 h-12 text-green-400" />,
      title: "Partnership",
      description: "Building long-term relationships based on trust, transparency, and mutual success."
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-400" />,
      title: "Innovation",
      description: "Leveraging cutting-edge technology and creative solutions to drive superior outcomes."
    },
    {
      icon: <Award className="w-12 h-12 text-yellow-400" />,
      title: "Integrity",
      description: "Maintaining the highest ethical standards and professional conduct in all our dealings."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-normal leading-tight font-montserrat tracking-wider text-white">
              Vector Summit
            </span>
          </Link>
          <Navigation currentPath="/about" />
        </div>
      </header>

      <main className="flex-grow pt-[72px]">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-montserrat text-white mb-6"
            >
              About Vector Summit
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              A premier financial advisory firm dedicated to driving exceptional outcomes for our clients
            </motion.p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12">
              To empower businesses and investors with strategic insights, innovative solutions, and 
              unparalleled expertise to achieve their financial and strategic objectives.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {teamValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-900 rounded-xl p-8 border border-gray-700"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {value.icon}
                    <h3 className="text-xl font-montserrat text-white">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
              Leadership Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Add team member components here */}
            </div>
          </div>
        </section>

        {/* Add CTA Section before footer */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat text-white mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a consultation to discuss how we can help achieve your objectives.
            </p>
            <button
              onClick={() => setIsCalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors"
            >
              Schedule a Call
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Vector Summit. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Add Calendar Modal */}
      <CalEmbed 
        isOpen={isCalOpen}
        onClose={() => setIsCalOpen(false)}
      />
    </div>
  );
} 