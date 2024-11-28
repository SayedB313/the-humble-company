'use client'

import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Building, Target, Network, Users, DollarSign, TrendingUp, FileText, PieChart, Briefcase, ArrowUpRight, CheckCircle2, Lightbulb, Shield, BarChart2, Rocket } from "lucide-react";
import Navigation from '../../../components/ui/Navigation';
import CalEmbed from '../../../components/CalEmbed';

export default function EquityInvestment() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isCalOpen, setIsCalOpen] = React.useState(false);

  const standardCTA = "bg-[#14213D] hover:bg-[#1C2E56] text-white px-8 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors flex items-center gap-2";

  const investmentCriteria = [
    {
      icon: <CheckCircle2 className="w-8 h-8 text-[#14213D]" />,
      title: "Proven Business Model",
      description: "Demonstrated success with clear operational strategies"
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-[#14213D]" />,
      title: "Emerging Cash-Flow Positive",
      description: "Strong potential for profitability with existing positive cash flow"
    },
    {
      icon: <Users className="w-8 h-8 text-[#14213D]" />,
      title: "Strong Management Team",
      description: "Leadership with a proven track record of driving growth"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[#14213D]" />,
      title: "Competitive Advantage",
      description: "Clear market differentiation and competitive edge"
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#14213D]" />,
      title: "Growth-Oriented Industry",
      description: "Operating in a sector with strong growth potential"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#14213D]" />,
      title: "Solid Capital Structure",
      description: "Well-capitalized companies with a strong financial foundation"
    }
  ];

  const services = [
    {
      icon: <Building className="w-10 h-10 text-white" />,
      title: "Direct Investment",
      description: "Strategic capital allocation and expert financial services",
      benefits: [
        "Growth capital",
        "Buyout support",
        "Capital restructuring"
      ]
    },
    {
      icon: <Network className="w-10 h-10 text-white" />,
      title: "Strategic Partnerships",
      description: "Long-term partnerships focused on sustainable growth",
      benefits: [
        "Management expertise",
        "Operational support",
        "Industry networks"
      ]
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-white" />,
      title: "Value Creation",
      description: "Comprehensive approach to building business value",
      benefits: [
        "Market expansion",
        "Operational efficiency",
        "Strategic planning"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-scroll">
        <div className="container mx-auto px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-3xl sm:text-3xl md:text-2xl font-light font-montserrat tracking-wider text-white">
              Vector Summit
            </span>
          </Link>
          <Navigation currentPath="/services/equity-investment" />
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/River Near Mountains.jpg"
              alt="Equity Investment"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
          </div>
          
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-light font-montserrat tracking-wider text-white">
                  EQUITY
                  <span className="block mt-2">
                    INVESTMENT
                  </span>
                </h1>
                
                <div className="h-2 w-24 bg-[#14213D]"></div>
                
                <p className="text-lg sm:text-xl md:text-2xl font-light font-montserrat tracking-wider text-gray-300 max-w-4xl">
                  Strategic capital allocation and expert financial services for sustainable growth
                </p>

                <motion.button 
                  className={standardCTA}
                  onClick={() => setIsCalOpen(true)}
                >
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
            onClick={() => {
              const servicesSection = document.querySelector('#services');
              servicesSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-white/80 hover:text-white transition-colors"
            >
              <ChevronDown className="w-12 h-12" />
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-20 max-w-3xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#1A1A1A] mb-6">
                  Investment Approach
                </h2>
                <div className="h-[1px] w-full bg-[#14213D] opacity-20"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="group bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#14213D]"
                  >
                    <div className="bg-[#14213D] w-16 h-16 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold font-montserrat text-[#1A1A1A] mb-4">
                      {service.title}
                    </h3>
                    <div className="h-[2px] w-12 bg-[#14213D] mb-6 group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-gray-600 mb-8 text-lg">
                      {service.description}
                    </p>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-600">
                          <ArrowRight className="w-5 h-5 text-[#14213D] flex-shrink-0" />
                          <span className="text-lg">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Investment Criteria Section */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-20 max-w-3xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#1A1A1A] mb-6">
                  Investment Criteria
                </h2>
                <div className="h-[1px] w-full bg-[#14213D] opacity-20"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {investmentCriteria.map((criterion, index) => (
                  <motion.div
                    key={criterion.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#14213D]"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="group-hover:scale-110 transition-transform duration-500">
                        {criterion.icon}
                      </div>
                      <h3 className="text-xl font-bold font-montserrat text-[#1A1A1A]">
                        {criterion.title}
                      </h3>
                      <p className="text-gray-600">
                        {criterion.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32">
          <div className="absolute inset-0">
            <Image
              src="/1Snow-Covered Mountain Photo.jpg"
              alt="Mountains"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h2 className="text-4xl md:text-6xl font-light font-montserrat tracking-wider text-white">
                  Empowering Growth And Success
                </h2>
                <p className="text-xl text-gray-300">
                  Through proprietary capital sources and deep expertise, we ensure each partnership 
                  is equipped for sustainable growth and long-term success.
                </p>
                <button 
                  className={`${standardCTA} mx-auto`}
                  onClick={() => setIsCalOpen(true)}
                >
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-[#1A1A1A] py-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/" className="text-2xl font-light font-montserrat tracking-wider">
              Vector Summit
            </Link>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Vector Summit. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <CalEmbed 
        isOpen={isCalOpen}
        onClose={() => setIsCalOpen(false)}
      />
    </div>
  );
} 