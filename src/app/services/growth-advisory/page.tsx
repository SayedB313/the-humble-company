'use client'

import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Menu, TrendingUp, Target, BarChart2, Users, Network, Lightbulb, Briefcase } from "lucide-react";

export default function GrowthAdvisory() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const standardCTA = "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors";

  const services = [
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-400" />,
      title: "Strategic Growth Planning",
      description: "Comprehensive growth strategy development and execution support.",
      benefits: [
        "Market opportunity analysis",
        "Growth roadmap development",
        "Strategic partnerships",
        "Performance metrics"
      ]
    },
    {
      icon: <Briefcase className="w-12 h-12 text-green-400" />,
      title: "Capital Raising",
      description: "Strategic fundraising and investor relations for growing businesses.",
      benefits: [
        "Funding strategy development",
        "Investor presentation creation",
        "Deal structuring",
        "Negotiation support"
      ]
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-purple-400" />,
      title: "Strategic Management",
      description: "Operational excellence and management advisory services.",
      benefits: [
        "Performance optimization",
        "Team development",
        "Process improvement",
        "Strategic decision support"
      ]
    }
  ];

  const process = [
    {
      title: "Assessment",
      description: "Comprehensive analysis of current state and growth potential"
    },
    {
      title: "Strategy Development",
      description: "Creating tailored growth and funding strategies"
    },
    {
      title: "Implementation Planning",
      description: "Detailed execution roadmap and resource allocation"
    },
    {
      title: "Execution Support",
      description: "Hands-on assistance with strategy implementation"
    },
    {
      title: "Performance Monitoring",
      description: "Tracking progress and adjusting strategies as needed"
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
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/services/growth-advisory" className="text-white transition-colors">
              Growth Advisory
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/services/growth-advisory" 
                  className="text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Growth Advisory
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
              Growth Advisory & Equity
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Strategic growth solutions and capital raising for ambitious businesses
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={standardCTA}
            >
              Schedule Consultation
            </motion.button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="mb-6">
                    {service.icon}
                    <h3 className="text-xl font-montserrat text-white mt-4">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-green-400" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
              Our Process
            </h2>
            <div className="max-w-4xl mx-auto">
              {process.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start gap-4 mb-8"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat text-white mb-6">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a consultation to explore how we can help achieve your growth objectives.
            </p>
            <button className={standardCTA}>
              Schedule Consultation
            </button>
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