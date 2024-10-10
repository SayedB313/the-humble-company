'use client'

import React, { useState, useEffect } from 'react';
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/card"
import { Mail, ArrowRight, Check, Star, Users, BarChart, Zap, Clock, TrendingUp, ChevronLeft, ChevronRight, Calendar, UserX, PieChart, DollarSign, Menu, Lightbulb, Phone, Cog, ChevronDown, Target, Wand2 } from "lucide-react"
import Image from 'next/image'
import Link from "next/link"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import CalendlyWidget from '../components/CalendlyWidget'
import Quiz from '../components/Quiz';

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
    { main: "We Drive Pipeline", sub: "You Close Deals" },
    { main: "We Generate Leads", sub: "You Boost Revenue" },
    { main: "We Craft Messages", sub: "You Win Clients" },
    { main: "We Do Outreach", sub: "You Focus on Growth" }, // New header variation
  ];

  const [selectedChallenge, setSelectedChallenge] = useState(null)

  const challenges = [
    {
      icon: <UserX className="w-12 h-12 text-orange-500" />,
      title: "Lead Generation",
      description: "Struggling to find ideal prospects?",
      details: "Finding high-quality leads is becoming increasingly difficult. Your team spends countless hours searching for the right contacts, often with limited success."
    },
    {
      icon: <Mail className="w-12 h-12 text-orange-500" />,
      title: "Email Deliverability",
      description: "Emails not reaching inboxes?",
      details: "Your carefully crafted emails are ending up in spam folders or getting blocked entirely, severely limiting the effectiveness of your outreach campaigns."
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Personalization at Scale",
      description: "Generic outreach falling flat?",
      details: "Mass emails are being ignored. You know personalization is key, but manually customizing each message for hundreds or thousands of prospects is simply not feasible."
    },
    {
      icon: <PieChart className="w-12 h-12 text-orange-500" />,
      title: "Weak Sales Pipeline",
      description: "Not enough qualified leads?",
      details: "Your sales team is struggling with a dry pipeline. The lack of consistent, quality leads is making it difficult to meet sales targets and grow your business."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      title: "Time Management",
      description: "Drowning in follow-ups?",
      details: "Managing responses, follow-ups, and appointment scheduling is eating up your day. This leaves little time for actually closing deals and growing your business."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-orange-500" />,
      title: "Scaling Outreach",
      description: "Can't increase volume without losing quality?",
      details: "As you try to scale your outreach efforts, you're finding it hard to maintain the quality and personalization that made your initial campaigns successful."
    }
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizData, setQuizData] = useState(null);

  // Add this near the top of your Home component
  const [showQuiz, setShowQuiz] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const rotatingPhrases = [
    "You Close Deals",
    "You Grow Your Business",
    "You Boost Revenue",
    "You Scale Operations",
    "You Dominate Markets"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

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
        url: 'https://calendly.com/sayed_vectorasylum/45min',
        text: 'Book a Consultation',
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

  const handleQuizComplete = (data) => {
    setQuizData(data);
    setQuizCompleted(true);
    setIsQuizOpen(false);
    // Here you would typically send the quiz data to your backend
    // The backend would process the data, generate a report, and send an email
    console.log("Quiz completed, data:", data);
    // Simulating an API call to process quiz data
    setTimeout(() => {
      console.log("Report sent to email");
      // In a real scenario, this would be handled by your backend
    }, 2000);
  };

  const closeCompletionScreen = () => {
    setQuizCompleted(false);
  };

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
    { icon: <Lightbulb className="w-8 h-8" />, title: "Quiz", description: "Assess your outbound strategy" },
    { icon: <Phone className="w-8 h-8" />, title: "Consultation", description: "Get expert insights" },
    { icon: <Target className="w-8 h-8" />, title: "GTM Strategy", description: "Develop your market approach" },
    { icon: <Cog className="w-8 h-8" />, title: "Setup", description: "Configure your system" },
    { icon: <Mail className="w-8 h-8" />, title: "Campaigns", description: "Launch email sequences" },
    { icon: <DollarSign className="w-8 h-8" />, title: "Revenue", description: "Grow your pipeline" },
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

  return (
    <div className="flex flex-col min-h-screen">
      <CalendlyWidget />
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Mail className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
            <span className="text-lg md:text-xl font-bold">
              The Email Protocol
            </span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#challenges" className="text-sm font-medium hover:text-blue-600 transition-colors">Challenges We Solve</Link>
            <Link href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">Our Services</Link>
            <Link href="#case-studies" className="text-sm font-medium hover:text-blue-600 transition-colors">Success Stories</Link>
            <Link href="#process" className="text-sm font-medium hover:text-blue-600 transition-colors">Our Process</Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">Testimonials</Link>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMobileMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          <div className="hidden md:block">
            <Button onClick={() => setIsQuizOpen(true)} className={ctaButtonClass}>
              <Zap className="mr-2 h-5 w-5" />
              Analyze Email Resonance
            </Button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 py-2">
            <nav className="flex flex-col space-y-2 px-4">
              <Link href="#challenges" className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>Challenges We Solve</Link>
              <Link href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>Our Services</Link>
              <Link href="#case-studies" className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>Success Stories</Link>
              <Link href="#process" className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>Our Process</Link>
              <Link href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>Testimonials</Link>
              <Button onClick={() => { setIsQuizOpen(true); toggleMobileMenu(); }} className="mt-2">
                <Calendar className="mr-2 h-4 w-4" />
                Take Quiz
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Animated Attention Banner */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 text-center overflow-hidden"
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
              ATTENTION B2B ORGS:
            </motion.span>{' '}
            <motion.span
              animate={{ 
                opacity: [1, 0.8, 1],
                textShadow: ['0 0 0px #ffffff', '0 0 10px #ffffff', '0 0 0px #ffffff']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              We'll double your qualified leads in 90 days or your money back!
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
                  We Drive Pipeline
                  <br />
                  <span className="text-yellow-400 h-[1.5em] block">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentPhraseIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block"
                      >
                        {rotatingPhrases[currentPhraseIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8">
                  Supercharge your B2B outreach with our AI-powered Email Resonance Engine™
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsQuizOpen(true)}
                  className={ctaButtonClass}
                >
                  <Wand2 className="mr-2 h-5 w-5" />
                  Analyze Your Email Resonance
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-blue-200 mt-4 sm:mt-0">
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    <span>AI-Powered</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    <span>Targeted Outreach</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    <span>Increased Conversions</span>
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

        {/* Combined Challenges Section */}
        <section id="challenges" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-black">B2B Outreach Challenges We Solve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <UserX className="w-12 h-12 text-red-500" />,
                  title: "Struggle to Book Quality Meetings",
                  description: "Your outreach efforts aren't yielding high-quality meetings with decision-makers.",
                  problem: "Your team spends countless hours searching for the right contacts, often with limited success. This results in meetings that don't move the needle for your business.",
                  solution: "Our AI-powered lead generation and qualification tools identify the best prospects and decision-makers for your business, ensuring your meetings are always high-value.",
                },
                {
                  icon: <Mail className="w-12 h-12 text-orange-500" />,
                  title: "Poor Email Deliverability",
                  description: "Your carefully crafted emails are ending up in spam folders or getting blocked.",
                  problem: "Low inbox placement rates severely limit the effectiveness of your outreach campaigns, wasting your team's efforts and reducing your potential impact.",
                  solution: "We implement advanced email authentication, warming techniques, and best practices to significantly boost your deliverability and ensure your messages reach their intended recipients.",
                },
                {
                  icon: <Users className="w-12 h-12 text-yellow-500" />,
                  title: "Lack of Personalization at Scale",
                  description: "Generic, mass emails are being ignored by your prospects.",
                  problem: "You know personalization is key, but manually customizing each message for hundreds or thousands of prospects is simply not feasible, leading to poor engagement rates.",
                  solution: "Our AI-driven personalization engine creates highly tailored messages at scale, ensuring each prospect receives a relevant and engaging email without overwhelming your team.",
                },
                {
                  icon: <PieChart className="w-12 h-12 text-green-500" />,
                  title: "Weak Sales Pipeline",
                  description: "Your sales team is struggling with a dry pipeline and inconsistent lead flow.",
                  problem: "The lack of consistent, quality leads is making it difficult to meet sales targets and grow your business. Your team is constantly scrambling to find new opportunities.",
                  solution: "We build a consistent, high-quality lead generation process that keeps your pipeline full and provides a steady stream of qualified prospects to your sales team.",
                },
                {
                  icon: <Clock className="w-12 h-12 text-blue-500" />,
                  title: "Time Management Issues",
                  description: "Managing responses, follow-ups, and scheduling is consuming your team's time.",
                  problem: "Your sales team has little time for actually closing deals and growing the business because they're drowning in follow-ups and administrative tasks.",
                  solution: "Our automated follow-up and scheduling systems free up your team to focus on high-value activities like closing deals and building relationships.",
                },
                {
                  icon: <TrendingUp className="w-12 h-12 text-purple-500" />,
                  title: "Stagnant Revenue Growth",
                  description: "Despite your best efforts, your revenue isn't growing at the pace you need.",
                  problem: "Your current outreach strategies aren't delivering the results you need to meet your business goals and fuel expansion. You're struggling to scale effectively.",
                  solution: "Our comprehensive approach combines targeted outreach, personalization, and continuous optimization to drive consistent revenue growth and help you achieve your business objectives.",
                },
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 ${
                    selectedChallenge === index ? 'ring-4 ring-blue-400' : 'hover:shadow-xl'
                  }`}
                  onClick={() => setSelectedChallenge(index === selectedChallenge ? null : index)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="mr-4">{challenge.icon}</div>
                      <h3 className="text-xl font-semibold">{challenge.title}</h3>
                    </div>
                    <ChevronDown 
                      className={`w-6 h-6 text-blue-500 transition-transform duration-300 ${
                        selectedChallenge === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>
                  <p className="text-gray-600 mb-4">{challenge.description}</p>
                  <AnimatePresence>
                    {selectedChallenge === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="text-red-600 font-semibold mb-2">The Problem:</p>
                          <p className="text-gray-700 mb-4">{challenge.problem}</p>
                          <p className="text-green-600 font-semibold mb-2">Our Solution:</p>
                          <p className="text-gray-700 mb-4">{challenge.solution}</p>
                          <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white">
                            Learn How We Solve This
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-6 text-blue-800">Ready to Boost Your Email Resonance?</h3>
              <Button
                onClick={() => setIsQuizOpen(true)}
                className={`${ctaButtonClass} transform hover:scale-105`}
              >
                Start Your Free Resonance Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* The Email Resonance Engine™ Section */}
        <section id="email-resonance-engine" className="py-12 bg-gradient-to-br from-gray-100 to-blue-100 text-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-4xl font-bold mb-3 text-black">
                The Email Resonance Engine™
              </h2>
              <p className="text-lg text-gray-600">
                Our AI-powered system revolutionizing B2B outreach
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <div className="bg-white bg-opacity-60 rounded-lg p-4 shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">AI-Powered Precision</h3>
                  <p className="text-sm text-gray-600">
                    Boost revenue with accurate targeting and AI-crafted messaging that resonates with each prospect.
                  </p>
                </div>
                <div className="bg-white bg-opacity-60 rounded-lg p-4 shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">Guaranteed Results</h3>
                  <p className="text-sm text-gray-600">
                    Increase qualified leads, close more high-value deals, and accelerate progress towards revenue targets.
                  </p>
                </div>
                <div className="bg-white bg-opacity-60 rounded-lg p-4 shadow-md border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">Scalable Performance</h3>
                  <p className="text-sm text-gray-600">
                    Effortlessly scale your outreach efforts without sacrificing quality or personalization.
                  </p>
                </div>
              </div>

              <div className="bg-white bg-opacity-60 rounded-lg p-6 shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-center text-blue-600">
                  Revolutionary Features
                </h3>
                <ul className="space-y-2 text-sm">
                  {[
                    "50% higher open rates",
                    "3x increase in response rates",
                    "AI-driven personalization at scale",
                    "Continuous optimization",
                    "Performance-based pricing options",
                    "Guaranteed ROI improvement"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <Button
                    onClick={() => setIsQuizOpen(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Get Your Free Resonance Analysis
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
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-300">Success Stories</h2>
            <p className="text-xl text-center mb-12 text-gray-300">See how our cold email strategies transform B2B outreach across industries</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  company: "TechSales Inc.",
                  result: "150% Increase in Qualified Leads",
                  description: "Our AI-powered cold email campaigns helped TechSales Inc. automate their outreach, resulting in a significant boost in qualified leads and sales efficiency.",
                },
                {
                  company: "CustomerFirst Solutions",
                  result: "40% Higher Response Rate",
                  description: "Our personalized email sequences provided targeted outreach for CustomerFirst Solutions, dramatically improving response rates and engagement.",
                },
                {
                  company: "DataDriven Corp",
                  result: "200% ROI within 6 Months",
                  description: "Implementing our strategic cold email approach helped DataDriven Corp uncover hidden opportunities, leading to decisions that doubled their ROI.",
                },
              ].map((story, index) => (
                <div key={index} className="bg-white bg-opacity-10 rounded-2xl p-8 flex flex-col justify-between backdrop-filter backdrop-blur-lg border border-blue-200 border-opacity-20 transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-blue-300">{story.company}</h3>
                    <p className="text-3xl font-bold mb-4 text-yellow-400">{story.result}</p>
                    <p className="text-gray-300 mb-6">{story.description}</p>
                  </div>
                  <Button 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
                    onClick={() => {/* Handle case study request */}}
                  >
                    Read Full Case Study
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Button
                onClick={() => setIsQuizOpen(true)}
                className={`${ctaButtonClass} transform hover:scale-105`}
              >
                Analyze Your Email Resonance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
                Join industry leaders in revolutionizing their B2B outreach. 
                Our Email Resonance Analyzer™ has helped companies just like yours achieve remarkable results. 
                Start your journey to improved engagement and higher conversions today.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-black">Our B2B Cold Email Journey</h2>
            <div className="relative mb-12 sm:mb-20">
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-blue-200 transform -translate-y-1/2 rounded-full hidden sm:block"></div>
              <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={() => handleStepHover(index)}
                    className={`flex flex-col items-center ${index === activeStep ? 'scale-110' : ''}`}
                  >
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center ${index === activeStep ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} shadow-lg transition-all duration-300`}>
                      {step.icon}
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-base sm:text-lg font-semibold">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Dive Deeper into Our Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-2xl font-semibold mb-4 text-blue-600">{processSteps[activeStep].title}</h4>
                <p className="text-gray-700 mb-4">
                  {activeStep === 0 && "Our intelligent quiz analyzes your current outbound strategy, identifying areas for improvement and untapped opportunities."}
                  {activeStep === 1 && "Our experts provide personalized insights based on your quiz results, crafting a tailored strategy for your business."}
                  {activeStep === 2 && "We craft a comprehensive Go-To-Market strategy tailored to your business:"}
                  {activeStep === 3 && "We set up and optimize your outreach tools, ensuring everything is configured for maximum efficiency and effectiveness."}
                  {activeStep === 4 && "Launch highly targeted, personalized email campaigns that resonate with your prospects and drive engagement."}
                  {activeStep === 5 && "Watch as your efforts translate into tangible results, with a growing pipeline and increased revenue."}
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  {activeStep === 0 && (
                    <>
                      <li>Assess current performance</li>
                      <li>Identify key challenges</li>
                      <li>Determine growth potential</li>
                    </>
                  )}
                  {activeStep === 1 && (
                    <>
                      <li>Review quiz results</li>
                      <li>Discuss business goals</li>
                      <li>Develop custom strategy</li>
                    </>
                  )}
                  {activeStep === 2 && (
                    <>
                      <li>Market segmentation and targeting</li>
                      <li>Unique value proposition development</li>
                      <li>Channel strategy and partnerships</li>
                      <li>Competitive positioning</li>
                    </>
                  )}
                  {activeStep === 3 && (
                    <>
                      <li>Configure email tools</li>
                      <li>Set up tracking and analytics</li>
                      <li>Implement best practices</li>
                    </>
                  )}
                  {activeStep === 4 && (
                    <>
                      <li>Craft compelling messages</li>
                      <li>Segment your audience</li>
                      <li>Optimize send times</li>
                    </>
                  )}
                  {activeStep === 5 && (
                    <>
                      <li>Monitor key metrics</li>
                      <li>Continuously optimize</li>
                      <li>Scale successful campaigns</li>
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
                  {activeStep === 0 && (
                    <div className="bg-yellow-100 rounded-lg p-6 shadow-lg">
                      <h5 className="text-xl font-semibold mb-4 text-yellow-800">Sample Quiz Question</h5>
                      <p className="text-gray-800 mb-4">What's your current average email open rate?</p>
                      <div className="space-y-2">
                        {["Less than 10%", "10-20%", "20-30%", "Over 30%"].map((option, index) => (
                          <div key={index} className="flex items-center">
                            <input type="radio" id={`option-${index}`} name="open-rate" className="mr-2" />
                            <label htmlFor={`option-${index}`} className="text-gray-700">{option}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {activeStep === 1 && (
                    <div className="bg-blue-100 rounded-lg p-6 shadow-lg">
                      <h5 className="text-xl font-semibold mb-4 text-blue-800">Consultation Highlight</h5>
                      <p className="text-gray-800 mb-4">Our experts analyze your unique challenges and opportunities:</p>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Industry-specific insights</li>
                        <li>Competitor analysis</li>
                        <li>Custom growth projections</li>
                      </ul>
                    </div>
                  )}
                  {activeStep === 2 && (
                    <div className="bg-green-100 rounded-lg p-6 shadow-lg">
                      <h5 className="text-xl font-semibold mb-4 text-green-800">GTM Strategy Overview</h5>
                      <p className="text-gray-800 mb-4">We craft a comprehensive Go-To-Market strategy tailored to your business:</p>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Market segmentation and targeting</li>
                        <li>Unique value proposition development</li>
                        <li>Channel strategy and partnerships</li>
                        <li>Competitive positioning</li>
                      </ul>
                    </div>
                  )}
                  {activeStep === 3 && (
                    <div className="bg-green-100 rounded-lg p-6 shadow-lg">
                      <h5 className="text-xl font-semibold mb-4 text-green-800">Setup Checklist</h5>
                      <ul className="space-y-2">
                        {["Configure email automation", "Set up tracking pixels", "Implement email authentication"].map((item, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="w-5 h-5 text-green-500 mr-2" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {activeStep === 4 && (
                    <div className="bg-purple-100 rounded-lg p-6 shadow-lg">
                      <h5 className="text-xl font-semibold mb-4 text-purple-800">Campaign Performance</h5>
                      <div className="space-y-4">
                        <div>
                          <p className="text-gray-700 mb-1">Open Rate</p>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700 mb-1">Click-through Rate</p>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-700 mb-1">Response Rate</p>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeStep === 5 && (
                    <div className="bg-indigo-100 rounded-lg p-6 shadow-lg">
                      <h5 className="text-xl font-semibold mb-4 text-indigo-800">Revenue Growth</h5>
                      <div className="flex items-center justify-center">
                        <div className="relative w-40 h-40">
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle className="text-gray-200 stroke-current" strokeWidth="10" cx="50" cy="50" r="40" fill="transparent"/>
                            <circle className="text-indigo-500 progress-ring__circle stroke-current" strokeWidth="10" strokeLinecap="round" cx="50" cy="50" r="40" fill="transparent"
                              style={{
                                strokeDasharray: `${2 * Math.PI * 40}`,
                                strokeDashoffset: `${2 * Math.PI * 40 * (1 - 0.75)}`,
                                transform: 'rotate(-90deg)',
                                transformOrigin: '50% 50%'
                              }}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold text-indigo-800">75%</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-center mt-4 text-gray-700">Increase in qualified leads</p>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Redesigned Cold Email Mastery Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-black">Believe in Cold Email Again</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-blue-800">Cold Email: Powerful When Done Right</h3>
                <p className="text-lg text-gray-700">
                  Many have lost faith in cold email due to poor execution, turning it into a nuisance and a failure. But when done right, it remains one of the most powerful tools for B2B growth.
                </p>
                <p className="text-lg text-gray-700">
                  At The Email Protocol, we're not just practitioners – we're masters of cold email. It's our sole focus, our expertise, and our passion.
                </p>
                <div className="bg-blue-100 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3 text-blue-800">Our Cold Email Mastery:</h4>
                  <ul className="space-y-2">
                    {[
                      "Laser-focused on cold email as our primary channel",
                      "Years of experience refining techniques",
                      "Constantly evolving with industry changes",
                      "Data-driven approach for measurable results",
                      "Tailored strategies for each unique business"
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
                  <h3 className="text-2xl font-semibold mb-4 text-blue-800">Why Our Cold Email Approach Works</h3>
                  <ul className="space-y-4">
                    {[
                      "Direct access to decision-makers",
                      "Highly scalable outreach",
                      "Precise targeting capabilities",
                      "Measurable ROI and performance",
                      "Ability to start meaningful conversations"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0 mt-1">
                          <Check className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-lg text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <Button
                    onClick={() => setIsQuizOpen(true)}
                    className={`${ctaButtonClass} transform hover:scale-105 w-full md:w-auto`}
                  >
                    Discover Your Cold Email Potential
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <Mail className="w-8 h-8" />
                  <span className="text-xl font-bold leading-tight">
                    The Email Protocol
                  </span>
                </Link>
                <p className="text-sm text-gray-400">Revolutionizing B2B cold outreach with expert strategies and AI-powered automation.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="#case-studies" className="text-sm text-gray-400 hover:text-white transition-colors">Success Stories</Link></li>
                  <li><Link href="#process" className="text-sm text-gray-400 hover:text-white transition-colors">Our Process</Link></li>
                  <li><Link href="#testimonials" className="text-sm text-gray-400 hover:text-white transition-colors">Testimonials</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Stay Updated</h3>
                <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for the latest email resonance tips and trends.</p>
                <form className="flex">
                  <Input type="email" placeholder="Enter your email" className="rounded-l-full" />
                  <Button type="submit" className="rounded-r-full bg-yellow-400 hover:bg-yellow-500 text-blue-900">Subscribe</Button>
                </form>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
              © {new Date().getFullYear()} The Email Protocol. All rights reserved.
            </div>
          </div>
        </footer>

        <Quiz 
          isOpen={isQuizOpen} 
          onClose={() => setIsQuizOpen(false)}
          onComplete={handleQuizComplete}
        />

        {quizCompleted && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <h2 className="text-2xl font-bold">Thank You for Completing the Quiz!</h2>
              </div>
              <div className="p-6 max-h-[70vh] overflow-y-auto">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Here's what happens next:</h3>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700 mb-2">1. Personalized Report Generation</h4>
                    <p className="text-gray-600">We're creating your AI-powered outbound strategy report.</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-700 mb-2">2. Delivery to Your Inbox</h4>
                    <p className="text-gray-600">Expect the report in your email <span className="font-semibold">within 10 minutes</span>.</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-700 mb-2">3. Actionable Insights</h4>
                    <p className="text-gray-600">Gain personalized advice on targeting, optimization, and strategies to boost your outbound efforts.</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-700 mb-2">4. Exclusive Opportunity</h4>
                    <p className="text-gray-600">If your profile aligns with our expertise, you'll receive an exclusive invitation for a complimentary 30-minute strategy session with one of our outbound specialists.</p>
                  </div>
                </div>
                
                <p className="text-lg font-semibold my-6 text-blue-600 text-center">
                  Check your inbox soon – your personalized outbound strategy and potential fast-track to success await!
                </p>
              </div>
              <div className="bg-gray-50 p-4 border-t border-gray-200">
                <button
                  onClick={closeCompletionScreen}
                  className={ctaButtonClass}
                >
                  Close and Return to Site
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}