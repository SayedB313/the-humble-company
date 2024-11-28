'use client'

import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Menu, ArrowRight, Building, Briefcase, Target, BarChart2, Users, Network, TrendingUp } from "lucide-react";
import ServicesDropdown from '../../../components/ui/ServicesDropdown';
import Navigation from '../../../components/ui/Navigation';

export default function MergersAcquisitions() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const standardCTA = "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors";

  const services = [
    {
      icon: <Building className="w-12 h-12 text-blue-400" />,
      title: "Buy-Side Advisory",
      description: "Strategic acquisition targeting and execution support for companies looking to grow through M&A.",
      benefits: [
        "Target identification and screening",
        "Valuation analysis",
        "Due diligence coordination",
        "Deal structure optimization"
      ]
    },
    {
      icon: <Briefcase className="w-12 h-12 text-green-400" />,
      title: "Sell-Side Advisory",
      description: "Comprehensive support for companies seeking strategic exits or divestitures.",
      benefits: [
        "Business valuation",
        "Marketing materials preparation",
        "Buyer identification",
        "Transaction negotiation"
      ]
    },
    {
      icon: <Target className="w-12 h-12 text-purple-400" />,
      title: "Deal Origination",
      description: "Proactive opportunity identification and relationship building with potential targets.",
      benefits: [
        "Market mapping",
        "Proprietary deal flow",
        "Strategic introductions",
        "Industry expertise leverage"
      ]
    }
  ];

  const process = [
    {
      title: "Initial Assessment",
      description: "Comprehensive evaluation of your M&A objectives and requirements"
    },
    {
      title: "Strategy Development",
      description: "Creating a tailored approach aligned with your growth goals"
    },
    {
      title: "Target Identification",
      description: "Systematic search and screening of potential opportunities"
    },
    {
      title: "Due Diligence",
      description: "Thorough analysis and validation of target companies"
    },
    {
      title: "Deal Execution",
      description: "Expert negotiation and transaction management"
    }
  ];

  const challenges = [
    {
      icon: <Target className="w-12 h-12 text-blue-500" />,
      title: "Deal Sourcing",
      description: "Finding the right opportunities?",
      details: [
        "Limited access to quality deal flow",
        "High cost per qualified lead",
        "Inconsistent pipeline volume"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-purple-500" />,
      title: "Market Coverage",
      description: "Missing potential investments?",
      details: [
        "Gaps in market coverage",
        "Manual sourcing bottlenecks",
        "Overlooked investment opportunities"
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-500" />,
      title: "Portfolio Growth",
      description: "Need to scale efficiently?",
      details: [
        "Complex screening process",
        "Quality control at scale",
        "Limited bandwidth for outreach"
      ]
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
          <Navigation currentPath="/services/mergers-acquisitions" />
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
              Mergers & Acquisitions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Strategic M&A advisory services to drive your company's growth and success
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => window.location.href = 'mailto:contact@vectorsummit.com'}
              className={standardCTA}
            >
              Schedule a Call
            </motion.button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
              Our M&A Services
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

        {/* Investment Challenges Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-4">
              Investment Challenges
            </h2>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Common bottlenecks preventing firms from maximizing their investment potential
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {challenge.icon}
                    <h3 className="text-xl font-montserrat text-white">
                      {challenge.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-6">
                    {challenge.description}
                  </p>
                  <ul className="space-y-3">
                    {challenge.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <ArrowRight className="w-4 h-4 text-blue-400" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deal Flow Engine Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="container mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12"
            >
              The Deal Flow Engine
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Left Column - Core Features */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-gray-900 p-8 rounded-2xl"
                >
                  <h3 className="text-3xl font-montserrat text-white mb-3">
                    Find
                  </h3>
                  <p className="text-xl text-gray-300">
                    Identify high-potential investment opportunities
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gray-900 p-8 rounded-2xl"
                >
                  <h3 className="text-3xl font-montserrat text-white mb-3">
                    Filter
                  </h3>
                  <p className="text-xl text-gray-300">
                    Screen deals based on your criteria
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-gray-900 p-8 rounded-2xl"
                >
                  <h3 className="text-3xl font-montserrat text-white mb-3">
                    Scale
                  </h3>
                  <p className="text-xl text-gray-300">
                    Maintain quality while expanding pipeline
                  </p>
                </motion.div>
              </div>

              {/* Right Column - Results */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gray-900 p-8 md:p-12 rounded-2xl"
              >
                <h3 className="text-3xl font-montserrat text-white mb-8">
                  Results
                </h3>
                
                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-xl text-gray-300">85% faster deal sourcing</span>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="flex items-center gap-4"
                  >
                    <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-xl text-gray-300">3x larger qualified pipeline</span>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    className="flex items-center gap-4"
                  >
                    <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-xl text-gray-300">60% better qualification</span>
                  </motion.div>

                  <motion.button 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    onClick={() => window.location.href = 'mailto:contact@vectorsummit.com'}
                    className={standardCTA}
                  >
                    Schedule a Meeting
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
              Our M&A Process
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
              Ready to Discuss Your M&A Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our M&A experts to explore how we can help achieve your strategic objectives.
            </p>
            <button
              onClick={() => window.location.href = 'mailto:contact@vectorsummit.com'}
              className={standardCTA}
            >
              Schedule a Call
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