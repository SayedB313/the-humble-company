'use client'

import React, { useState, useEffect } from 'react';
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/card"
import { Mail, ArrowRight, Check, Star, Users, BarChart, Zap, Clock, TrendingUp, ChevronLeft, ChevronRight, Calendar, UserX, PieChart, DollarSign, Menu, Lightbulb, Phone, Cog, ChevronDown, Target, Wand2, PhoneCall, Play, Plus, Book, Building, Network } from "lucide-react"
import Image from 'next/image'
import Link from "next/link"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import CalEmbed from '../components/CalEmbed'
import ServicesDropdown from '../components/ui/ServicesDropdown';

export default function EnhancedAgencyLandingPage() {
  const [currentInsight, setCurrentInsight] = useState(0)
  const [currentHeaderIndex, setCurrentHeaderIndex] = useState(0);
  const headers = [
    { main: "We Drive Deal Flow", sub: "You Close Investments" },
    { main: "We Source Projects", sub: "You Secure Funding" },
    { main: "We Generate Pipeline", sub: "You Scale Portfolio" },
    { main: "We Find Opportunities", sub: "You Maximize Returns" },
    { main: "We Craft Connections", sub: "You Win Clients" },
    { main: "We Do Strategic Outreach", sub: "You Focus on Growth" },
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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const getChallengeColor = (index) => {
    const colors = [
      'bg-blue-500',
      'bg-green-500',
      'bg-purple-500',
      'bg-red-500',
      'bg-yellow-500',
      'bg-indigo-500'
    ];
    return colors[index % colors.length];
  };

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

    const headerInterval = setInterval(() => {
      setCurrentHeaderIndex((prevIndex) => (prevIndex + 1) % headers.length);
    }, 4000); // Change header every 4 seconds

    return () => {
      clearInterval(headerInterval);
    };
  }, []);

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

  const [activeStep, setActiveStep] = useState(0);
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

  const [showVideo, setShowVideo] = useState(false);

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

  // Add state for Cal modal
  const [isCalOpen, setIsCalOpen] = useState(false);

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

  // First, let's create a standardized CTA button component style
  const standardCTA = "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors";

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 md:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl md:text-2xl font-normal leading-tight font-montserrat tracking-wider text-white">
              Vector Summit
            </span>
          </Link>
          
          {/* Mobile menu button - made larger and more prominent */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-3 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Menu className="w-8 h-8" />
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <ServicesDropdown />
            <Link 
              href="/about" 
              className="text-base font-normal leading-tight font-montserrat tracking-wider text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              About Us
            </Link>
            <Link 
              href="/contact"
              className="text-base font-normal leading-tight font-montserrat tracking-wider text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile menu overlay - improved text size and spacing */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-800 md:hidden"
            >
              <div className="container mx-auto px-4 py-6">
                <nav className="flex flex-col space-y-4">
                  <Link 
                    href="/services/capital-formation"
                    onClick={() => toggleMobileMenu()}
                    className="text-lg font-montserrat text-gray-300 hover:text-white transition-colors py-3"
                  >
                    Capital Formation
                  </Link>
                  <Link 
                    href="/services/growth-advisory"
                    onClick={() => toggleMobileMenu()}
                    className="text-lg font-montserrat text-gray-300 hover:text-white transition-colors py-3"
                  >
                    Growth Advisory & Equity
                  </Link>
                  <Link 
                    href="/services/mergers-acquisitions"
                    onClick={() => toggleMobileMenu()}
                    className="text-lg font-montserrat text-gray-300 hover:text-white transition-colors py-3"
                  >
                    Mergers & Acquisitions
                  </Link>
                  <Link 
                    href="/services/equity-investment"
                    onClick={() => toggleMobileMenu()}
                    className="text-lg font-montserrat text-gray-300 hover:text-white transition-colors py-3"
                  >
                    Equity Investment
                  </Link>
                  <Link 
                    href="/about"
                    onClick={() => toggleMobileMenu()}
                    className="text-lg font-montserrat text-gray-300 hover:text-white transition-colors py-3"
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/contact"
                    onClick={() => toggleMobileMenu()}
                    className="text-lg font-montserrat text-gray-300 hover:text-white transition-colors py-3"
                  >
                    Contact
                  </Link>
                  <button 
                    onClick={() => {
                      setIsCalOpen(true);
                      toggleMobileMenu();
                    }}
                    className={`${standardCTA} w-full text-center mt-4 text-lg py-4`}
                  >
                    Scale Deal Flow
                  </button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-900 min-h-[80vh] md:min-h-screen flex items-center relative overflow-hidden px-4">
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-6xl mx-auto">
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-normal font-montserrat tracking-wider text-white mb-4 md:mb-6">
                We Drive Deal Flow
                <span className="block text-yellow-400 mt-2">
                  You Close Investments
                </span>
              </h1>
              
              <p className="text-lg md:text-2xl font-montserrat tracking-wider text-blue-100 mb-8 md:mb-12">
                AI-Powered Deal Flow Engine™ for Investment Firms
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mb-12 md:mb-16">
                <button 
                  onClick={() => setIsCalOpen(true)}
                  className={standardCTA}
                >
                  Scale Deal Flow
                </button>
                
                <motion.button
                  onClick={() => setShowVideo(true)}
                  variants={playVideoButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-montserrat tracking-wider text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <motion.div
                    variants={spinIconVariants}
                    animate="animate"
                    className="flex items-center justify-center"
                  >
                    <Play className="w-5 h-5" />
                  </motion.div>
                  Play Video
                </motion.button>
              </div>

              {/* Feature List */}
              <div className="flex flex-wrap justify-center gap-8 text-blue-100">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  <span className="font-montserrat tracking-wider">AI-Powered Validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span className="font-montserrat tracking-wider">Strategic Deal Flow</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  <span className="font-montserrat tracking-wider">Institutional Connections</span>
                </div>
              </div>
            </div>
          </div>

          {/* Background Gradient - Removed blue gradient for consistent dark theme */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-50"></div>
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
                Scale Deal Flow
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
              The Deal Flow Engine™
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
                    Scale Deal Flow
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
                Scale Deal Flow
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
          className="mx-4" // Add padding on mobile
        />
      </main>
    </div>
  )
}