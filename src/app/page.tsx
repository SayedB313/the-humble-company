'use client'

import React, { useState, useEffect } from 'react';
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/card"
import { Mail, ArrowRight, Check, Star, Users, BarChart, Zap, Clock, TrendingUp, ChevronLeft, ChevronRight, Calendar, UserX, PieChart, DollarSign, Menu, Lightbulb, Phone, Cog, ChevronDown, Target, Wand2, PhoneCall, Play, Plus, Book, Building, Network, BarChart2, ArrowLeftRight, Globe, Cpu, ArrowUpRight, X, Award, Shield, AlertTriangle, ArrowDown, Megaphone, Briefcase, Landmark, Heart } from "lucide-react"
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
              The Humble Company
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
            <div className="max-w-3xl mx-auto text-center pt-32 md:pt-40">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-montserrat tracking-wider text-white mb-8">
                  Empowering Government Relations Firms to Win Elite Clients
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-8">
                  Advisors. Growth Partners. Your edge in the world of government relations.
                </p>
                <div className="h-1 w-24 bg-[#14213D] mx-auto mb-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PAIN POINTS SECTION (Elegant, Compact) */}
        <section className="bg-white max-w-3xl mx-auto rounded-xl shadow-sm py-12 px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#14213D] text-center mb-8">The Real Challenges Facing GR Firms</h2>
          <div className="flex flex-col divide-y divide-gray-100">
            <div className="flex items-center gap-4 py-4 px-2 hover:shadow-md transition-shadow rounded-lg">
              <span className="w-8 h-8 text-[#14213D]/60 flex-shrink-0 flex items-center justify-center"><Target className="w-8 h-8" /></span>
              <div>
                <div className="font-semibold text-[#14213D] text-base md:text-lg">Dependence on referrals</div>
                <div className="text-gray-700 text-sm md:text-base">creates inconsistent pipelines and limits access to high-value clients.</div>
              </div>
            </div>
            <div className="flex items-center gap-4 py-4 px-2 hover:shadow-md transition-shadow rounded-lg">
              <span className="w-8 h-8 text-[#14213D]/60 flex-shrink-0 flex items-center justify-center"><Star className="w-8 h-8" /></span>
              <div>
                <div className="font-semibold text-[#14213D] text-base md:text-lg">Standing out in crowded RFPs</div>
                <div className="text-gray-700 text-sm md:text-base">where every firm claims to offer the same value.</div>
              </div>
            </div>
            <div className="flex items-center gap-4 py-4 px-2 hover:shadow-md transition-shadow rounded-lg">
              <span className="w-8 h-8 text-[#14213D]/60 flex-shrink-0 flex items-center justify-center"><Shield className="w-8 h-8" /></span>
              <div>
                <div className="font-semibold text-[#14213D] text-base md:text-lg">Protecting reputation</div>
                <div className="text-gray-700 text-sm md:text-base">in a world where one misstep can cost millions in lost trust.</div>
              </div>
            </div>
            <div className="flex items-center gap-4 py-4 px-2 hover:shadow-md transition-shadow rounded-lg">
              <span className="w-8 h-8 text-[#14213D]/60 flex-shrink-0 flex items-center justify-center"><AlertTriangle className="w-8 h-8" /></span>
              <div>
                <div className="font-semibold text-[#14213D] text-base md:text-lg">Driving new business</div>
                <div className="text-gray-700 text-sm md:text-base">in a market where access to key decision-makers is increasingly restricted.</div>
              </div>
            </div>
            <div className="flex items-center gap-4 py-4 px-2 hover:shadow-md transition-shadow rounded-lg">
              <span className="w-8 h-8 text-[#14213D]/60 flex-shrink-0 flex items-center justify-center"><Users className="w-8 h-8" /></span>
              <div>
                <div className="font-semibold text-[#14213D] text-base md:text-lg">Building lasting relationships</div>
                <div className="text-gray-700 text-sm md:text-base">with public sector and corporate leaders who are inundated with pitches.</div>
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
                  Connecting GR Firms
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We connect leading GR firms with major corporate, public sector, and association clients, enabling seamless, confidential transactions.
                </p>
              </div>

              {/* Who We Help Section */}
              <div className="mb-32">
                <div className="text-center mb-16">
                  <h3 className="text-2xl font-medium text-[#14213D] mb-4">Who We Help</h3>
                  <div className="h-[2px] w-24 bg-[#14213D] mx-auto"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  {[
                    { title: "Government Relations Firms", icon: <Building className="w-6 h-6" /> },
                    { title: "Advocacy Groups", icon: <Users className="w-6 h-6" /> },
                    { title: "Public Relations Agencies", icon: <Megaphone className="w-6 h-6" /> },
                    { title: "Lobbying Firms", icon: <Briefcase className="w-6 h-6" /> }
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

              {/* Who We Connect You With Section */}
              <div className="text-center mb-16">
                <h3 className="text-2xl font-medium text-[#14213D] mb-4">Who We Connect You With</h3>
                <div className="h-[2px] w-24 bg-blue-400 mx-auto"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 max-w-6xl mx-auto">
                {[
                  { title: "Associations & Trade Groups", icon: <Network className="w-7 h-7" /> },
                  { title: "Fortune 500 Companies", icon: <Globe className="w-7 h-7" /> },
                  { title: "Public Sector Organizations", icon: <Landmark className="w-7 h-7" /> },
                  { title: "Nonprofits & Foundations", icon: <Heart className="w-7 h-7" /> }
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
                A streamlined 3-step process to connect the right GR firms and clients.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-8 h-8 text-[#14213D]" />,
                  title: "Define Criteria",
                  desc: "GR firms outline their ideal client profile—sector, geography, influence needs, and advocacy goals."
                },
                {
                  icon: <Network className="w-8 h-8 text-[#14213D]" />,
                  title: "Find Matches",
                  desc: "We leverage proprietary data and industry insight to identify organizations and associations that align with your strengths."
                },
                {
                  icon: <ArrowLeftRight className="w-8 h-8 text-[#14213D]" />,
                  title: "Make Connections",
                  desc: "We facilitate warm introductions and strategic conversations with decision-makers who matter most."
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

        {/* Our Technology Advantage Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#14213D] text-center mb-4">Our Technology Advantage</h2>
            <p className="text-lg text-gray-500 text-center mb-16 max-w-2xl mx-auto">Advanced systems and proprietary technology that deliver faster, more accurate matches for government relations firms.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
              {[
                {
                  icon: <Cpu className="w-8 h-8 text-[#14213D]" />,
                  title: "AI-Powered Matching",
                  desc: "Advanced algorithms that pair GR firms with organizations seeking advocacy, influence, or public affairs expertise."
                },
                {
                  icon: <Globe className="w-8 h-8 text-[#14213D]" />,
                  title: "Intelligent Opportunity Discovery",
                  desc: "Automated systems that surface new legislative, regulatory, and partnership opportunities as they emerge."
                },
                {
                  icon: <Shield className="w-8 h-8 text-[#14213D]" />,
                  title: "Proprietary GR Network",
                  desc: "Exclusive access to a curated database of associations, corporations, and public sector leaders."
                },
                {
                  icon: <Zap className="w-8 h-8 text-[#14213D]" />,
                  title: "Swift, Secure Introductions",
                  desc: "Technology-enabled speed and discretion to connect you with decision-makers before your competitors."
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
        </section>

        {/* WHY GR FIRMS CHOOSE US SECTION (Redesigned) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto max-w-2xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#14213D] mb-4">Why GR Firms Choose Us</h2>
            <div className="text-lg md:text-xl text-[#14213D] font-semibold mb-4">
              The Only Full-Service Growth Partner Agency Exclusively for Government Relations Firms
            </div>
            <p className="text-gray-600 text-base md:text-lg mb-10">
              We handle every aspect of business development so you can focus on advocacy and client service. Our team specializes in GTM strategy, lead generation, outbound, sales development, and technology implementation—exclusively for GR firms.
            </p>
            <ul className="space-y-6 text-left inline-block mx-auto">
              <li className="flex items-start gap-3"><ArrowRight className="w-6 h-6 mt-1 text-[#14213D]" />End-to-end business development, tailored for GR</li>
              <li className="flex items-start gap-3"><ArrowRight className="w-6 h-6 mt-1 text-[#14213D]" />GTM strategy and execution</li>
              <li className="flex items-start gap-3"><ArrowRight className="w-6 h-6 mt-1 text-[#14213D]" />Lead generation and outbound campaigns</li>
              <li className="flex items-start gap-3"><ArrowRight className="w-6 h-6 mt-1 text-[#14213D]" />Sales development and pipeline management</li>
              <li className="flex items-start gap-3"><ArrowRight className="w-6 h-6 mt-1 text-[#14213D]" />Technology implementation for growth</li>
              <li className="flex items-start gap-3"><ArrowRight className="w-6 h-6 mt-1 text-[#14213D]" />Deep industry expertise—GR is all we do</li>
            </ul>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 bg-[#14213D]">
          <div className="container mx-auto max-w-2xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Accelerate Your GR Firm's Growth?</h2>
            <p className="text-lg md:text-xl text-gray-200 mb-10">
              Schedule a confidential call to discover exclusive opportunities and see how The Humble Company can drive your business development success.
            </p>
            <CalButton className="bg-[#14213D] hover:bg-[#1C2E56] text-white px-10 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors inline-flex items-center gap-2 group">
              <span>Schedule Meeting</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </CalButton>
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
                <h3 className="text-2xl font-light font-montserrat tracking-wider">The Humble Company</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Government relations deal flow and investment partners architecting bespoke solutions for exceptional growth.
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
                © {new Date().getFullYear()} The Humble Company. All rights reserved.
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