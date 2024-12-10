'use client'

import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Building, Target, Network, Users, Briefcase, TrendingUp, ArrowUpRight, FileText, PieChart, Link2 } from "lucide-react";
import Navigation from '../../../components/ui/Navigation';
import CalEmbed from '../../../components/CalEmbed';
import Footer from '../../../components/ui/Footer';

export default function MergersAcquisitions() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isCalOpen, setIsCalOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const standardCTA = "bg-[#14213D] hover:bg-[#1C2E56] text-white px-8 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors flex items-center gap-2";

  const services = [
    {
      icon: <Briefcase className="w-10 h-10 text-white" />,
      title: "Buy-Side Advisory",
      description: "Comprehensive acquisition strategy and execution",
      benefits: [
        "Target identification & screening",
        "Initial approach & negotiation",
        "Purchase agreement structuring"
      ]
    },
    {
      icon: <Building className="w-10 h-10 text-white" />,
      title: "Sell-Side Advisory",
      description: "Maximizing value through strategic sale processes",
      benefits: [
        "Business preparation & positioning",
        "Buyer identification & outreach",
        "Competitive auction management"
      ]
    },
    {
      icon: <Target className="w-10 h-10 text-white" />,
      title: "Transaction Support",
      description: "End-to-end M&A execution services",
      benefits: [
        "Due diligence coordination",
        "Deal structure optimization",
        "Post-merger integration planning"
      ]
    }
  ];

  const expertise = [
    {
      icon: <Network className="w-8 h-8 text-[#14213D]" />,
      title: "Deal Sourcing",
      description: "Proprietary deal flow and target identification"
    },
    {
      icon: <Users className="w-8 h-8 text-[#14213D]" />,
      title: "Valuation",
      description: "Advanced financial modeling and valuation analysis"
    },
    {
      icon: <Link2 className="w-8 h-8 text-[#14213D]" />,
      title: "Due Diligence",
      description: "Comprehensive financial and operational review"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#14213D]" />,
      title: "Deal Structure",
      description: "Transaction terms and consideration optimization"
    },
    {
      icon: <PieChart className="w-8 h-8 text-[#14213D]" />,
      title: "Negotiation",
      description: "Expert deal negotiation and execution"
    },
    {
      icon: <FileText className="w-8 h-8 text-[#14213D]" />,
      title: "Integration",
      description: "Post-merger integration and synergy realization"
    }
  ];

  const heroHighlights = [
    { 
      title: "Buy-Side", 
      description: "Target identification and acquisition execution"
    },
    { 
      title: "Sell-Side", 
      description: "Strategic sale process management"
    },
    { 
      title: "Due Diligence", 
      description: "Comprehensive transaction analysis"
    },
    { 
      title: "Integration", 
      description: "Post-merger value capture"
    }
  ];

  const heroContent = {
    label: "Transaction Advisory",
    title: "Mergers &",
    coloredTitle: "Acquisitions",
    description: "Expert guidance through complex M&A transactions from strategy through closing and integration"
  };

  const ctaContent = {
    title: "Transaction Excellence",
    description: "Our seasoned M&A professionals deliver successful outcomes through rigorous process management and deep transaction expertise."
  };

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
          <Navigation currentPath="/services/mergers-acquisitions" />
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
              poster="https://res.cloudinary.com/dluf6sg5d/video/upload/so_0/v1/Snow_Covered_Mountain_4K_Video_ipsllb"
            >
              <source 
                src="https://res.cloudinary.com/dluf6sg5d/video/upload/q_auto,f_auto,c_scale,w_1920,vc_auto,br_2m/v1/Snow_Covered_Mountain_4K_Video_ipsllb"
                type="video/mp4"
              />
              <source 
                src="https://res.cloudinary.com/dluf6sg5d/video/upload/q_auto,f_webm,c_scale,w_1920,vc_auto,br_2m/v1/Snow_Covered_Mountain_4K_Video_ipsllb"
                type="video/webm"
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
                    <span className="text-white uppercase tracking-wider text-sm font-semibold">Transaction Advisory</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-light font-montserrat tracking-wider text-white">
                    Mergers &
                    <span className="block mt-2 text-blue-500">Acquisitions</span>
                  </h1>
                </div>
                
                <p className="text-lg md:text-xl font-medium text-gray-300 max-w-xl leading-relaxed">
                  Senior-led advisory services delivering premium valuations and superior transaction outcomes
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
                    className="flex items-center space-x-4 text-white hover:text-blue-500 transition-colors cursor-pointer w-full sm:w-auto pl-4 sm:pl-0 justify-start sm:justify-center"
                    onClick={() => {
                      const dealOriginationSection = document.querySelector('#deal-origination');
                      dealOriginationSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                      <ChevronDown className="w-6 h-6" />
                    </div>
                    <span className="text-sm uppercase tracking-wider font-bold">Deal Origination</span>
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

        {/* Deal Expertise Section */}
        <section id="deal-origination" className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#14213D]">
                  Deal Origination
                </h2>
                <div className="h-[1px] w-24 bg-[#14213D] mt-6 mb-8"></div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Leveraging our extensive network to source and structure the right opportunities for our clients.
                </p>
              </motion.div>

              <div className="mt-24 grid md:grid-cols-2 gap-16">
                {[
                  {
                    title: "Proprietary Deal Flow",
                    description: "Direct access to off-market opportunities through our established network of industry relationships",
                    points: [
                      "Industry-specific targeting",
                      "Direct owner relationships",
                      "Exclusive opportunities",
                      "First-look advantages"
                    ]
                  },
                  {
                    title: "Deal Qualification",
                    description: "Rigorous screening process to identify the most compelling opportunities",
                    points: [
                      "Strategic fit analysis",
                      "Growth potential assessment",
                      "Valuation framework",
                      "Synergy identification"
                    ]
                  }
                ].map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold font-montserrat text-[#1A1A1A] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="pt-6 space-y-3">
                      {service.points.map((point, i) => (
                        <div key={i} className="text-gray-600">
                          {point}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sell-Side Excellence Section */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-8 max-w-3xl"
              >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#14213D]">
                  Sell-Side Advisory
                </h2>
                <div className="h-[1px] w-24 bg-[#14213D]"></div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Maximizing value through strategic positioning and competitive process management.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-12 mt-20">
                {[
                  {
                    title: "Strategic Positioning",
                    description: "Crafting compelling investment theses that resonate with targeted buyers"
                  },
                  {
                    title: "Buyer Universe",
                    description: "Comprehensive mapping of strategic and financial buyers globally"
                  },
                  {
                    title: "Process Management",
                    description: "Orchestrating competitive dynamics to maximize value and certainty"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="pl-8 border-l-2 border-[#14213D]"
                  >
                    <h3 className="text-xl font-medium text-[#14213D] mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-24">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#14213D]">
                  Transaction Process
                </h2>
                <div className="h-[1px] w-24 bg-[#14213D] mx-auto mt-6 mb-8"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-16">
                {[
                  {
                    phase: "Preparation",
                    steps: [
                      "Business positioning",
                      "Financial analysis",
                      "Market assessment",
                      "Materials development"
                    ]
                  },
                  {
                    phase: "Marketing",
                    steps: [
                      "Buyer outreach",
                      "Information sharing",
                      "Management meetings",
                      "Offer solicitation"
                    ]
                  },
                  {
                    phase: "Execution",
                    steps: [
                      "Due diligence",
                      "Documentation",
                      "Negotiation",
                      "Closing"
                    ]
                  }
                ].map((phase, index) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    <div className="mb-6">
                      <div className="text-sm text-[#14213D] opacity-50 mb-2">Phase {index + 1}</div>
                      <h3 className="text-2xl font-bold font-montserrat text-[#1A1A1A] mb-4">
                        {phase.phase}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {phase.steps.map((step, i) => (
                        <div key={i} className="text-gray-600">
                          {step}
                        </div>
                      ))}
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
                  Transform Your
                  <br />
                  <span className="text-blue-500">Transaction</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                  Let's explore how our M&A expertise can help you achieve superior transaction outcomes and maximize value.
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

      <CalEmbed 
        isOpen={isCalOpen}
        onClose={() => setIsCalOpen(false)}
      />

      {/* Update scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={() => {
          const dealOriginationSection = document.querySelector('#deal-origination');
          dealOriginationSection?.scrollIntoView({ behavior: 'smooth' });
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
          className="text-white hover:text-blue-500 transition-colors"
        >
          <ChevronDown className="w-12 h-12" />
        </motion.div>
      </motion.div>
    </div>
  );
} 