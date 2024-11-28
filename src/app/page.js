'use client'

import React, { useState, useEffect } from 'react';
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/card"
import { Mail, ArrowRight, Check, Star, Users, BarChart, Zap, Clock, TrendingUp, ChevronLeft, ChevronRight, Calendar, UserX, PieChart, DollarSign, Menu, Lightbulb, Phone, Cog, ChevronDown, Target, Wand2, PhoneCall, Play, Plus, Book, Building, Network, BarChart2, ArrowLeftRight } from "lucide-react"
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
  ]

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

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Top Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-scroll' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-light font-montserrat tracking-wider text-white">
              Vector Summit
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ServicesDropdown />
            <Link href="/track-record" className="text-white hover:text-gray-300 transition-colors font-light">
              Track Record
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors font-light">
              Our Profile
            </Link>
            <button
              onClick={() => setIsCalOpen(true)}
              className="text-white hover:text-gray-300 transition-colors font-light"
            >
              Contact
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
                  href="/track-record" 
                  className="text-white hover:text-gray-300 transition-colors font-light py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Track Record
                </Link>
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
                  Contact
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
                
                <div className="h-2 w-24 bg-[#14213D] mb-12"></div>
                
                <p className="text-xl md:text-2xl font-light font-montserrat tracking-wider text-gray-300 mb-16 max-w-4xl">
                  Strategic Capital & Investment Partners<br />
                  Architecting Bespoke Solutions for Exceptional Growth
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
        <section id="expertise" className="bg-white py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            {/* Left-aligned heading */}
            <div className="mb-20 max-w-3xl">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#1A1A1A] mb-6">
                Proven Expertise and
                <span className="block mt-2">Exceptional Outcomes</span>
              </h2>
              <div className="h-[1px] w-full bg-[#14213D] opacity-20"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 px-4">
              {/* Transaction Volume */}
              <div className="flex flex-col items-center">
                <div className="bg-[#14213D] rounded-full w-20 h-20 flex items-center justify-center mb-8">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <p className="text-6xl font-light font-montserrat text-[#1A1A1A] mb-4">$13B+</p>
                <p className="text-lg text-gray-600 text-center font-light tracking-wide">
                  In Aggregate<br />Transaction Volume
                </p>
              </div>

              {/* Years Experience */}
              <div className="flex flex-col items-center">
                <div className="bg-[#14213D] rounded-full w-20 h-20 flex items-center justify-center mb-8">
                  <BarChart2 className="w-10 h-10 text-white" />
                </div>
                <p className="text-6xl font-light font-montserrat text-[#1A1A1A] mb-4">40+</p>
                <p className="text-lg text-gray-600 text-center font-light tracking-wide">
                  Years Capital<br />Markets Experience
                </p>
              </div>

              {/* Transactions */}
              <div className="flex flex-col items-center">
                <div className="bg-[#14213D] rounded-full w-20 h-20 flex items-center justify-center mb-8">
                  <ArrowLeftRight className="w-10 h-10 text-white" />
                </div>
                <p className="text-6xl font-light font-montserrat text-[#1A1A1A] mb-4">100+</p>
                <p className="text-lg text-gray-600 text-center font-light tracking-wide">
                  Transactions
                </p>
              </div>

              {/* Investor Relationships */}
              <div className="flex flex-col items-center">
                <div className="bg-[#14213D] rounded-full w-20 h-20 flex items-center justify-center mb-8">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <p className="text-6xl font-light font-montserrat text-[#1A1A1A] mb-4">3000+</p>
                <p className="text-lg text-gray-600 text-center font-light tracking-wide">
                  Investor<br />Relationships
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-7xl mx-auto">
              {/* Header with thin font and underline - matched with Proven Expertise section */}
              <div className="mb-20 max-w-3xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#1A1A1A] mb-6">
                  Strategic Capabilities
                </h2>
                <div className="h-[1px] w-full bg-[#14213D] opacity-20"></div>
              </div>

              {/* Service Cards Carousel */}
              <div className="relative">
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-300 ease-in-out" 
                    style={{ transform: `translateX(-${currentCard * (isMobile ? 100 : 33.333)}%)` }}
                  >
                    {[
                      {
                        title: "Capital Formation",
                        icon: <DollarSign className="w-8 h-8 text-white" />,
                        description: "Empowering businesses through strategic capital allocation and expert banking services. We invest in your company's future, providing not just funds but also comprehensive financial management, enabling growth and long-term success."
                      },
                      {
                        title: "Equity Investment",
                        icon: <BarChart2 className="w-8 h-8 text-white" />,
                        description: "Direct investment and strategic partnerships focused on value creation. We provide growth capital and operational expertise to drive exceptional outcomes for portfolio companies."
                      },
                      {
                        title: "Growth Advisory & Equity",
                        icon: <TrendingUp className="w-8 h-8 text-white" />,
                        description: "Our applied expertise helps leadership teams execute optimal growth strategies via capital raising, M&A, joint ventures, strategic partnerships, and add-on transactions."
                      },
                      {
                        title: "Mergers & Acquisitions",
                        icon: <Network className="w-8 h-8 text-white" />,
                        description: "Strategic M&A advisory services leveraging extensive industry relationships to guide clients through both buy-side and sell-side transactions."
                      }
                    ].map((service, index) => (
                      <div 
                        key={index} 
                        className={`${
                          isMobile ? 'w-full' : 'w-1/3'
                        } flex-shrink-0 px-4`}
                      >
                        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100 h-full flex flex-col">
                          <div className="bg-[#14213D] rounded-full p-3 md:p-4 w-12 md:w-16 h-12 md:h-16 flex items-center justify-center mb-6 md:mb-8">
                            {service.icon}
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold font-montserrat text-[#1A1A1A] mb-2 md:mb-3">
                            {service.title}
                          </h3>
                          <div className="h-[2px] w-12 bg-[#14213D] mb-4 md:mb-6"></div>
                          <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 flex-grow">
                            {service.description}
                          </p>
                          <Link 
                            href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="inline-block bg-[#14213D] text-white px-6 md:px-8 py-2 md:py-3 rounded-md font-montserrat text-sm md:text-base hover:bg-[#1C2E56] transition-colors w-[140px] md:w-[160px] text-center"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center mt-8 md:mt-12 space-x-4">
                  <button 
                    onClick={prevCard}
                    className="p-2 rounded-full border border-gray-300 text-gray-600 hover:border-[#14213D] hover:text-[#14213D] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                  <button 
                    onClick={nextCard}
                    className="p-2 rounded-full border border-gray-300 text-gray-600 hover:border-[#14213D] hover:text-[#14213D] transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>

                {/* Mobile Dots Navigation */}
                {isMobile && (
                  <div className="flex justify-center mt-4 space-x-2">
                    {[0, 1, 2, 3].map((index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentCard(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentCard === index ? 'bg-[#14213D]' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Critical Business Challenges Section */}
        <section id="challenges" className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-normal leading-tight font-montserrat tracking-wider text-white text-center mb-4">
              Investment Challenges
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              Common bottlenecks preventing firms from maximizing their investment potential
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

            <div className="mt-12 text-center">
              <button
                onClick={() => setIsCalOpen(true)}
                className={standardCTA}
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </section>

        {/* The Deal Flow Engine Section */}
        <section id="email-resonance-engine" className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-normal leading-tight font-montserrat tracking-wider text-white text-center mb-12"
            >
              The Deal Flow Engine��
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Left Column - Core Features */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-blue-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-2xl font-montserrat text-gray-900 mb-2">
                    Find
                  </h3>
                  <p className="text-lg text-gray-700">
                    Identify high-potential investment opportunities
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-blue-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-2xl font-montserrat text-gray-900 mb-2">
                    Filter
                  </h3>
                  <p className="text-lg text-gray-700">
                    Screen deals based on your criteria
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-blue-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-2xl font-montserrat text-gray-900 mb-2">
                    Scale
                  </h3>
                  <p className="text-lg text-gray-700">
                    Maintain quality while expanding pipeline
                  </p>
                </motion.div>
              </div>

              {/* Right Column - Results */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gray-800 p-8 md:p-12 rounded-2xl text-white"
              >
                <h3 className="text-2xl font-montserrat mb-8">
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
                    <span className="text-xl">85% faster deal sourcing</span>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="flex items-center gap-4"
                  >
                    <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-xl">3x larger qualified pipeline</span>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    className="flex items-center gap-4"
                  >
                    <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-xl">60% better qualification</span>
                  </motion.div>

                  <motion.button 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    onClick={() => setIsCalOpen(true)}
                    className={standardCTA}
                  >
                    Schedule a Call
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Success Stories Section */}
        <section id="track-record" className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-normal leading-tight font-montserrat tracking-wider text-white text-center mb-12">
              Track Record
            </h2>
            
            {/* Case Study Content */}
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-normal font-montserrat tracking-wider text-gray-900 mb-4">
                  Michael Rose & Associates
                </h3>
                <p className="text-gray-600 mb-6">
                  Investment Banking Advisory Firm
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <p className="text-gray-800">
                        "Vector Summit's approach transformed our deal sourcing process. Their AI-driven strategy 
                        helped us identify and connect with qualified prospects we wouldn't have found otherwise."
                      </p>
                      <p className="mt-4 text-gray-600">
                        - Michael Rose, Managing Director
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-normal leading-tight font-montserrat tracking-wider text-white text-center mb-12"
            >
              Our Process
            </motion.h2>
            
            {/* Process Steps Timeline - Removed vertical bar */}
            <div className="relative mb-12">
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto px-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleStepHover(index)}
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-lg transition-all duration-300 ${
                      index === activeStep ? 'ring-4 ring-blue-400' : ''
                    }`}>
                      {step.icon}
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                      <p className="text-sm text-blue-200 mt-1">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Combined Details Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-2xl p-8 max-w-6xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Side - Description */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-montserrat text-white mb-4">
                    {processSteps[activeStep].title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {activeStep === 0 && "Our comprehensive analysis evaluates your current deal sourcing strategy, identifying gaps and opportunities for systematic improvement."}
                    {activeStep === 1 && "We develop a precise mapping of your ideal investment opportunities, creating detailed targeting criteria and market segments."}
                    {activeStep === 2 && "Implementation of customized outreach systems and workflows designed specifically for investment opportunity generation."}
                    {activeStep === 3 && "Strategic deployment of targeted campaigns to connect with pre-qualified investment opportunities matching your criteria."}
                    {activeStep === 4 && "Continuous refinement of targeting and messaging based on real-time performance data and market response."}
                  </p>
                </div>

                {/* Right Side - Outcomes */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-montserrat text-white mb-4">
                    Key Outcomes
                  </h3>
                  <ul className="space-y-3">
                    {activeStep === 0 && (
                      <>
                        <li className="flex items-center gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-green-400" />
                          <span>Comprehensive deal flow assessment</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-green-400" />
                          <span>Clear opportunity gaps identified</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-green-400" />
                          <span>Strategic roadmap developed</span>
                        </li>
                      </>
                    )}
                    {activeStep === 1 && (
                      <>
                        <li className="flex items-center gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-green-400" />
                          <span>Defined ideal investment criteria</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-green-400" />
                          <span>Target market segments mapped</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-green-400" />
                          <span>Opportunity scoring framework</span>
                        </li>
                      </>
                    )}
                    {activeStep === 2 && (
                      <>
                        <li className="flex items-center gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-green-400" />
                          <span>Automated deal flow system</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-green-400" />
                          <span>Streamlined qualification process</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-green-400" />
                          <span>Team fully trained on system</span>
                        </li>
                      </>
                    )}
                    {activeStep === 3 && (
                      <>
                        <li className="flex items-center gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-green-400" />
                          <span>Active outreach campaigns</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-green-400" />
                          <span>Consistent deal flow pipeline</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-green-400" />
                          <span>Efficient response management</span>
                        </li>
                      </>
                    )}
                    {activeStep === 4 && (
                      <>
                        <li className="flex items-center gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-green-400" />
                          <span>Optimized conversion rates</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-green-400" />
                          <span>Data-driven improvements</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-green-400" />
                          <span>Enhanced targeting accuracy</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Data-Driven Deal Sourcing Section */}
        <section id="why-us" className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-normal leading-tight font-montserrat tracking-wider text-white text-center mb-12">
              Why Us
            </h2>
            
            {/* Why Us Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16 px-4">
              <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <Users className="w-12 h-12 text-blue-400 mb-4" />
                    <h3 className="text-2xl font-montserrat text-white mb-3">
                      Strategic Approach
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Data-driven insights combined with industry expertise to maximize your investment success.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <BarChart className="w-12 h-12 text-green-400 mb-4" />
                    <h3 className="text-2xl font-montserrat text-white mb-3">
                      Proven Results
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Track record of connecting premier firms with qualified, high-value opportunities.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <Network className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 className="text-2xl font-montserrat text-white mb-3">
                      Elite Network
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Access to 100+ institutional investors and strategic deal flow partners.
                  </p>
                </div>
              </div>
            </div>

            {/* New CTA Section */}
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-normal font-montserrat tracking-wider text-white mb-6">
                Ready to Transform Your Deal Flow?
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Schedule a consultation to discover how our AI-powered platform can accelerate your investment opportunities.
              </p>
              <button 
                onClick={() => setIsCalOpen(true)}
                className={standardCTA}
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h3>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                  <a 
                    href="#email-resonance-engine" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('email-resonance-engine');
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Our Engine
                  </a>
                  <a 
                    href="#track-record"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('track-record');
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Track Record
                  </a>
                  <a 
                    href="#process"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('process');
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Our Process
                  </a>
                  <a 
                    href="#why-us"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('why-us');
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Why Us
                  </a>
                </div>
              </div>
              
              <div className="text-xs md:text-sm text-gray-400">
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
      </main>
    </div>
  )
}