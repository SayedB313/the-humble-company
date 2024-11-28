'use client'

import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Menu, ArrowRight, Building, Briefcase, Target, BarChart2, Users, Network } from "lucide-react";
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