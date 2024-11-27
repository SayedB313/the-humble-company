'use client'

import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Menu, Building, Target, BarChart2, Users, DollarSign, PieChart, Network } from "lucide-react";

export default function CapitalFormation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const standardCTA = "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors";

  const services = [
    {
      icon: <Building className="w-12 h-12 text-blue-400" />,
      title: "Fund Formation",
      description: "Comprehensive support for launching and structuring investment funds.",
      benefits: [
        "Fund strategy development",
        "Structure optimization",
        "Regulatory compliance",
        "Investor documentation"
      ]
    },
    {
      icon: <DollarSign className="w-12 h-12 text-green-400" />,
      title: "Capital Raising",
      description: "Strategic fundraising support for investment vehicles.",
      benefits: [
        "Investor targeting",
        "Marketing strategy",
        "Due diligence support",
        "Roadshow coordination"
      ]
    },
    {
      icon: <PieChart className="w-12 h-12 text-purple-400" />,
      title: "Fund Operations",
      description: "Ongoing operational support for fund management.",
      benefits: [
        "Portfolio monitoring",
        "Investor reporting",
        "Compliance management",
        "Performance analytics"
      ]
    }
  ];

  const process = [
    {
      title: "Strategy Development",
      description: "Define fund strategy, structure, and target market"
    },
    {
      title: "Documentation",
      description: "Prepare comprehensive fund documentation and materials"
    },
    {
      title: "Investor Outreach",
      description: "Strategic marketing and investor targeting"
    },
    {
      title: "Due Diligence",
      description: "Support investor due diligence process"
    },
    {
      title: "Closing",
      description: "Coordinate fund closing and investor onboarding"
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
            <Link href="/services/capital-formation" className="text-white transition-colors">
              Capital Formation
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
                  href="/services/capital-formation" 
                  className="text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Capital Formation
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
              Capital Formation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Expert guidance for fund formation and capital raising
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
              Ready to Launch Your Fund?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a consultation to discuss your fund formation and capital raising objectives.
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