'use client'

import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Menu, BarChart2, TrendingUp, Building, Users, DollarSign } from "lucide-react";
import ServicesDropdown from '../../components/ui/ServicesDropdown';

export default function TrackRecord() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const metrics = [
    {
      icon: <DollarSign className="w-12 h-12 text-blue-400" />,
      title: "$500M+",
      description: "Total Transaction Value"
    },
    {
      icon: <Building className="w-12 h-12 text-green-400" />,
      title: "50+",
      description: "Successful Deals"
    },
    {
      icon: <Users className="w-12 h-12 text-purple-400" />,
      title: "100+",
      description: "Client Relationships"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-yellow-400" />,
      title: "85%",
      description: "Success Rate"
    }
  ];

  const caseStudies = [
    {
      title: "Strategic Acquisition",
      industry: "Technology",
      description: "Facilitated a $100M acquisition for a leading software company, resulting in 40% market share increase.",
      outcomes: [
        "40% market share growth",
        "Successful integration",
        "Revenue synergies achieved",
        "Enhanced product portfolio"
      ]
    },
    {
      title: "Growth Capital Raise",
      industry: "Healthcare",
      description: "Secured $50M growth capital for healthcare technology platform, enabling expansion into new markets.",
      outcomes: [
        "Successful capital raise",
        "Market expansion",
        "3x revenue growth",
        "Strategic partnerships formed"
      ]
    },
    {
      title: "Private Equity Investment",
      industry: "Manufacturing",
      description: "Led $75M private equity investment in manufacturing firm, driving operational improvements.",
      outcomes: [
        "Operational efficiency gains",
        "Market consolidation",
        "Supply chain optimization",
        "Improved EBITDA margins"
      ]
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
            <Link href="/track-record" className="text-white transition-colors">
              Track Record
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
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
                  className="text-white transition-colors"
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
                  className="text-gray-300 hover:text-white transition-colors"
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
              Our Track Record
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              A proven history of delivering exceptional results for our clients
            </motion.p>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    {metric.icon}
                    <h3 className="text-3xl font-montserrat text-white mt-4 mb-2">
                      {metric.title}
                    </h3>
                    <p className="text-gray-300">
                      {metric.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
              Case Studies
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-900 rounded-xl p-8 border border-gray-700"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-montserrat text-white mb-2">
                      {study.title}
                    </h3>
                    <div className="text-blue-400 mb-4">
                      {study.industry}
                    </div>
                    <p className="text-gray-300 mb-6">
                      {study.description}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {study.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-green-400" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat text-white mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help drive exceptional outcomes for your business.
            </p>
            <button
              onClick={() => window.location.href = 'mailto:contact@vectorsummit.com'}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors"
            >
              Contact Us
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