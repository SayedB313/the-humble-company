'use client'

import React, { useState, useEffect } from 'react';
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/card"
import { Mail, ArrowRight, Check, Star, Users, BarChart, Zap, Clock, TrendingUp, ChevronLeft, ChevronRight, Calendar, UserX, PieChart, DollarSign, Menu, Lightbulb, Phone, Cog, ChevronDown, Target, Wand2, PhoneCall, Play, Plus, Book, Building, Network, BarChart2, ArrowLeftRight, Globe, Cpu, ArrowUpRight } from "lucide-react"
import Image from 'next/image'
import Link from "next/link"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import CalEmbed from '../components/CalEmbed'
import ServicesDropdown from '../components/ui/ServicesDropdown';
import Navigation from '../components/ui/Navigation';

export default function EnhancedAgencyLandingPage() {
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
    if (window.Calendly) {
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
      description: "Unlock opportunities through expertly crafted capital strategies and targeted funding solutions.",
      icon: <TrendingUp className="w-12 h-12 text-white" />,
      points: [
        "Expand operations & R&D",
        "Strategic liquidity solutions",
        "Aligned growth structures"
      ]
    },
    {
      title: "Strategic Partner",
      description: "Build enduring partnerships and navigate complex decisions to drive value creation.",
      icon: <Users className="w-12 h-12 text-white" />,
      points: [
        "Develop joint ventures & alliances",
        "Access untapped markets",
        "Navigate industry challenges"
      ]
    },
    {
      title: "Global Relationships",
      description: "Connect with our extensive network of institutional and private investors worldwide.",
      icon: <Globe className="w-12 h-12 text-white" />,
      points: [
        "Access global capital markets",
        "Connect with qualified investors",
        "Structure balanced deals"
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
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#14213D]/95 backdrop-blur-sm"
        >
          {isMobileMenuOpen && (
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <ServicesDropdown />
                <Link 
                  href="/about" 
                  className="text-white hover:text-gray-300 transition-colors font-light py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Profile
                </Link>
                <button
                  onClick={() => {
                    setIsCalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-white hover:text-gray-300 transition-colors font-light text-left py-2"
                >
                  Schedule Meeting
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-950 min-h-[100vh] flex items-center relative overflow-hidden">
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
                
                <p className="text-lg sm:text-xl md:text-2xl font-light font-montserrat tracking-wider text-gray-300 mb-16 max-w-4xl">
                  <span className="block mb-2 font-semibold">Strategic Capital & Growth Partners</span>
                  <span className="block text-base sm:text-lg md:text-xl opacity-80 font-semibold">
                    Architecting Bespoke Solutions for Exceptional Growth
                  </span>
                </p>
              </motion.div>
            </div>
          </div>

          {/* Dark overlay for background image */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
          
          {/* Background image */}
          <Image
            src="/River Near Mountains.jpg"
            alt="River Near Mountains"
            fill
            className="object-cover"
            priority
          />

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
            onClick={() => {
              const expertiseSection = document.querySelector('#expertise');
              expertiseSection?.scrollIntoView({ behavior: 'smooth' });
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

        {/* Expertise Section */}
        <section id="expertise" className="bg-white py-24">
          <div className="container mx-auto max-w-7xl px-4">
            {/* Keep the same heading style */}
            <div className="mb-20 max-w-3xl">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-black mb-6">
                Fresh Perspective
                <span className="block mt-2">Digital-First Approach</span>
              </h2>
              <div className="h-[1px] w-full bg-[#14213D] opacity-20"></div>
            </div>

            {/* Updated stats layout with new content */}
            <div className="flex flex-col items-center justify-center">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-16 max-w-7xl">
                {/* Digital Transformation */}
                <div className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#14213D] w-20 h-20 rounded-full mb-10 flex items-center justify-center">
                      <Network className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-6xl lg:text-7xl font-light text-[#14213D] mb-4">50+</span>
                    <div className="h-[2px] w-16 bg-[#14213D] mb-6"></div>
                    <p className="text-gray-600 text-lg font-light max-w-[200px]">
                      Digital-First<br />Growth Partners
                    </p>
                  </div>
                </div>

                {/* Tech Background */}
                <div className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#14213D] w-20 h-20 rounded-full mb-10 flex items-center justify-center">
                      <BarChart2 className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-6xl lg:text-7xl font-light text-[#14213D] mb-4">15+</span>
                    <div className="h-[2px] w-16 bg-[#14213D] mb-6"></div>
                    <p className="text-gray-600 text-lg font-light max-w-[200px]">
                      Tech Ventures<br />Accelerated
                    </p>
                  </div>
                </div>

                {/* Strategic Partnerships */}
                <div className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#14213D] w-20 h-20 rounded-full mb-10 flex items-center justify-center">
                      <ArrowLeftRight className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-6xl lg:text-7xl font-light text-[#14213D] mb-4">25+</span>
                    <div className="h-[2px] w-16 bg-[#14213D] mb-6"></div>
                    <p className="text-gray-600 text-lg font-light max-w-[200px]">
                      Strategic<br />Partnerships
                    </p>
                  </div>
                </div>

                {/* Growth Metrics */}
                <div className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#14213D] w-20 h-20 rounded-full mb-10 flex items-center justify-center">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-6xl lg:text-7xl font-light text-[#14213D] mb-4">300%</span>
                    <div className="h-[2px] w-16 bg-[#14213D] mb-6"></div>
                    <p className="text-gray-600 text-lg font-light max-w-[200px]">
                      Average Partner<br />Growth Rate
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Add a subtitle context */}
            <div className="mt-20 max-w-2xl mx-auto text-center">
              <p className="text-gray-600 text-lg font-light leading-relaxed">
                Bridging traditional markets with digital innovation. We blend tech-driven strategy with proven principles to forge powerful partnerships. Our approach redefines growth in the modern age.
              </p>
            </div>
          </div>
        </section>

        {/* Strategic Solutions Section */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="mb-20 max-w-3xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-black mb-6">
                  Strategic Solutions
                </h2>
                <div className="h-[1px] w-full bg-[#14213D] opacity-20"></div>
              </div>

              {/* Services Grid - Now with all 4 cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Capital Formation */}
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="bg-[#14213D] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-montserrat text-[#1A1A1A] mb-4">
                    Capital Formation
                  </h3>
                  <div className="h-[2px] w-12 bg-[#14213D] mb-6"></div>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Empowering businesses through strategic capital allocation and expert banking services. 
                    We invest in your company's future, providing not just funds but also comprehensive 
                    financial management, enabling growth and long-term success.
                  </p>
                  <Link 
                    href="/services/capital-formation"
                    className="inline-flex items-center text-[#14213D] hover:text-blue-700 transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>

                {/* Equity Investment */}
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="bg-[#14213D] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                    <BarChart2 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-montserrat text-[#1A1A1A] mb-4">
                    Equity Investment
                  </h3>
                  <div className="h-[2px] w-12 bg-[#14213D] mb-6"></div>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Direct investment and strategic partnerships focused on value creation. 
                    We provide growth capital and operational expertise to drive exceptional 
                    outcomes for portfolio companies.
                  </p>
                  <Link 
                    href="/services/equity-investment"
                    className="inline-flex items-center text-[#14213D] hover:text-blue-700 transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>

                {/* Growth Advisory */}
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="bg-[#14213D] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-montserrat text-[#1A1A1A] mb-4">
                    Growth Advisory & Equity
                  </h3>
                  <div className="h-[2px] w-12 bg-[#14213D] mb-6"></div>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Our applied expertise helps leadership teams execute optimal growth strategies 
                    via capital raising, M&A, joint ventures, strategic partnerships, and add-on 
                    transactions.
                  </p>
                  <Link 
                    href="/services/growth-advisory"
                    className="inline-flex items-center text-[#14213D] hover:text-blue-700 transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>

                {/* Mergers & Acquisitions */}
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="bg-[#14213D] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                    <Network className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-montserrat text-[#1A1A1A] mb-4">
                    Mergers & Acquisitions
                  </h3>
                  <div className="h-[2px] w-12 bg-[#14213D] mb-6"></div>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Strategic M&A advisory services leveraging extensive industry relationships 
                    to guide clients through both buy-side and sell-side transactions.
                  </p>
                  <Link 
                    href="/services/mergers-acquisitions"
                    className="inline-flex items-center text-[#14213D] hover:text-blue-700 transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Add CTA */}
              <div className="mt-16 text-center">
                <button
                  onClick={() => setIsCalOpen(true)}
                  className="inline-flex items-center px-8 py-4 bg-[#14213D] text-white rounded-lg hover:bg-[#1C2E56] transition-colors font-montserrat"
                >
                  Schedule a Meeting
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="mb-20 max-w-3xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-black mb-6">
                  Core Capabilities
                </h2>
                <div className="h-[1px] w-full bg-[#14213D] opacity-20"></div>
              </div>

              {/* Traditional Capabilities - Three Cards Above */}
              <div className="grid md:grid-cols-3 gap-8 mb-24">
                {capabilities.slice(0, 3).map((capability, index) => (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <div className="bg-[#14213D] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                          {capability.icon}
                        </div>
                        <h3 className="text-2xl sm:text-2xl md:text-2xl font-bold font-montserrat text-[#1A1A1A] mb-3 md:mb-4">
                          {capability.title}
                        </h3>
                        <div className="h-[2px] w-12 bg-[#14213D] mb-6"></div>
                      </div>
                      <p className="text-lg md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                        {capability.description}
                      </p>
                      <ul className="space-y-3 mt-auto">
                        {capability.points.map((point, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-600">
                            <ArrowRight className="w-4 h-4 text-[#14213D] flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Digital Intelligence - Bottom Piece */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-3xl mx-auto text-center"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-[#14213D] w-20 h-20 rounded-full flex items-center justify-center">
                      <Cpu className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-3xl font-bold font-montserrat text-[#1A1A1A] mb-4">
                      Digital Intelligence
                    </h3>
                    <div className="h-[2px] w-24 bg-[#14213D] mx-auto mb-6"></div>
                    <p className="text-gray-600 text-xl mb-8 leading-relaxed">
                      Elevating traditional advisory through sophisticated digital capabilities. Our proprietary technology infrastructure enables deeper insights, precise execution, and transformative outcomes beyond conventional approaches.
                    </p>
                    <div className="grid grid-cols-3 gap-6">
                      {[
                        "Advanced analytics platform",
                        "Intelligent market mapping",
                        "Strategic automation suite"
                      ].map((point, i) => (
                        <div key={i} className="text-gray-600">
                          <div className="bg-gray-50 rounded-lg p-4">
                            {point}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* About Vector Summit Section */}
        <section className="relative">
          <div className="flex flex-col md:flex-row">
            {/* Left Content Side */}
            <div className="w-full md:w-1/2 bg-white py-24 px-8 md:px-16">
              <div className="max-w-xl ml-auto">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-black mb-6">
                  About Vector Summit
                </h2>
                
                <div className="h-[1px] w-full bg-[#14213D] opacity-20"></div>
                
                <p className="text-xl text-black mb-8 leading-relaxed mt-12">
                  Born in the digital age, Vector Summit brings a unique blend of tech-savvy strategy and innovative growth partnerships to traditional markets. Our digital-first approach combines emerging technologies with proven business principles to drive exceptional outcomes.
                </p>
                
                <p className="text-xl text-black mb-12 leading-relaxed">
                  With a focus on strategic capital and investment partnerships, we leverage cutting-edge technology and data-driven insights to identify opportunities and accelerate growth for our partners. Our approach reimagines traditional investment banking for the modern era.
                </p>

                <div className="space-y-8 mb-12">
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Strategic Approach</h3>
                    <p className="text-black">Data-driven insights combined with industry expertise to maximize your investment success.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Proven Results</h3>
                    <p className="text-black">Track record of connecting premier firms with qualified, high-value opportunities.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Elite Network</h3>
                    <p className="text-black">Access to 100+ institutional investors and strategic deal flow partners.</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsCalOpen(true)}
                  className="bg-[#14213D] hover:bg-[#1C2E56] text-white px-8 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors"
                >
                  Schedule a Meeting
                </button>
              </div>
            </div>

            {/* Right Image Side */}
            <div className="w-full md:w-1/2 relative min-h-[600px]">
              <Image
                src="/1Snow-Covered Mountain Photo.jpg"
                alt="Snow covered mountain landscape"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover"
                quality={100}
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
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
                    <Link href="/services/mergers-acquisitions" className="text-gray-600 hover:text-[#14213D] transition-colors">
                      Mergers & Acquisitions
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/capital-formation" className="text-gray-600 hover:text-[#14213D] transition-colors">
                      Capital Formation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/growth-advisory" className="text-gray-600 hover:text-[#14213D] transition-colors">
                      Growth Advisory
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/equity-investment" className="text-gray-600 hover:text-[#14213D] transition-colors">
                      Equity Investment
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3 - Quick Links */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold font-montserrat">Quick Links</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/about" className="text-gray-600 hover:text-[#14213D] transition-colors">
                      Our Profile
                    </Link>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('process')}
                      className="text-gray-600 hover:text-[#14213D] transition-colors"
                    >
                      Our Process
                    </button>
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

            {/* Copyright and Bottom Bar */}
            <div className="mt-16">
              <div className="text-sm text-gray-500 text-center mb-8">
                © 2024 Vector Summit. All rights reserved.
              </div>
              <div className="border-t border-gray-100"></div>
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
      </main>
    </div>
  )
}