'use client'

import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Building, Target, Network, Users, DollarSign, TrendingUp, FileText, PieChart, Briefcase, ArrowUpRight, CheckCircle2, Lightbulb, Shield, BarChart2, Rocket } from "lucide-react";
import Navigation from '../../../components/ui/Navigation';
import CalEmbed from '../../../components/CalEmbed';
import Footer from '../../../components/ui/Footer';

export default function EquityInvestment() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isCalOpen, setIsCalOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

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
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Operational Excellence",
      description: "Hands-on operational support and strategic guidance",
      benefits: [
        "Process optimization",
        "Team development",
        "Performance metrics",
        "Systems implementation"
      ]
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-white" />,
      title: "Growth Acceleration",
      description: "Comprehensive growth and market expansion strategies",
      benefits: [
        "Sales optimization",
        "Marketing strategy",
        "Market expansion",
        "Revenue scaling"
      ]
    },
    {
      icon: <Network className="w-10 h-10 text-white" />,
      title: "Digital Transformation",
      description: "Technology enablement and automation solutions",
      benefits: [
        "Process automation",
        "Tech stack optimization",
        "Digital strategy",
        "Data analytics"
      ]
    }
  ];

  const heroHighlights = [
    { 
      title: "Operational Support", 
      description: "Hands-on execution"
    },
    { 
      title: "Growth Strategy", 
      description: "Revenue acceleration"
    },
    { 
      title: "Tech Enablement", 
      description: "Digital transformation"
    },
    { 
      title: "Team Development", 
      description: "Talent optimization"
    }
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#14213D] shadow-lg' 
          : ''
      }`}>
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
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source 
                src="xhttps://res.cloudinary.com/dluf6sg5d/video/upload/v1/Clipped2_x7xswg" 
                type="video/mp4" 
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-[2px] w-12 bg-white"></div>
                    <span className="text-white uppercase tracking-wider text-sm font-semibold">Investment Solutions</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-light font-montserrat tracking-wider text-white">
                    Growth
                    <span className="block mt-2 text-[#E0C4AC]">Equity</span>
                  </h1>
                </div>
                
                <p className="text-lg md:text-xl font-medium text-gray-300 max-w-xl leading-relaxed">
                  Active growth partners providing hands-on operational expertise and strategic guidance to accelerate business success
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <motion.button 
                    className={`${standardCTA} hidden sm:flex text-center justify-center`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={() => setIsCalOpen(true)}
                  >
                    <span>Schedule a Meeting</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-center space-x-4 text-white hover:text-[#E0C4AC] transition-colors cursor-pointer w-full sm:w-auto pl-4 sm:pl-0 justify-start sm:justify-center"
                    onClick={() => {
                      const servicesSection = document.querySelector('#services');
                      servicesSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                      <ChevronDown className="w-6 h-6" />
                    </div>
                    <span className="text-sm uppercase tracking-wider font-bold">Our Services</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column - Stats Grid */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden md:grid grid-cols-2 gap-6"
              >
                {heroHighlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors border border-[#14213D]/20"
                  >
                    <div className="text-xl font-semibold text-white mb-2">
                      {highlight.title}
                    </div>
                    <div className="text-white/80 text-sm leading-relaxed">
                      {highlight.description}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-20 max-w-3xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#1A1A1A] mb-6">
                  Partnership Approach
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
              src="/River Near Mountains.jpg"
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
                  Accelerate Your Growth
                </h2>
                <p className="text-xl text-gray-300">
                  Our team becomes an extension of yours, providing the expertise, resources, and 
                  hands-on support needed to drive exceptional growth and operational excellence.
                </p>
                <button 
                  className={`${standardCTA} mx-auto`}
                  onClick={() => setIsCalOpen(true)}
                >
                  Schedule a Meeting
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <CalEmbed 
        isOpen={isCalOpen}
        onClose={() => setIsCalOpen(false)}
      />
    </div>
  );
} 