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
              poster="https://res.cloudinary.com/dluf6sg5d/video/upload/so_0/v1/Clipped2_x7xswg"
            >
              <source 
                src="https://res.cloudinary.com/dluf6sg5d/video/upload/q_auto,f_auto,c_scale,w_1920,vc_auto,br_2m/v1/Clipped2_x7xswg"
                type="video/mp4"
              />
              <source 
                src="https://res.cloudinary.com/dluf6sg5d/video/upload/q_auto,f_webm,c_scale,w_1920,vc_auto,br_2m/v1/Clipped2_x7xswg"
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
                      const journeySection = document.querySelector('#growth-journey');
                      journeySection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                      <ChevronDown className="w-6 h-6" />
                    </div>
                    <span className="text-sm uppercase tracking-wider font-bold">The Journey</span>
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

        {/* Partnership Journey Section */}
        <section id="growth-journey" className="py-32 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-20"
              >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#14213D]">
                  The Growth Journey
                </h2>
                <div className="h-[1px] w-24 bg-[#14213D] mx-auto mt-6"></div>
              </motion.div>

              {/* Horizontal Timeline */}
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-200 transform -translate-y-1/2"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                  {[
                    {
                      phase: "Identify",
                      description: "Finding high-potential companies ready for next-level growth",
                      icon: <Target className="w-6 h-6" />
                    },
                    {
                      phase: "Partner",
                      description: "Creating strategic partnerships through equity investment",
                      icon: <Users className="w-6 h-6" />
                    },
                    {
                      phase: "Transform",
                      description: "Implementing growth strategies and operational excellence",
                      icon: <ArrowUpRight className="w-6 h-6" />
                    },
                    {
                      phase: "Scale",
                      description: "Accelerating growth and maximizing market potential",
                      icon: <TrendingUp className="w-6 h-6" />
                    }
                  ].map((step, index) => (
                    <motion.div
                      key={step.phase}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="relative bg-white p-8 rounded-lg"
                    >
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-12 h-12 rounded-full bg-[#E0C4AC] flex items-center justify-center">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-[#14213D] mt-8 mb-4">{step.phase}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Creation Section */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto space-y-24">
              {/* First Part - Value Creation */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#14213D]">
                    Creating Lasting
                    <span className="block">Value Together</span>
                  </h2>
                  <div className="h-[1px] w-24 bg-[#14213D]"></div>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    We're not traditional investors. We're hands-on growth partners who invest our expertise, time, and resources directly into your business. Our success is tied to your growth.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      "Full-Time Strategic Leadership",
                      "Operational Implementation",
                      "Growth Strategy Execution",
                      "Technology & Process Optimization",
                      "Team Development & Culture"
                    ].map((value, index) => (
                      <motion.div
                        key={value}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-4"
                      >
                        <div className="w-2 h-2 bg-[#14213D] rounded-full"></div>
                        <span className="text-gray-700">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Investment Focus Cards */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      title: "Growth Stage",
                      details: "Early Growth Phase",
                      icon: <BarChart2 className="w-6 h-6" />
                    },
                    {
                      title: "Partnership Model",
                      details: "Sweat Equity",
                      icon: <Users className="w-6 h-6" />
                    },
                    {
                      title: "Commitment",
                      details: "Full-Time Dedication",
                      icon: <Target className="w-6 h-6" />
                    },
                    {
                      title: "Alignment",
                      details: "Success-Based Returns",
                      icon: <PieChart className="w-6 h-6" />
                    }
                  ].map((focus, index) => (
                    <motion.div
                      key={focus.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                    >
                      <div className="w-12 h-12 bg-[#14213D]/5 rounded-lg flex items-center justify-center mb-4">
                        {React.cloneElement(focus.icon, { className: "text-[#14213D]" })}
                      </div>
                      <h3 className="text-2xl font-bold font-montserrat text-[#1A1A1A] mb-4">{focus.title}</h3>
                      <p className="text-gray-600">{focus.details}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Investment Criteria Section */}
              <div className="pt-20 border-t border-gray-200">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="max-w-3xl mx-auto text-center"
                >
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#14213D]">
                    Investment Criteria
                  </h2>
                  <p className="text-gray-500 mt-4 text-lg">
                    We partner with exceptional companies demonstrating these characteristics
                  </p>
                </motion.div>

                <div className="mt-16 max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        metric: "Growth",
                        label: "Current Stage",
                        description: "Proven revenue model"
                      },
                      {
                        metric: "25%+",
                        label: "Growth Potential",
                        description: "Annual growth target"
                      },
                      {
                        metric: "100%",
                        label: "Partner Dedication",
                        description: "Full-time commitment"
                      }
                    ].map((criterion, index) => (
                      <motion.div
                        key={criterion.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-white p-8 rounded-xl border border-gray-100 hover:border-[#14213D]/20 transition-colors duration-300"
                      >
                        <div className="text-center">
                          <div className="text-3xl font-light text-[#14213D] mb-2 group-hover:scale-110 transition-transform duration-300">
                            {criterion.metric}
                          </div>
                          <div className="text-sm font-medium text-[#14213D] uppercase tracking-wider mb-3">
                            {criterion.label}
                          </div>
                          <div className="text-sm text-gray-500">
                            {criterion.description}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12"
                  >
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                      <div className="space-y-6">
                        <h3 className="text-xl font-medium text-[#14213D] text-center">
                          Company Profile
                        </h3>
                        {[
                          "Proven Revenue Model",
                          "Strong Unit Economics",
                          "Experienced Leadership"
                        ].map((item, i) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + (i * 0.1) }}
                            className="flex items-center gap-3 justify-center"
                          >
                            <div className="w-1 h-1 rounded-full bg-[#14213D]"></div>
                            <span className="text-gray-600">{item}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-xl font-medium text-[#14213D] text-center">
                          Growth Potential
                        </h3>
                        {[
                          "Scalable Operations",
                          "Market Expansion Opportunities",
                          "Technology-Enabled Business"
                        ].map((item, i) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + (i * 0.1) }}
                            className="flex items-center gap-3 justify-center"
                          >
                            <div className="w-1 h-1 rounded-full bg-[#14213D]"></div>
                            <span className="text-gray-600">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32">
          {/* Background Image */}
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
                className="space-y-8"
              >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-white">
                  Ready to Scale
                  <br />
                  <span className="text-[#E0C4AC]">Your Business?</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                  Let's explore how our partnership can accelerate your growth journey.
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
    </div>
  );
} 