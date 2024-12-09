'use client'

import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { motion } from "framer-motion";
import { Check, Menu, Building, Target, Network, Users, DollarSign, TrendingUp, ArrowUpRight, ArrowRight, ChevronDown, Shield, Briefcase, User, Rocket, ArrowDown, Link2 } from "lucide-react";
import Navigation from '../../../components/ui/Navigation';
import Footer from '../../../components/ui/Footer';
import CalEmbed from '../../../components/CalEmbed';

export default function CapitalFormation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isCalOpen, setIsCalOpen] = React.useState(false);

  const standardCTA = "bg-[#14213D] hover:bg-[#1C2E56] text-white px-8 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors flex items-center gap-2";

  const investorTypes = [
    {
      title: "High-Net-Worth",
      icon: <DollarSign className="w-8 h-8" />,
      description: "Ultra-high-net-worth individuals and private investors seeking sophisticated investment opportunities",
      aum: "$50M+",
      focus: "Direct Investments"
    },
    {
      title: "Family Offices",
      icon: <Building className="w-8 h-8" />,
      description: "Single and multi-family investment offices with long-term capital deployment strategies",
      aum: "$100M+",
      focus: "Multi-Generation"
    },
    {
      title: "Endowments",
      icon: <Target className="w-8 h-8" />,
      description: "University and institutional endowment funds focused on sustainable long-term returns",
      aum: "$500M+",
      focus: "Perpetual Capital"
    },
    {
      title: "Sovereign Wealth",
      icon: <Network className="w-8 h-8" />,
      description: "Government-owned investment funds with strategic global allocation mandates",
      aum: "$1B+",
      focus: "Strategic Assets"
    },
    {
      title: "Pension Funds",
      icon: <Users className="w-8 h-8" />,
      description: "Public and private pension investment funds seeking stable, long-term returns",
      aum: "$250M+",
      focus: "Risk-Adjusted"
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
          <Navigation currentPath="/services/capital-formation" />
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster="https://res.cloudinary.com/dluf6sg5d/video/upload/so_0/v1/Aerial_Snow-Covered_Mountain_Video_md3o9w"
            >
              <source 
                src="https://res.cloudinary.com/dluf6sg5d/video/upload/q_auto,f_auto,c_scale,w_1920,vc_auto,br_2m/v1/Aerial_Snow-Covered_Mountain_Video_md3o9w"
                type="video/mp4"
              />
              <source 
                src="https://res.cloudinary.com/dluf6sg5d/video/upload/q_auto,f_webm,c_scale,w_1920,vc_auto,br_2m/v1/Aerial_Snow-Covered_Mountain_Video_md3o9w"
                type="video/webm"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Main content */}
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
                    Capital
                    <span className="block mt-2 text-amber-300">Formation</span>
                  </h1>
                </div>
                
                <p className="text-lg md:text-xl font-medium text-gray-300 max-w-xl leading-relaxed">
                  Connecting elite investment funds with institutional capital through strategic introductions and comprehensive investor relations.
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
                    className="flex items-center space-x-4 text-white hover:text-amber-300 transition-colors cursor-pointer w-full sm:w-auto pl-4 sm:pl-0 justify-start sm:justify-center"
                    onClick={() => {
                      const servicesSection = document.querySelector('#investor-network');
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

              {/* Right side - Stats/Highlights */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden md:grid grid-cols-2 gap-6"
              >
                {[
                  { 
                    title: "Global Network", 
                    description: "Strategic LP relationships across key markets"
                  },
                  { 
                    title: "Elite Access", 
                    description: "Direct connections to institutional capital"
                  },
                  { 
                    title: "Expert Team", 
                    description: "Seasoned investment professionals"
                  },
                  { 
                    title: "Full Support", 
                    description: "End-to-end capital formation services"
                  }
                ].map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors"
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

        {/* Institutional Investor Network Section */}
        <section id="investor-network" className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-32">
                <div className="inline-flex items-center justify-center space-x-3 mb-6">
                  <div className="h-[1px] w-8 bg-[#14213D]"></div>
                  <span className="text-[#14213D] uppercase tracking-widest text-sm">Our Network</span>
                  <div className="h-[1px] w-8 bg-[#14213D]"></div>
                </div>
                
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#14213D] tracking-wide mb-6">
                  Connecting Elite
                  <br />
                  Fund Managers
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We connect sophisticated investment managers with institutional capital, enabling strategic growth and portfolio expansion.
                </p>
              </div>

              {/* Fund Managers Section */}
              <div className="mb-32">
                <div className="text-center mb-16">
                  <h3 className="text-2xl font-medium text-[#14213D] mb-4">Fund Managers We Serve</h3>
                  <div className="h-[2px] w-24 bg-[#14213D] mx-auto"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  {[
                    { title: "Private Equity", icon: <Building className="w-6 h-6" /> },
                    { title: "Venture Capital", icon: <Rocket className="w-6 h-6" /> },
                    { title: "Private Credit", icon: <DollarSign className="w-6 h-6" /> },
                    { title: "Hedge Funds", icon: <TrendingUp className="w-6 h-6" /> }
                  ].map((type, index) => (
                    <motion.div
                      key={type.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="w-16 h-16 bg-[#14213D] rounded-2xl flex items-center justify-center mb-4">
                        {React.cloneElement(type.icon, { className: "text-white" })}
                      </div>
                      <span className="text-[#14213D] font-medium">{type.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Connection Visual */}
              <div className="flex justify-center mb-32">
                <div className="flex flex-col items-center">
                  <ArrowDown className="w-8 h-8 text-[#14213D] animate-bounce" />
                  <div className="h-32 w-[2px] bg-gradient-to-b from-[#14213D] to-yellow-400"></div>
                </div>
              </div>

              {/* Institutional Investors */}
              <div className="text-center mb-16">
                <h3 className="text-2xl font-medium text-[#14213D] mb-4">Connected With Institutional Capital</h3>
                <div className="h-[2px] w-24 bg-yellow-400 mx-auto"></div>
              </div>

              {/* Investor Types Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 max-w-6xl mx-auto">
                {[
                  { title: "Family Offices", icon: <Building className="w-7 h-7" /> },
                  { title: "Endowments", icon: <Target className="w-7 h-7" /> },
                  { title: "Sovereign Wealth", icon: <Network className="w-7 h-7" /> },
                  { title: "Pension Funds", icon: <Users className="w-7 h-7" /> },
                  { title: "Insurance", icon: <Shield className="w-7 h-7" /> },
                  { title: "Fund of Funds", icon: <Briefcase className="w-7 h-7" /> },
                  { title: "UHNW", icon: <User className="w-7 h-7" /> },
                  { title: "Strategic Partners", icon: <Link2 className="w-7 h-7" /> }
                ].map((type, index) => (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="w-16 h-16 bg-[#14213D] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      {React.cloneElement(type.icon, { className: "text-white" })}
                    </div>
                    <h3 className="text-[#14213D] text-lg font-medium">
                      {type.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capital Introductions Process Section */}
        <section className="py-32 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="max-w-3xl mx-auto text-center mb-20">
                <div className="inline-flex items-center justify-center space-x-3 mb-6">
                  <div className="h-[1px] w-8 bg-[#14213D]"></div>
                  <span className="text-[#14213D]/80 uppercase tracking-widest text-sm">Our Process</span>
                  <div className="h-[1px] w-8 bg-[#14213D]"></div>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#14213D] mb-8">
                  Capital
                  <span className="block mt-2">Introductions</span>
                </h2>
              </div>

              {/* Our Approach Section */}
              <div className="max-w-3xl mx-auto mb-24">
                <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="bg-[#14213D] rounded-xl p-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold font-montserrat text-[#14213D]">
                      Our Approach
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Our differentiator lies in leveraging modern marketing strategies with extensive experience in corporate finance, enabling swift execution and superior outcomes.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      'Modern marketing strategies',
                      'Swift execution framework',
                      'Geographic diversification',
                      'Risk-adjusted optimization'
                    ].map((item) => (
                      <div key={item} className="flex items-center space-x-3">
                        <ArrowRight className="w-5 h-5 text-[#14213D]" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Process Steps */}
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Target className="w-10 h-10 text-white" />,
                    title: "Strategic Planning",
                    description: "Develop targeted approach based on investment mandate and LP preferences",
                    steps: ["Mandate analysis", "Target identification", "Strategy development"]
                  },
                  {
                    icon: <Network className="w-10 h-10 text-white" />,
                    title: "Network Activation",
                    description: "Leverage our extensive network of institutional investors and family offices",
                    steps: ["Network mapping", "Initial outreach", "Interest qualification"]
                  },
                  {
                    icon: <Users className="w-10 h-10 text-white" />,
                    title: "Relationship Building",
                    description: "Foster meaningful connections leading to long-term capital partnerships",
                    steps: ["Meeting coordination", "Due diligence support", "Ongoing facilitation"]
                  }
                ].map((process, index) => (
                  <motion.div
                    key={process.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#14213D] to-[#1C2E56] rounded-2xl transform transition-transform group-hover:scale-[1.02] duration-500"></div>
                    <div className="relative bg-white rounded-2xl p-8 transform transition-transform group-hover:-translate-y-2 duration-500 border border-gray-100">
                      <div className="bg-[#14213D] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        {process.icon}
                      </div>
                      <h3 className="text-xl font-bold font-montserrat text-[#14213D] mb-4">
                        {process.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {process.description}
                      </p>
                      <div className="space-y-3">
                        {process.steps.map((step, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <div className="w-6 h-6 rounded-full bg-[#14213D]/5 flex items-center justify-center">
                              <span className="text-sm text-[#14213D]">{i + 1}</span>
                            </div>
                            <span className="text-gray-600">{step}</span>
                          </div>
                        ))}
                      </div>
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
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-white">
                  Accelerate Your
                  <br />
                  <span className="text-amber-300">Capital Journey</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                  Connect with our team to explore how we can help optimize your capital formation strategy and expand your investor network.
                </p>
                <button 
                  onClick={() => setIsCalOpen(true)}
                  className="bg-[#14213D] hover:bg-[#1C2E56] text-white px-10 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors inline-flex items-center gap-2 group"
                >
                  <span>Start the Conversation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 