'use client'

import React, { useState, useEffect } from 'react';
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/card"
import { Mail, ArrowRight, Check, Star, Users, BarChart, Zap, Clock, TrendingUp, ChevronLeft, ChevronRight, Calendar, UserX, PieChart, DollarSign, Menu, Lightbulb, Phone, Cog, ChevronDown, Target, Wand2, PhoneCall, Play, Plus, Book, Building } from "lucide-react"
import Image from 'next/image'
import Link from "next/link"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import CalEmbed from '../components/CalEmbed'

export default function EnhancedAgencyLandingPage() {
  const [currentInsight, setCurrentInsight] = useState(0)
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0)
  const logos = [
    'apollo', 'clay', 'emailguard', 'gmail', 'hubspot', 'hypertide', 
    'instantly', 'million', 'outlook', 'premiuminboxes', 'smartlead'
  ]

  const [visibleLogos, setVisibleLogos] = useState(logos.slice(0, 6))
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
      icon: <UserX className="w-12 h-12 text-red-500" />,
      title: "Deal Flow Quality",
      description: "Struggling to find qualified investment opportunities?",
      details: [
        "Difficulty identifying high-potential projects",
        "Time wasted on sub-par investment opportunities",
        "Low conversion rate from prospect to funded deal"
      ]
    },
    {
      icon: <Target className="w-12 h-12 text-blue-500" />,
      title: "Project Validation",
      description: "Challenges in pre-screening opportunities?",
      details: [
        "Inefficient due diligence processes",
        "Inconsistent project evaluation criteria",
        "Risk of missing critical red flags"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-green-500" />,
      title: "Investor Relations",
      description: "Not reaching the right institutional investors?",
      details: [
        "Limited access to qualified institutional investors",
        "Difficulty matching projects to investor criteria",
        "Ineffective investor communication strategies"
      ]
    },
    {
      icon: <Building className="w-12 h-12 text-purple-500" />,
      title: "Market Positioning",
      description: "Standing out in a competitive market?",
      details: [
        "Unclear differentiation from other investment firms",
        "Difficulty articulating unique value proposition",
        "Challenge in establishing market authority"
      ]
    },
    {
      icon: <Clock className="w-12 h-12 text-yellow-500" />,
      title: "Pipeline Management",
      description: "Overwhelmed by deal flow administration?",
      details: [
        "Complex tracking of multiple opportunities",
        "Time-consuming investor-project matching",
        "Inefficient communication workflows"
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-indigo-500" />,
      title: "Portfolio Scaling",
      description: "Can't scale without compromising quality?",
      details: [
        "Difficulty maintaining deal quality at higher volumes",
        "Resource constraints in project evaluation",
        "Challenge in managing larger investor networks"
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

    const interval = setInterval(() => {
      setVisibleLogos(prevLogos => {
        const nextIndex = (logos.indexOf(prevLogos[prevLogos.length - 1]) + 1) % logos.length
        return [...prevLogos.slice(1), logos[nextIndex]]
      })
    }, 3000) // Change logo every 3 seconds

    const headerInterval = setInterval(() => {
      setCurrentHeaderIndex((prevIndex) => (prevIndex + 1) % headers.length);
    }, 4000); // Change header every 4 seconds

    return () => {
      clearInterval(interval);
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
      icon: <Building className="w-8 h-8" />, 
      title: "Pipeline Setup", 
      description: "Configure outreach systems" 
    },
    { 
      icon: <Mail className="w-8 h-8" />, 
      title: "Deal Flow Launch", 
      description: "Initiate targeted campaigns" 
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

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Target className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
            <span className="text-lg md:text-xl font-bold">
              Vector Asylum
            </span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#challenges" className="text-sm font-medium hover:text-blue-600 transition-colors">Challenges</Link>
            <Link href="#email-resonance-engine" className="text-sm font-medium hover:text-blue-600 transition-colors">Our Engine</Link>
            <Link href="#success-stories" className="text-sm font-medium hover:text-blue-600 transition-colors">Success Stories</Link>
            <Link href="#process" className="text-sm font-medium hover:text-blue-600 transition-colors">Our Process</Link>
            <Link href="#why-us" className="text-sm font-medium hover:text-blue-600 transition-colors">Why Us</Link>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMobileMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          <div className="hidden md:block">
            <Button 
              onClick={() => setIsCalOpen(true)}
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center justify-center"
            >
              <Target className="mr-2 h-4 w-4" />
              Analyze Your Deal Flow Potential
            </Button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 py-4 px-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <Link href="#challenges" className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>Challenges</Link>
              <Link href="#email-resonance-engine" className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>Our Engine</Link>
              <Link href="#success-stories" className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>Success Stories</Link>
              <Link href="#process" className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>Our Process</Link>
              <Link href="#why-us" className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>Why Us</Link>
              <Button 
                onClick={() => {
                  setIsCalOpen(true);
                  toggleMobileMenu();
                }} 
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center justify-center w-full"
              >
                <Target className="mr-2 h-4 w-4" />
                Analyze Your Deal Flow Potential
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Animated Attention Banner */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-4 text-center font-semibold tracking-wide"
          animate={{
            backgroundPosition: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <motion.p 
            className="text-xs sm:text-sm md:text-base font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              className="font-bold text-sm sm:text-base md:text-lg"
              animate={{ scale: [1, 1.1, 1], color: ['#ffffff', '#ffd700', '#ffffff'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ATTENTION FINANCIAL SERVICES FIRMS:
            </motion.span>{' '}
            <motion.span
              animate={{ 
                opacity: [1, 0.8, 1],
                textShadow: ['0 0 0px #ffffff', '0 0 10px #ffffff', '0 0 0px #ffffff']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Accelerate Your Deal Flow Through Strategic Digital Outreach
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-12 sm:py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]"></div>
          <motion.div
            className="absolute inset-0 bg-blue-900 opacity-50"
            animate={{
              backgroundPosition: ['0px 0px', '100px 100px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          ></motion.div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={heroVariants}
              >
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
                  {headers[currentHeaderIndex].main}
                  <br />
                  <span className="text-yellow-400 h-[1.5em] block">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentHeaderIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block"
                      >
                        {headers[currentHeaderIndex].sub}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8">
                  AI-Powered Deal Flow Engine™ for Investment Firms
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-2xl mx-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsCalOpen(true)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-3 rounded-full text-lg font-semibold flex items-center justify-center shadow-lg w-full sm:w-auto transition-colors"
                  >
                    <Target className="mr-2 h-5 w-5" />
                    Analyze Your Deal Flow Potential
                  </motion.button>
                  <motion.div
                    className="relative"
                    initial="idle"
                    animate="animate"
                    whileHover="hover"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white rounded-full"
                      variants={pulsateVariants}
                    ></motion.div>
                    <motion.button
                      variants={playVideoButtonVariants}
                      onClick={() => setShowVideo(true)}
                      className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold flex items-center justify-center shadow-lg hover:bg-blue-50 transition-colors w-full sm:w-auto relative z-10"
                    >
                      <motion.div
                        variants={spinIconVariants}
                        animate="animate"
                        className="mr-3" // Increased right margin for better spacing
                      >
                        <Play className="h-6 w-6 text-blue-600" /> {/* Increased size from h-5 w-5 to h-6 w-6 */}
                      </motion.div>
                      Play Video
                    </motion.button>
                  </motion.div>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-4 mt-6 text-blue-200">
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    <span>AI-Powered Validation</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    <span>Strategic Deal Flow</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    <span>Institutional Connections</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          ></motion.div>
        </section>

        {/* Logo Carousel */}
        <section className="bg-white py-4 md:py-6 overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div 
              className="flex"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                x: { 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  duration: 3.5,
                  ease: "linear"
                },
              }}
              whileHover={{ animationPlayState: 'paused' }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-1/3 md:w-1/6 px-2 md:px-4 flex items-center justify-center h-12 md:h-16">
                  <Image 
                    src={`/partners/${logo}.png`} 
                    alt={`${logo} logo`} 
                    width={80} 
                    height={32} 
                    className="transition-all duration-300 hover:scale-110 object-contain max-h-full"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Critical Business Challenges Section */}
        <section id="challenges" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Critical Investment Challenges
            </h2>
            <p className="text-xl text-center mb-12 text-blue-200">
              <span className="font-bold text-2xl text-red-400">WARNING:</span> These deal flow bottlenecks are{' '}
              <span className="font-bold">limiting your investment potential</span>. 
              Address them head-on to{' '}
              <span className="text-green-400 font-bold">maximize your portfolio growth</span>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border-l-4 border-blue-500 group"
                >
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => setSelectedChallenge(selectedChallenge === index ? null : index)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`mr-4 p-3 rounded-full ${getChallengeColor(index)} group-hover:scale-110 transition-transform duration-300`}>
                          {React.cloneElement(challenge.icon, { className: "w-8 h-8 text-white" })}
                        </div>
                        <h3 className="text-xl font-semibold text-blue-300 group-hover:text-blue-200 transition-colors duration-300">{challenge.title}</h3>
                      </div>
                      <ChevronDown 
                        className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${
                          selectedChallenge === index ? 'transform rotate-180' : ''
                        }`}
                      />
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{challenge.description}</p>
                  </div>
                  <AnimatePresence>
                    {selectedChallenge === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 bg-blue-900 bg-opacity-20"
                      >
                        <ul className="space-y-3">
                          {challenge.details.map((point, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <ArrowRight className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-1" />
                              <span className="text-gray-300">{point}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Deal Flow Engine™ Section */}
        <section id="deal-flow-engine" className="py-12 bg-gradient-to-br from-gray-100 to-blue-100 text-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-4xl font-bold mb-3 text-black">
                The Deal Flow Engine™
              </h2>
              <p className="text-lg text-gray-600">
                Our AI-powered system revolutionizing project and deal sourcing for investment firms
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <div className="bg-white bg-opacity-60 rounded-lg p-4 shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">Precision Project Sourcing</h3>
                  <p className="text-sm text-gray-600">
                    Leverage AI and machine learning to identify high-potential projects and companies seeking institutional funding with precision targeting.
                  </p>
                </div>
                <div className="bg-white bg-opacity-60 rounded-lg p-4 shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">Smart Deal Qualification</h3>
                  <p className="text-sm text-gray-600">
                    Automate initial screening to ensure only projects meeting your investment criteria reach your pipeline.
                  </p>
                </div>
                <div className="bg-white bg-opacity-60 rounded-lg p-4 shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">Scalable Deal Flow</h3>
                  <p className="text-sm text-gray-600">
                    Maintain consistent outreach to potential investment opportunities while ensuring high-quality project sourcing at scale.
                  </p>
                </div>
              </div>

              <div className="bg-white bg-opacity-60 rounded-lg p-6 shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-center text-blue-600">
                  Performance Metrics
                </h3>
                <ul className="space-y-2 text-sm">
                  {[
                    "85% reduction in deal sourcing time",
                    "3x increase in qualified project pipeline",
                    "60% improvement in deal qualification rate",
                    "Automated project screening",
                    "Real-time opportunity tracking",
                    "Deal-flow optimization"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <Button
                    onClick={() => setIsCalOpen(true)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Analyze Your Deal Flow Potential
                    <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Success Stories Section */}
        <section id="success-stories" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-300">Success Story</h2>
            <p className="text-xl text-center mb-12 text-gray-300">
              See how our Deal Flow Engine™ transformed deal sourcing for a leading investment advisory firm
            </p>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 flex flex-col justify-between backdrop-filter backdrop-blur-lg border border-blue-200 border-opacity-20 transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-blue-300">Michael Rose & Associates</h3>
                  <p className="text-3xl font-bold mb-4 text-yellow-400">
                    From Referrals to Systematic Deal Flow
                  </p>
                  <ul className="text-gray-300 mb-6 space-y-2">
                    <li>• Transformed from referral-based to systematic deal sourcing</li>
                    <li>• Built custom in-house deal flow generation system</li>
                    <li>• Increased qualified opportunities from 2-3 to 25-30 per month</li>
                    <li>• Achieved consistent, predictable deal flow pipeline</li>
                  </ul>
                  <p className="text-blue-200 mb-6 italic">
                    "The Deal Flow Engine™ has transformed how we source investment opportunities. 
                    Instead of relying solely on referrals, we now have a systematic approach to 
                    identifying and qualifying potential deals, dramatically increasing our pipeline 
                    of qualified opportunities."
                  </p>
                </div>
                <a 
                  href="https://email-protocol-case-stud-j8veye9.gamma.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Read Full Case Study
                </a>
              </div>
            </div>
            <div className="mt-16 text-center">
              <Button
                onClick={() => setIsCalOpen(true)}
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Analyze Your Deal Flow Potential
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
                Join industry leaders like Michael Rose & Associates in revolutionizing your deal sourcing strategy. 
                Our Deal Flow Engine™ has helped investment firms dramatically improve their project pipeline and funding success rates.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-black">
              The Investment Pipeline Journey
            </h2>
            <p className="text-lg text-center mb-12 text-gray-600">
              Our systematic approach to transforming your deal flow generation
            </p>
            
            <div className="relative mb-12 sm:mb-20">
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-blue-200 transform -translate-y-1/2 rounded-full"></div>
              <div className="relative z-10 grid grid-cols-6 gap-4 max-w-6xl mx-auto px-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => handleStepHover(index)}
                    onTap={() => handleStepHover(index)}
                    onClick={() => handleStepHover(index)}
                    className={`flex flex-col items-center ${index === activeStep ? 'scale-110' : ''} cursor-pointer`}
                  >
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center ${
                      index === activeStep ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
                    } shadow-lg transition-all duration-300`}>
                      {step.icon}
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold">{step.title}</h3>
                      <p className="text-xs md:text-sm text-gray-600 mt-1">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Process Deep Dive</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-2xl font-semibold mb-4 text-blue-600">{processSteps[activeStep].title}</h4>
                <p className="text-gray-700 mb-4">
                  {activeStep === 0 && "Our comprehensive analysis evaluates your current deal sourcing strategy, identifying gaps and opportunities for systematic improvement."}
                  {activeStep === 1 && "We develop a precise mapping of your ideal investment opportunities, creating detailed targeting criteria and market segments."}
                  {activeStep === 2 && "Implementation of customized outreach systems and workflows designed specifically for investment opportunity generation."}
                  {activeStep === 3 && "Strategic deployment of targeted campaigns to connect with pre-qualified investment opportunities matching your criteria."}
                  {activeStep === 4 && "Continuous refinement of targeting and messaging based on real-time performance data and market response."}
                  {activeStep === 5 && "Scale successful approaches while maintaining quality, expanding your investment opportunity pipeline systematically."}
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  {activeStep === 0 && (
                    <>
                      <li>Current process evaluation</li>
                      <li>Opportunity gap analysis</li>
                      <li>Strategy development</li>
                    </>
                  )}
                  {activeStep === 1 && (
                    <>
                      <li>Investment criteria definition</li>
                      <li>Market segment identification</li>
                      <li>Opportunity qualification framework</li>
                    </>
                  )}
                  {activeStep === 2 && (
                    <>
                      <li>Custom workflow implementation</li>
                      <li>Automation setup</li>
                      <li>Team training and onboarding</li>
                    </>
                  )}
                  {activeStep === 3 && (
                    <>
                      <li>Targeted outreach sequences</li>
                      <li>Multi-channel approach</li>
                      <li>Response management systems</li>
                    </>
                  )}
                  {activeStep === 4 && (
                    <>
                      <li>Performance analytics</li>
                      <li>Message optimization</li>
                      <li>Process refinement</li>
                    </>
                  )}
                  {activeStep === 5 && (
                    <>
                      <li>Pipeline expansion</li>
                      <li>Quality maintenance</li>
                      <li>Systematic scaling</li>
                    </>
                  )}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-md"
                >
                  <div className="bg-blue-50 rounded-lg p-6 shadow-lg">
                    <h5 className="text-xl font-semibold mb-4 text-blue-800">Key Outcomes</h5>
                    {activeStep === 0 && (
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span>Comprehensive deal flow assessment</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span>Clear opportunity gaps identified</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span>Strategic roadmap developed</span>
                        </div>
                      </div>
                    )}
                    {activeStep === 1 && (
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span>Defined ideal investment criteria</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span>Target market segments mapped</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span>Opportunity scoring framework</span>
                        </div>
                      </div>
                    )}
                    {activeStep === 2 && (
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span>Automated deal flow system</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span>Streamlined qualification process</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span>Team fully trained on system</span>
                        </div>
                      </div>
                    )}
                    {activeStep === 3 && (
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span>Active outreach campaigns</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span>Consistent deal flow pipeline</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span>Efficient response management</span>
                        </div>
                      </div>
                    )}
                    {activeStep === 4 && (
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span>Optimized conversion rates</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span>Data-driven improvements</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span>Enhanced targeting accuracy</span>
                        </div>
                      </div>
                    )}
                    {activeStep === 5 && (
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span>Scaled deal flow operations</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span>Maintained quality standards</span>
                        </div>
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span>Predictable opportunity flow</span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Data-Driven Deal Sourcing Section */}
        <section id="why-us" className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-black">
              Enterprise-Grade Deal Sourcing
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-blue-800">
                  Data-Driven Project Discovery
                </h3>
                <p className="text-lg text-gray-700">
                  Traditional deal sourcing relies heavily on networks and referrals. Our approach combines advanced data intelligence with strategic outreach to identify and engage with qualified opportunities at scale.
                </p>
                <div className="bg-blue-100 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3 text-blue-800">Our Data Advantage:</h4>
                  <ul className="space-y-3">
                    {[
                      "Proprietary data enrichment algorithms",
                      "Real-time opportunity identification",
                      "Advanced filtering and validation systems",
                      "Multi-source verification protocols",
                      "Automated qualification frameworks"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-xl p-6 border border-blue-100">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-800">Enterprise Capabilities</h3>
                  <ul className="space-y-4">
                    {[
                      {
                        title: "Intelligent Data Mining",
                        desc: "Continuous scanning of multiple data sources to identify potential opportunities"
                      },
                      {
                        title: "Advanced Targeting",
                        desc: "Precision matching of opportunities with your specific investment criteria"
                      },
                      {
                        title: "Enterprise-Grade Security",
                        desc: "Bank-level encryption and compliance standards for all communications"
                      },
                      {
                        title: "Scalable Infrastructure",
                        desc: "Handle thousands of opportunities while maintaining personalization"
                      },
                      {
                        title: "Quality Assurance",
                        desc: "Multi-layer verification process for opportunity validation"
                      }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0 mt-1">
                          <Check className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <span className="text-lg font-semibold text-gray-800">{item.title}</span>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <Button
                    onClick={() => setIsCalOpen(true)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Analyze Your Deal Flow Potential
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <Link href="/" className="flex items-center space-x-2 mb-2">
                  <Target className="w-6 h-6" />
                  <span className="text-lg font-bold leading-tight">
                    Vector Asylum
                  </span>
                </Link>
                <p className="text-xs text-gray-400">
                  Enterprise-grade deal sourcing platform powered by AI and data intelligence.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-sm">Quick Links</h3>
                <ul className="space-y-1 text-xs">
                  <li><Link href="#email-resonance-engine" className="text-gray-400 hover:text-white transition-colors">Our Engine</Link></li>
                  <li><Link href="#success-stories" className="text-gray-400 hover:text-white transition-colors">Success Stories</Link></li>
                  <li><Link href="#process" className="text-gray-400 hover:text-white transition-colors">Our Process</Link></li>
                  <li><Link href="#why-us" className="text-gray-400 hover:text-white transition-colors">Why Us</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-sm">Legal</h3>
                <ul className="space-y-1 text-xs">
                  <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-800 text-center text-xs text-gray-400">
              © {new Date().getFullYear()} Vector Asylum. All rights reserved.
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

        <CalEmbed isOpen={isCalOpen} onClose={() => setIsCalOpen(false)} />
      </main>
    </div>
  )
}