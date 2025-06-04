'use client'

import React, { useState, useEffect } from 'react';
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/card"
import { Mail, ArrowRight, Check, Star, Users, BarChart, Zap, Clock, TrendingUp, ChevronLeft, ChevronRight, Calendar, UserX, PieChart, DollarSign, Menu, Lightbulb, Phone, Cog, ChevronDown, Target, Wand2, PhoneCall, Play, Plus, Book, Building, Network, BarChart2, ArrowLeftRight, Globe, Cpu, ArrowUpRight, X, Award, Shield, AlertTriangle, ArrowDown } from "lucide-react"
import Image from 'next/image'
import Link from "next/link"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import CalButton from '../components/ui/CalButton'
import ServicesDropdown from '../components/ui/ServicesDropdown';
import Navigation from '../components/ui/Navigation';

const MainComponent = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [currentHeaderIndex, setCurrentHeaderIndex] = useState(0);
  const [showSellerForm, setShowSellerForm] = useState(false);

  const headers = [
    { main: "Strategic Growth", sub: "Capital Formation" },
    { main: "Fund Advisory", sub: "Portfolio Excellence" },
    { main: "Capital Markets", sub: "Value Creation" },
    { main: "Growth Partners", sub: "Market Leaders" },
  ];

  const [selectedChallenge, setSelectedChallenge] = useState(null)

  const challenges = [
    // ... remove this entire array
  ];

  const rotatingPhrases = [
    "You Close Investment Deals",
    "You Scale Your Portfolio",
    "You Maximize Returns",
    "You Expand Deal Flow",
    "You Drive Revenue Growth",
    "You Win Major Clients"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % rotatingPhrases.length);
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Header rotation interval
    const headerInterval = setInterval(() => {
      setCurrentHeaderIndex((prevIndex) => (prevIndex + 1) % headers.length);
    }, 4000);

    return () => {
      clearInterval(headerInterval);
    };
  }, [headers.length]);

  const testimonials = [
    {
      name: "John Doe",
      company: "Tech Solutions Inc.",
      quote: "ColdEmailPro has transformed our outreach strategy. We've seen a 40% increase in response rates!",
      image: "/placeholder.svg"
    },
    {
      name: "Jane Smith",
      company: "Marketing Experts LLC",
      quote: "The time we've saved with ColdEmailPro's automation is incredible. Our team can focus on what really matters.",
      image: "/placeholder.svg"
    },
    {
      name: "Mike Johnson",
      company: "Sales Accelerator",
      quote: "The AI-powered personalization is a game-changer. Our emails now truly resonate with our prospects.",
      image: "/placeholder.svg"
    }
  ]

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } }
  }

  // Update the ctaButtonClass for better mobile responsiveness
  const ctaButtonClass = "bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-4 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors flex items-center justify-center shadow-lg mx-auto w-full sm:w-auto";

  const processSteps = [
    { 
      icon: <Target className="w-8 h-8" />, 
      title: "Strategy Analysis", 
      description: "Assess your deal flow approach" 
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      title: "Market Mapping", 
      description: "Identify ideal opportunities" 
    },
    { 
      icon: <Mail className="w-8 h-8" />, 
      title: "Pipeline Launch", 
      description: "Configure and activate outreach" 
    },
    { 
      icon: <BarChart className="w-8 h-8" />, 
      title: "Optimization", 
      description: "Refine and scale success" 
    },
    { 
      icon: <TrendingUp className="w-8 h-8" />, 
      title: "Portfolio Growth", 
      description: "Expand investment pipeline" 
    },
  ];

  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3 }
    }));
  }, [controls]);

  const handleStepHover = (index) => {
    setActiveStep(index);
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const playVideoButtonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95, transition: { duration: 0.3 } },
  };

  const pulsateVariants = {
    idle: { scale: 1, opacity: 0.5 },
    animate: { 
      scale: [1, 1.05, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: { 
        repeat: Infinity, 
        duration: 2,
        ease: "easeInOut"
      } 
    },
  };

  const shimmerVariants = {
    idle: { backgroundPosition: "200% 0" },
    hover: { backgroundPosition: "0 0", transition: { duration: 1, ease: "linear", repeat: Infinity } },
  };

  const spinIconVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  // Add this function after the state declarations and before the return statement
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Main brand color updates
  const brandColors = {
    primary: "#14213D",     // Oxford Blue - main brand color
    darker: "#0C1428",      // Darker shade for text
    lighter: "#1C2E56",     // Lighter shade for hover states
    accent: "#FFFFFF",      // White for contrast
    text: {
      primary: "#14213D",   // Dark text
      secondary: "#475569", // Slate gray for secondary text
    }
  };

  // Update CTA buttons
  const standardCTA = "bg-[#14213D] hover:bg-[#1C2E56] text-white px-8 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors";

  // Add this useEffect to handle scroll
  useEffect(() => {
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

  const totalCards = 4;  // Total number of cards
  const cardsPerView = 3;  // Number of cards shown at once

  // Update the carousel navigation functions
  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % (isMobile ? 4 : 2)); // 4 positions for mobile, 2 for desktop
  };

  const prevCard = () => {
    setCurrentCard((prev) => {
      if (isMobile) {
        return (prev - 1 + 4) % 4; // Cycle through all 4 cards on mobile
      }
      return prev === 0 ? 1 : 0; // Toggle between 2 positions on desktop
    });
  };

  // Add this useEffect for mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Add this constant at the top with other constants
  const capabilities = [
    {
      title: "Growth Enabler",
      description: "Orchestrate revenue acceleration through sophisticated market penetration strategies, elite business intelligence, and precision-engineered sales frameworks.",
      icon: <TrendingUp className="w-12 h-12 text-white" />,
      points: [
        "Revenue system mastery",
        "Market penetration design",
        "Elite business intelligence"
      ]
    },
    {
      title: "Strategic Partner",
      description: "Execute transformative partnerships through sophisticated market intelligence and deep sector expertise.",
      icon: <Users className="w-12 h-12 text-white" />,
      points: [
        "Cross-border transactions",
        "Market consolidation strategy",
        "Strategic positioning"
      ]
    },
    {
      title: "Global Relationships",
      description: "Leverage our premier network of institutional investors and strategic partners across key global markets.",
      icon: <Globe className="w-12 h-12 text-white" />,
      points: [
        "Institutional investor access",
        "Strategic capital deployment",
        "Global deal orchestration"
      ]
    },
    {
      title: "Digital Intelligence",
      description: "Leverage cutting-edge AI and data analytics to drive precision in deal sourcing and execution.",
      icon: <Cpu className="w-12 h-12 text-white" />,
      points: [
        "AI-powered deal sourcing",
        "Predictive market analytics",
        "Automated outreach systems"
      ]
    }
  ];

  // Add this constant at the top with other constants
  const highLevelProcess = [
    {
      title: "Strategic Analysis",
      description: "Comprehensive evaluation of opportunities and market positioning",
      icon: <Target className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Capital Optimization",
      description: "Structuring the right mix of equity, debt, and hybrid solutions",
      icon: <BarChart className="w-8 h-8 text-purple-400" />
    },
    {
      title: "Growth Execution",
      description: "Implementing strategic initiatives and monitoring progress",
      icon: <TrendingUp className="w-8 h-8 text-green-400" />
    },
    {
      title: "Value Creation",
      description: "Driving operational excellence and market expansion",
      icon: <ArrowUpRight className="w-8 h-8 text-yellow-400" />
    }
  ];

  // Add this constant at the top with other constants
  const partnershipPrinciples = [
    {
      icon: <Users className="w-12 h-12 text-white" />,
      title: "Aligned Incentives",
      description: "Our team operates on an equity partnership model, ensuring direct alignment with your success. Every advisor is personally invested in delivering exceptional outcomes.",
      points: [
        "Performance-based compensation",
        "Long-term value creation",
        "Shared success metrics"
      ]
    },
    {
      icon: <Target className="w-12 h-12 text-white" />,
      title: "Strategic Co-Investment",
      description: "We structure engagements through profit and equity participation, creating true partnerships that drive mutual growth and sustainable value.",
      points: [
        "Equity partnerships",
        "Revenue sharing models",
        "Growth-aligned incentives"
      ]
    },
    {
      icon: <Award className="w-12 h-12 text-white" />,
      title: "Selective Engagement",
      description: "We maintain excellence by engaging exclusively with ventures where our expertise can drive transformative outcomes, accepting only 75% of potential engagements.",
      points: [
        "Rigorous evaluation process",
        "Strategic fit assessment",
        "Value creation potential"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Top Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-scroll' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-3xl sm:text-3xl md:text-2xl font-light font-montserrat tracking-wider text-white">
              Vector Summit
            </span>
          </Link>

          {/* Navigation Component */}
          <Navigation currentPath="/" />
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-950 min-h-[100vh] flex items-center relative overflow-hidden">
          {/* Video background */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster="https://res.cloudinary.com/dluf6sg5d/video/upload/so_0/v1/Snowy_Mountain_Drone_Footage_osldpl"
            >
              <source 
                src="https://res.cloudinary.com/dluf6sg5d/video/upload/q_auto,f_auto,c_scale,w_1920,vc_auto,br_2m/v1/Snowy_Mountain_Drone_Footage_osldpl"
                type="video/mp4"
              />
              <source 
                src="https://res.cloudinary.com/dluf6sg5d/video/upload/q_auto,f_webm,c_scale,w_1920,vc_auto,br_2m/v1/Snowy_Mountain_Drone_Footage_osldpl"
                type="video/webm"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent"></div>
          </div>

          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-light font-montserrat tracking-wider text-white mb-8">
                  VECTOR
                  <span className="block mt-2">
                    SUMMIT
                  </span>
                </h1>
                
                <div className="h-3 w-36 bg-[#14213D] mb-12"></div>
                
                <p className="text-lg sm:text-xl md:text-2xl font-light font-montserrat tracking-wider text-gray-300 mb-8 max-w-4xl">
                  <span className="block mb-2 font-semibold">Off Market Deal Flow</span>
                  <span className="block text-base sm:text-lg md:text-xl opacity-80 font-semibold mb-8">
                    Exclusive opportunities. Boutique advisory. Advanced matching.
                  </span>
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center space-x-4 text-white hover:text-[#14213D] transition-colors cursor-pointer"
                  onClick={() => {
                    const nextSection = document.querySelector('section:nth-of-type(2)');
                    nextSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <ChevronDown className="w-6 h-6" />
                  </div>
                  <span className="text-sm uppercase tracking-wider font-bold">Learn More</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO SECTION */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-light font-montserrat tracking-wider text-[#14213D] mb-6">
                  What We Do
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We connect qualified buyers with business owners ready to sell through our advanced matching platform and proprietary network.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-[#14213D] mb-4">Advanced Matching Process</h3>
                  <p className="text-gray-600 mb-6">
                    Using AI-powered systems and proprietary technology, we identify and connect the right opportunities based on your specific criteria.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-[#14213D] mt-1" />
                      <div>
                        <span className="font-semibold text-[#14213D]">For Buyers:</span>
                        <span className="text-gray-600"> Get matched with businesses that meet your EBITDA, industry, and operational criteria</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-[#14213D] mt-1" />
                      <div>
                        <span className="font-semibold text-[#14213D]">For Sellers:</span>
                        <span className="text-gray-600"> Connect with qualified, motivated buyers at no cost</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-[#14213D] mt-1" />
                      <div>
                        <span className="font-semibold text-[#14213D]">Off-Market Access:</span>
                        <span className="text-gray-600"> Exclusive opportunities not available through traditional channels</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-[#14213D]/5 flex items-center justify-center">
                    <Network className="w-32 h-32 text-[#14213D]/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEAL FLOW NETWORK DIAGRAM SECTION */}
        <section className="py-32 bg-white">
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
                  Connecting Private Equity
                  <br />
                  Buyers & Sellers
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We connect leading private equity buyers with business owners and sellers, enabling seamless, confidential transactions.
                </p>
              </div>

              {/* Buyers Section */}
              <div className="mb-32">
                <div className="text-center mb-16">
                  <h3 className="text-2xl font-medium text-[#14213D] mb-4">Buyers</h3>
                  <div className="h-[2px] w-24 bg-[#14213D] mx-auto"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  {[
                    { title: "Private Equity", icon: <Building className="w-6 h-6" /> },
                    { title: "Family Offices", icon: <Users className="w-6 h-6" /> },
                    { title: "Institutional Investors", icon: <DollarSign className="w-6 h-6" /> },
                    { title: "Strategic Buyers", icon: <Network className="w-6 h-6" /> }
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
                  <div className="h-32 w-[2px] bg-gradient-to-b from-[#14213D] to-blue-400"></div>
                </div>
              </div>

              {/* Sellers Section */}
              <div className="text-center mb-16">
                <h3 className="text-2xl font-medium text-[#14213D] mb-4">Business Owners & Sellers</h3>
                <div className="h-[2px] w-24 bg-blue-400 mx-auto"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 max-w-6xl mx-auto">
                {[
                  { title: "Founder-Owned Businesses", icon: <Users className="w-7 h-7" /> },
                  { title: "Family Businesses", icon: <Building className="w-7 h-7" /> },
                  { title: "Corporate Divestitures", icon: <ArrowLeftRight className="w-7 h-7" /> },
                  { title: "Management Teams", icon: <TrendingUp className="w-7 h-7" /> }
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

        {/* HOW MATCHING WORKS SECTION */}
        <section className="py-24 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light font-montserrat tracking-wider text-[#14213D] mb-4">
                How Our Matching Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A streamlined 3-step process to connect the right buyers and sellers.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-8 h-8 text-[#14213D]" />,
                  title: "Define Criteria",
                  desc: "Buyers specify their investment parameters: EBITDA range, industry focus, business characteristics."
                },
                {
                  icon: <Network className="w-8 h-8 text-[#14213D]" />,
                  title: "Find Matches",
                  desc: "Our AI and proprietary systems identify businesses that meet your criteria from our extensive network."
                },
                {
                  icon: <ArrowLeftRight className="w-8 h-8 text-[#14213D]" />,
                  title: "Make Connections",
                  desc: "We facilitate introductions and provide communication support to ensure smooth initial interactions."
                }
              ].map((step, i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-sm border border-[#14213D]/10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#14213D]/10 flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <div className="text-lg font-semibold text-[#14213D] mb-3">{step.title}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR TECHNOLOGY ADVANTAGE SECTION */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-light font-montserrat tracking-wider text-[#14213D] mb-4">
                  Our Technology Advantage
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Advanced systems and proprietary technology that deliver faster, more accurate matches.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Cpu className="w-8 h-8 text-[#14213D]" />,
                    title: "AI-Powered Matching",
                    desc: "Machine learning algorithms that improve match quality over time."
                  },
                  {
                    icon: <Globe className="w-8 h-8 text-[#14213D]" />,
                    title: "Web Scraping Technology",
                    desc: "Automated systems that continuously identify new opportunities."
                  },
                  {
                    icon: <Shield className="w-8 h-8 text-[#14213D]" />,
                    title: "Proprietary Database",
                    desc: "Exclusive access to off-market businesses and qualified buyers."
                  },
                  {
                    icon: <Zap className="w-8 h-8 text-[#14213D]" />,
                    title: "Rapid Execution",
                    desc: "Technology-enabled speed that secures deals before competition."
                  }
                ].map((advantage, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 rounded-xl bg-[#14213D]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#14213D]/20 transition-colors">
                      {advantage.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[#14213D] mb-2">{advantage.title}</h3>
                    <p className="text-gray-600 text-sm">{advantage.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION - Updated */}
        <section className="py-24 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
              {/* For Buyers */}
              <div>
                <h3 className="text-2xl font-bold text-[#14213D] mb-6">Why Buyers Choose Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#14213D] mt-1" />
                    <span>Access to exclusive, off-market opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#14213D] mt-1" />
                    <span>Pre-qualified matches based on your criteria</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#14213D] mt-1" />
                    <span>Faster deal flow through advanced technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#14213D] mt-1" />
                    <span>Communication support throughout introduction process</span>
                  </li>
                </ul>
              </div>
              {/* For Sellers */}
              <div>
                <h3 className="text-2xl font-bold text-[#14213D] mb-6">Why Sellers Trust Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#14213D] mt-1" />
                    <span>No cost to sellers - completely free service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#14213D] mt-1" />
                    <span>Access to qualified, motivated buyers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#14213D] mt-1" />
                    <span>Confidential matching process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#14213D] mt-1" />
                    <span>Ongoing communication support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative py-32 w-[100vw] -ml-[50vw] left-[50%] bg-[#14213D]">
          <div className="absolute inset-0">
            <Image
              src="/River Near Mountains.jpg"
              alt="Mountains"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
          </div>
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto text-center px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-white">
                  Ready for Exclusive Deal Flow?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                  Schedule a confidential call to access our latest opportunities and see how we can help you achieve your investment goals.
                </p>
                <CalButton className="bg-[#14213D] hover:bg-[#1C2E56] text-white px-10 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors inline-flex items-center gap-2 group">
                  <span>Schedule Meeting</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </CalButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SELLER MODAL FORM */}
        {showSellerForm && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-lg w-full relative">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-[#14213D]"
                onClick={() => setShowSellerForm(false)}
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold text-[#14213D] mb-4">Submit Your Business</h3>
              <p className="text-gray-600 mb-6">Share your details and our team will reach out for a confidential discussion.</p>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full border border-gray-200 rounded-lg px-4 py-3" />
                <input type="email" placeholder="Your Email" className="w-full border border-gray-200 rounded-lg px-4 py-3" />
                <input type="text" placeholder="Company Name" className="w-full border border-gray-200 rounded-lg px-4 py-3" />
                <input type="text" placeholder="Industry" className="w-full border border-gray-200 rounded-lg px-4 py-3" />
                <textarea placeholder="Tell us about your business" className="w-full border border-gray-200 rounded-lg px-4 py-3" rows={3}></textarea>
                <button type="submit" className="bg-[#14213D] hover:bg-[#1C2E56] text-white px-6 py-3 rounded-lg font-montserrat tracking-wider text-lg transition-colors w-full">Submit</button>
              </form>
            </div>
          </div>
        )}

        {/* FOOTER */}
        <footer className="bg-white text-[#1A1A1A] py-16 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Column 1 - Brand */}
              <div className="space-y-6">
                <h3 className="text-2xl font-light font-montserrat tracking-wider">Vector Summit</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Private equity deal flow and investment partners architecting bespoke solutions for exceptional growth.
                </p>
              </div>
              {/* Column 3 - Quick Links */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold font-montserrat">Quick Links</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-[#14213D] transition-colors">
                      <span className="font-normal">Home Page</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-600 hover:text-[#14213D] transition-colors">
                      <span className="font-normal">Our Profile</span>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Column 4 - Contact */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold font-montserrat">Get in Touch</h4>
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#14213D] transition-colors inline-flex items-center"
                >
                  <span className="font-normal">Connect on LinkedIn</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
            {/* Copyright */}
            <div className="mt-16 text-center">
              <div className="text-sm text-gray-500 font-light">
                © {new Date().getFullYear()} Vector Summit. All rights reserved.
              </div>
            </div>
          </div>
        </footer>

        {showVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-4 rounded-lg w-full max-w-4xl">
              <div className="relative" style={{ paddingBottom: '75%' }}> {/* Changed from 16:9 to 4:3 ratio */}
                <iframe
                  src="https://www.loom.com/embed/70adfb2aae414173a2d1e3fece1e8a9b?sid=a51bf21b-d963-47f2-86c3-69af48c87430"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              <button
                onClick={() => setShowVideo(false)}
                className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
              >
                Close Video
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default function Page() {
  return <MainComponent />;
}