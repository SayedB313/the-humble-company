'use client'

import React, { useState, useEffect } from 'react';
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/card"
import { Mail, ArrowRight, Check, Star, Users, BarChart, Zap, Clock, TrendingUp, ChevronLeft, ChevronRight, Calendar, UserX, PieChart, DollarSign, Menu, Lightbulb, Phone, Cog, ChevronDown, Target, Wand2, PhoneCall, Play, Plus, Book, Building, Network, BarChart2, ArrowLeftRight, Globe, Cpu, ArrowUpRight, X, Award, Shield, AlertTriangle } from "lucide-react"
import Image from 'next/image'
import Link from "next/link"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import CalEmbed from '../components/CalEmbed'
import ServicesDropdown from '../components/ui/ServicesDropdown';
import Navigation from '../components/ui/Navigation';

// Add this at the top of the file, after the imports
declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (config: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: undefined;
      }) => void;
    };
  }
}

const MainComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isCalOpen, setIsCalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [currentHeaderIndex, setCurrentHeaderIndex] = useState(0);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
    // This will ensure Calendly is initialized after the component mounts
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/vectorasylum/strategy',
        text: 'Book Strategy Session',
        color: '#0069ff',
        textColor: '#ffffff',
        branding: undefined
      });
    }

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

  // Add this useEffect to close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ServicesDropdown />
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors font-light">
              Our Profile
            </Link>
            <button
              onClick={() => setIsCalOpen(true)}
              className="text-white hover:text-gray-300 transition-colors font-light"
            >
              Schedule Meeting
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? '100vh' : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 bg-[#14213D] z-40"
        >
          {isMobileMenuOpen && (
            <div className="container mx-auto px-4 py-12 h-full flex flex-col">
              {/* Close button at the top */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-white p-2"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Menu Items */}
              <div className="flex flex-col space-y-8 mt-20">
                {/* Services Links - Updated order */}
                <Link 
                  href="/services/strategic-advisory" 
                  className="text-2xl text-white hover:text-gray-300 transition-colors font-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Strategic Advisory
                </Link>
                <Link 
                  href="/services/growth-equity" 
                  className="text-2xl text-white hover:text-gray-300 transition-colors font-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Growth Equity
                </Link>
                <Link 
                  href="/services/capital-formation" 
                  className="text-2xl text-white hover:text-gray-300 transition-colors font-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Capital Formation
                </Link>
                <Link 
                  href="/services/mergers-acquisitions" 
                  className="text-2xl text-white hover:text-gray-300 transition-colors font-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mergers & Acquisitions
                </Link>

                {/* Other Links */}
                <Link 
                  href="/about" 
                  className="text-2xl text-white hover:text-gray-300 transition-colors font-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Profile
                </Link>

                {/* Schedule Meeting Button */}
                <button
                  onClick={() => {
                    setIsCalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-2xl text-white hover:text-gray-300 transition-colors font-light text-left"
                >
                  Schedule Meeting
                </button>
              </div>

              {/* Bottom Section */}
              <div className="mt-auto mb-8">
                <div className="h-[1px] w-full bg-white/20 mb-8"></div>
                <span className="text-white/60 text-sm">
                  © {new Date().getFullYear()} Vector Summit
                </span>
              </div>
            </div>
          )}
        </motion.div>
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
                  <span className="block mb-2 font-semibold">Strategic Network-Based Advisory</span>
                  <span className="block text-base sm:text-lg md:text-xl opacity-80 font-semibold mb-8">
                    Bridging Visionary Leaders with Elite Networks
                  </span>
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center space-x-4 text-white hover:text-[#14213D] transition-colors cursor-pointer"
                  onClick={() => {
                    const expertiseSection = document.querySelector('#expertise');
                    expertiseSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <ChevronDown className="w-6 h-6" />
                  </div>
                  <span className="text-sm uppercase tracking-wider font-bold">Our Expertise</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Background Elements */}
              <div className="absolute inset-0">
                <div className="absolute right-0 top-40 w-[800px] h-[800px] bg-[#14213D]/[0.02] rounded-full blur-3xl"></div>
                <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-[#14213D]/[0.02] rounded-full blur-2xl"></div>
                <div className="hidden md:block absolute left-1/3 top-1/4 w-[2px] h-[400px] bg-gradient-to-b from-[#14213D]/20 to-transparent"></div>
              </div>
              
              {/* Section Header */}
              <div className="text-center mb-20 relative">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-black">
                  Connecting Critical Dots
                </h2>
                <div className="h-[2px] w-24 bg-[#14213D] mx-auto mt-8 mb-8"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  "The value isn't in the dots themselves—it's in seeing the connections others miss."
                </p>
              </div>
              
              {/* Main Content */}
              <div className="grid md:grid-cols-2 gap-20 relative">
                {/* Left Column - Connecting Dots for Companies */}
                <div className="space-y-8">
                  <div className="mb-10">
                    <h3 className="text-2xl md:text-3xl font-light font-montserrat tracking-wide text-[#14213D] mb-4">
                      For Organizations
                    </h3>
                    <p className="text-lg text-gray-600">
                      We reveal the strategic map that others can't see, connecting your business to the capital, networks, and opportunities that drive transformative growth.
                    </p>
                  </div>
                  
                  <div className="space-y-8">
                    {[
                      {
                        title: "Capital Formation",
                        description: "Connecting funds and companies to the right capital sources through our elite network",
                        icon: "💰" // Or use TrendingUp icon
                      },
                      {
                        title: "Strategic Partnerships",
                        description: "Orchestrating high-value connections that unlock new markets and capabilities",
                        icon: "🤝" // Or use Users icon
                      },
                      {
                        title: "Growth Architecture",
                        description: "Designing bespoke pathways to scale through strategic acquisitions and market positioning",
                        icon: "📈" // Or use Target icon
                      }
                    ].map((service, index) => (
                      <div key={service.title} className="flex gap-5 group">
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-12 h-12 rounded-full border border-[#14213D]/20 flex items-center justify-center 
                            group-hover:bg-[#14213D] group-hover:border-[#14213D] transition-all duration-500">
                            <span className="text-[#14213D] group-hover:text-white transition-colors duration-500 text-xl">
                              {service.icon}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-medium text-[#14213D] mb-2 group-hover:translate-x-1 transition-transform duration-300">
                            {service.title}
                          </h4>
                          <p className="text-gray-600">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Right Column - Connecting Dots for Executives */}
                <div className="space-y-8">
                  <div className="mb-10">
                    <h3 className="text-2xl md:text-3xl font-light font-montserrat tracking-wide text-[#14213D] mb-4">
                      For Executives
                    </h3>
                    <p className="text-lg text-gray-600">
                      We illuminate the path forward through personalized strategic guidance, helping you see connections and opportunities others miss.
                    </p>
                  </div>
                  
                  <div className="space-y-8">
                    {[
                      {
                        title: "Strategic Intelligence",
                        description: "One-on-one guidance that connects market signals to boardroom decisions",
                        icon: "🧠" // Or use Brain icon
                      },
                      {
                        title: "Decision Architecture",
                        description: "Structured frameworks that transform complex challenges into clear action paths",
                        icon: "🧩" // Or use Network icon
                      },
                      {
                        title: "Opportunity Mapping",
                        description: "Revealing hidden connections between your experience, market needs, and strategic possibilities",
                        icon: "🗺️" // Or use Map icon
                      }
                    ].map((service, index) => (
                      <div key={service.title} className="flex gap-5 group">
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-12 h-12 rounded-full border border-[#14213D]/20 flex items-center justify-center 
                            group-hover:bg-[#14213D] group-hover:border-[#14213D] transition-all duration-500">
                            <span className="text-[#14213D] group-hover:text-white transition-colors duration-500 text-xl">
                              {service.icon}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-medium text-[#14213D] mb-2 group-hover:translate-x-1 transition-transform duration-300">
                            {service.title}
                          </h4>
                          <p className="text-gray-600">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Connection Visual */}
              <div className="mt-20 relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#14213D]/30 to-transparent"></div>
                
                {/* Connecting Elements - Triangle Formation */}
                <div className="relative h-60 overflow-visible">
                  {/* Left Arrow */}
                  <div className="absolute left-1/3 w-[2px] h-[200%] bg-gradient-to-b from-[#14213D]/30 to-[#14213D]/5 
                    transform origin-top -rotate-12">
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 rotate-45 w-8 h-8 
                      border-r-[3px] border-b-[3px] border-[#14213D]/40"></div>
                  </div>
                  
                  {/* Right Arrow */}
                  <div className="absolute right-1/3 w-[2px] h-[200%] bg-gradient-to-b from-[#14213D]/30 to-[#14213D]/5 
                    transform origin-top rotate-12">
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 rotate-45 w-8 h-8 
                      border-r-[3px] border-b-[3px] border-[#14213D]/40"></div>
                  </div>
                  
                  {/* Single Decorative Dot at Top Center */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-3 h-3 rounded-full bg-[#14213D]/20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="bg-white py-24">
          <div className="container mx-auto max-w-7xl px-4">
            {/* Strategic Synergy Hub Section */}
            <section className="bg-white py-12 relative overflow-hidden">
              {/* Dynamic Background */}
              <div className="absolute inset-0">
                <div className="absolute w-full h-full">
                  <div className="absolute w-[1200px] h-[1200px] rounded-full border border-[#14213D]/5 
                    left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute w-[900px] h-[900px] rounded-full border border-[#14213D]/10 
                    left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute w-[600px] h-[600px] rounded-full border border-[#14213D]/15 
                    left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>

              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                  {/* Section Header */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-14"
                  >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-light font-montserrat tracking-wider text-black mb-6">
                      Strategic
                      <span className="block mt-2">Architecture</span>
                    </h2>
                    <div className="h-[2px] w-24 bg-[#14213D] mx-auto mt-8"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-8">
                      Orchestrating strategic networks and connections that transform market potential into realized value.
                    </p>
                  </motion.div>

                  {/* Center Hub */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative mx-auto mb-12 max-w-lg"
                  >
                    <div className="bg-[#14213D] rounded-full p-12 text-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 opacity-0 
                        group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="relative z-10">
                        <div className="w-24 h-24 rounded-full bg-white/10 mx-auto mb-6 flex items-center justify-center">
                          <Network className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Network Nexus</h3>
                        <p className="text-white/80">
                          Connecting elite networks, strategic insights, and capital to orchestrate transformative outcomes
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Orbital Capabilities */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {[
                      {
                        icon: <Globe className="w-8 h-8 text-white" />,
                        title: "Strategic Networks",
                        description: "Access and leverage our elite network of industry leaders, investors, and strategic partners.",
                        points: [
                          "Global relationship access",
                          "Strategic introductions",
                          "Network orchestration"
                        ],
                        accent: "from-blue-500/20 to-transparent"
                      },
                      {
                        icon: <ArrowLeftRight className="w-8 h-8 text-white" />,
                        title: "Capital Synergy",
                        description: "Connect with the right capital partners and strategic resources to fuel your growth.",
                        points: [
                          "Capital formation",
                          "Strategic partnerships",
                          "Growth acceleration"
                        ],
                        accent: "from-purple-500/20 to-transparent"
                      },
                      {
                        icon: <Target className="w-8 h-8 text-white" />,
                        title: "Market Architecture",
                        description: "Design and execute sophisticated strategies that connect opportunities to outcomes.",
                        points: [
                          "Opportunity mapping",
                          "Strategic positioning",
                          "Value creation"
                        ],
                        accent: "from-emerald-500/20 to-transparent"
                      }
                    ].map((capability, index) => (
                      <motion.div
                        key={capability.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                        className="relative group h-full"
                      >
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 
                          border border-[#14213D]/5 hover:border-[#14213D]/20 relative overflow-hidden h-full flex flex-col">
                          {/* Content */}
                          <div className="relative z-10 flex flex-col h-full">
                            {/* Icon */}
                            <div className="relative mb-6">
                              <div className="bg-[#14213D] w-16 h-16 rounded-full flex items-center justify-center 
                                group-hover:scale-110 transition-transform duration-700">
                                {capability.icon}
                              </div>
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-2xl font-bold text-[#14213D] mb-4 
                              group-hover:translate-x-2 transition-transform duration-500">
                              {capability.title}
                            </h3>
                            <div className="h-[2px] w-12 bg-[#14213D] mb-4 transform origin-left 
                              group-hover:w-24 transition-all duration-700"></div>
                            <p className="text-gray-600 mb-6 flex-grow">
                              {capability.description}
                            </p>

                            {/* Points */}
                            <ul className="space-y-3 mt-auto">
                              {capability.points.map((point, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.5 + (i * 0.1) }}
                                  className="flex items-center gap-3"
                                >
                                  <div className="w-8 h-8 rounded-full border-2 border-[#14213D]/10 flex items-center justify-center
                                    group-hover:border-[#14213D] group-hover:bg-[#14213D] transition-all duration-500 flex-shrink-0">
                                    <ArrowRight className="w-4 h-4 text-[#14213D] group-hover:text-white transition-colors duration-500" />
                                  </div>
                                  <span className="text-gray-600 group-hover:translate-x-1 transition-transform duration-500">
                                    {point}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="mt-12 relative"
                  >
                    <div className="bg-gradient-to-r from-[#14213D] to-[#1C2E56] rounded-2xl overflow-hidden">
                      <div className="relative p-12 md:p-16">
                        {/* Background Elements */}
                        <div className="absolute inset-0">
                          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-emerald-500/10"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 max-w-4xl mx-auto text-center">
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Strategic Discovery
                          </h3>
                          <div className="h-[2px] w-24 bg-white/20 mx-auto mb-8"></div>
                          <p className="text-white/90 text-xl mb-12 leading-relaxed">
                            The answers are in your market, your data, and your experience. We ask the critical questions that surface hidden insights and connect crucial dots - before your stakeholders ask them.
                          </p>

                          {/* Integration Points */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                              {
                                title: "Pattern Recognition",
                                description: "We see the signals in your noise. Our targeted questions reveal market patterns you can't afford to miss."
                              },
                              {
                                title: "Strategic Validation",
                                description: "Pressure-test your thinking through expert questioning that exposes blind spots before they become board issues."
                              },
                              {
                                title: "Decision Architecture",
                                description: "Guide your team to stronger decisions by asking the questions that matter - before millions are at stake."
                              }
                            ].map((point, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + (i * 0.1) }}
                                className="group"
                              >
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 
                                  border border-white/10 hover:border-white/20 
                                  hover:bg-white/10 transition-all duration-500">
                                  <div className="flex flex-col items-center gap-4 text-center">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                      <Shield className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                      <span className="text-white text-lg block mb-2">{point.title}</span>
                                      <span className="text-white/70 text-sm">{point.description}</span>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>

                          {/* Added CTA Section */}
                          <div className="mt-16">
                            <div className="inline-flex items-center gap-2 text-white/90 text-lg border-b border-white/20 pb-2">
                              <span>The right questions unlock million-dollar insights.</span>
                              <span className="text-white/60">Let's find yours.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-white text-[#1A1A1A] py-16 border-t border-gray-100">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                  {/* Column 1 - Brand */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-light font-montserrat tracking-wider">Vector Summit</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Strategic capital and investment partners architecting bespoke solutions for exceptional growth.
                    </p>
                  </div>

                  {/* Column 2 - Services */}
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold font-montserrat">Services</h4>
                    <ul className="space-y-4">
                      <li>
                        <Link href="/services/strategic-advisory" className="text-gray-600 hover:text-[#14213D] transition-colors">
                          Strategic Advisory
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/growth-equity" className="text-gray-600 hover:text-[#14213D] transition-colors">
                          Growth Equity
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/capital-formation" className="text-gray-600 hover:text-[#14213D] transition-colors">
                          Capital Formation
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/mergers-acquisitions" className="text-gray-600 hover:text-[#14213D] transition-colors">
                          Mergers & Acquisitions
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3 - Quick Links */}
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold font-montserrat">Quick Links</h4>
                    <ul className="space-y-4">
                      <li>
                        <Link href="/" className="text-gray-600 hover:text-[#14213D] transition-colors">
                          Home Page
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="text-gray-600 hover:text-[#14213D] transition-colors">
                          Our Profile
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
                      Connect on LinkedIn
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 text-center">
                  <div className="text-sm text-gray-500">
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

            <CalEmbed 
              isOpen={isCalOpen}
              onClose={() => setIsCalOpen(false)}
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default function Page() {
  return <MainComponent />;
}