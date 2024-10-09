'use client'

import React from 'react';
import { useState, useEffect } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/card"
import { Mail, ArrowRight, Check, Star, Users, BarChart, Zap, Clock, TrendingUp, ChevronLeft, ChevronRight, Calendar, UserX, PieChart, DollarSign, Menu } from "lucide-react"
import Image from 'next/image'
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import CalendlyWidget from '../components/CalendlyWidget'

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({url: 'https://calendly.com/sayed_vectorasylum/45min'});
      return false;
    }
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

  const insights = [
    {
      title: "5 Proven Strategies to Boost Your Cold Email Open Rates",
      excerpt: "Learn how to craft subject lines that grab attention and increase your open rates...",
      image: "/placeholder.svg"
    },
    {
      title: "The Future of B2B Outreach: AI and Personalization",
      excerpt: "Discover how artificial intelligence is revolutionizing the way businesses approach cold emailing...",
      image: "/placeholder.svg"
    },
    {
      title: "Case Study: How Company X Increased Sales by 300% with Cold Emails",
      excerpt: "An in-depth look at how one company leveraged ColdEmailPro to skyrocket their sales...",
      image: "/placeholder.svg"
    }
  ]

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } }
  }

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
            <Link href="#how-it-works" className="text-sm font-medium hover:text-blue-600 transition-colors">How It Works</Link>
            <Link href="#case-studies" className="text-sm font-medium hover:text-blue-600 transition-colors">Case Studies</Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">Testimonials</Link>
            {/* Removed Insights link */}
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMobileMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          <div className="hidden md:block">
            <Button onClick={openCalendly}>
              <Calendar className="mr-2 h-4 w-4" />
              Book a Consultation
            </Button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 py-2">
            <nav className="flex flex-col space-y-2 px-4">
              <Link href="#challenges" className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>Challenges We Solve</Link>
              <Link href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>Our Services</Link>
              <Link href="#how-it-works" className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>How It Works</Link>
              <Link href="#case-studies" className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>Case Studies</Link>
              <Link href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors" onClick={toggleMobileMenu}>Testimonials</Link>
              <Button onClick={() => { openCalendly(); toggleMobileMenu(); }} className="mt-2">
                <Calendar className="mr-2 h-4 w-4" />
                Book a Consultation
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Top Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-600 text-white py-2 text-center"
        >
          <p className="text-sm font-medium">Boost your B2B sales with our expert cold email services. Book a free consultation today!</p>
        </motion.div>

        {/* Hero Section */}
        <section className="bg-white py-12 md:py-20 md:pb-10">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <p className="text-blue-600 font-semibold mb-2 md:mb-4">ATTENTION B2B ORGANIZATIONS</p>
                <div className="min-h-[120px] md:min-h-[160px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentHeaderIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                        {headers[currentHeaderIndex].main}
                      </h1>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-600 mb-4">
                        {headers[currentHeaderIndex].sub}
                      </h2>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8"
                >
                  Boosting B2B sales by connecting companies with their ideal customers through targeted GTM strategies.
                </motion.p>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="mb-6 md:mb-8"
                >
                  <Button size="lg" onClick={openCalendly} className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full md:w-auto">
                    Get My Free Outbound Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-center mb-8"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 w-5 h-5 mr-1" />
                  ))}
                  <p className="ml-2 text-sm text-gray-600">Trusted by 50+ active B2B organizations</p>
                </motion.div>
              </div>
              <div className="hidden lg:block">
                {/* Placeholder for potential image or additional content */}
              </div>
            </div>
          </div>
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

        {/* Challenges Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">The Challenges You Face</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              {[
                {
                  icon: <UserX className="w-12 h-12 text-red-500 mb-4" />,
                  title: "Struggle to Book Quality Meetings",
                  description: "Your outreach efforts aren't yielding the high-quality meetings you need with decision-makers who can actually move the needle for your business."
                },
                {
                  icon: <PieChart className="w-12 h-12 text-red-500 mb-4" />,
                  title: "Weak Sales Pipeline",
                  description: "Your sales pipeline is running dry, leaving your team scrambling for leads and your revenue projections looking grim."
                },
                {
                  icon: <DollarSign className="w-12 h-12 text-red-500 mb-4" />,
                  title: "Stagnant Revenue Growth",
                  description: "Despite your best efforts, your revenue isn't growing at the pace you need to meet your business goals and fuel expansion."
                }
              ].map((challenge, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  {challenge.icon}
                  <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                  <p className="text-gray-600">{challenge.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">The Root of the Problem</h3>
              <p className="text-xl text-gray-600 mb-6">
                These challenges all stem from one critical issue: ineffective cold email outreach.
              </p>
            </div>
            <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-lg mb-12">
              <h4 className="text-xl font-semibold mb-4">Without a strategic, personalized approach to cold emailing:</h4>
              <ul className="list-disc list-inside text-red-700 space-y-2">
                <li>Your messages get lost in crowded inboxes</li>
                <li>Decision-makers ignore your outreach</li>
                <li>Your sales team wastes time on unqualified leads</li>
                <li>Your growth potential remains untapped</li>
              </ul>
            </div>
            <p className="text-xl text-center">
              But it doesn't have to be this way. There's a solution that can transform your outreach efforts and supercharge your sales pipeline.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Monthly Retainer",
                  description: "Ongoing cold email campaigns managed by our expert team.",
                  icon: <Mail className="w-12 h-12 text-blue-600" />
                },
                {
                  title: "Performance-Based Packages",
                  description: "Pay for results with our performance-driven outreach services.",
                  icon: <TrendingUp className="w-12 h-12 text-blue-600" />
                },
                {
                  title: "Consultation & Strategy",
                  description: "Expert advice to optimize your B2B outreach efforts.",
                  icon: <Users className="w-12 h-12 text-blue-600" />
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
                >
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How We Boost Your Sales</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Strategy Development",
                  description: "We craft a tailored cold email strategy aligned with your business goals.",
                  icon: <Zap className="w-12 h-12 text-blue-600" />
                },
                {
                  title: "AI-Powered Personalization",
                  description: "Our AI analyzes your prospects and crafts highly personalized emails that resonate.",
                  icon: <Users className="w-12 h-12 text-blue-600" />
                },
                {
                  title: "Automated Outreach",
                  description: "We set up and manage multi-touch campaigns that automatically nurture leads.",
                  icon: <Mail className="w-12 h-12 text-blue-600" />
                },
                {
                  title: "Performance Optimization",
                  description: "Continuous monitoring and optimization to improve campaign performance.",
                  icon: <BarChart className="w-12 h-12 text-blue-600" />
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  company: "TechInnovate Solutions",
                  result: "250% increase in qualified leads",
                  description: "We helped TechInnovate Solutions reach decision-makers in the Fortune 500, resulting in a significant boost to their sales pipeline.",
                },
                {
                  company: "GrowthGenius Marketing",
                  result: "40% higher response rate",
                  description: "Our AI-powered personalization helped GrowthGenius Marketing craft messages that truly resonated with their target audience.",
                }
              ].map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-2">{study.company}</h3>
                  <p className="text-blue-600 font-bold mb-4">{study.result}</p>
                  <p className="text-gray-600">{study.description}</p>
                  <Button variant="outline" className="mt-4">Read Full Case Study</Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col"
                >
                  <div className="flex-grow">
                    <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center mt-4">
                    <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} className="rounded-full mr-4" />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Flexible Pricing Options</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Starter",
                  price: "$1,500/month",
                  features: [
                    "Up to 1,000 prospects",
                    "2 email sequences",
                    "Basic personalization",
                    "Weekly performance reports"
                  ]
                },
                {
                  title: "Growth",
                  price: "$3,000/month",
                  features: [
                    "Up to 5,000 prospects",
                    "5 email sequences",
                    "Advanced AI personalization",
                    "Bi-weekly strategy calls",
                    "A/B testing"
                  ]
                },
                {
                  title: "Enterprise",
                  price: "Custom",
                  features: [
                    "Unlimited prospects",
                    "Custom email sequences",
                    "Full-suite AI personalization",
                    "Dedicated account manager",
                    "Performance-based options"
                  ]
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col"
                >
                  <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                  <p className="text-3xl font-bold mb-4">{plan.price}</p>
                  <ul className="mb-6 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center mb-2">
                        <Check className="w-5 h-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={index === 1 ? "default" : "outline"}>Get Started</Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Insights */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Latest Insights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {insights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <Image src={insight.image} alt={insight.title} width={300} height={200} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{insight.title}</h3>
                    <p className="text-gray-600 mb-4">{insight.excerpt}</p>
                    <Button variant="outline">Read More</Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Challenges We Solve */}
        <section id="challenges" className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Common Challenges We Solve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              {challenges.map((challenge, index) => (
                <div 
                  key={index}
                  className={`bg-white p-4 md:p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${selectedChallenge === index ? 'ring-2 ring-red-500' : 'hover:shadow-lg'}`}
                  onClick={() => setSelectedChallenge(index)}
                >
                  <div className="flex flex-col items-center text-center">
                    {React.cloneElement(challenge.icon, { className: "w-10 h-10 md:w-12 md:h-12 text-red-500 mb-3 md:mb-4" })}
                    <h3 className="text-lg md:text-xl font-semibold mt-2 md:mt-4 mb-2">{challenge.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{challenge.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {selectedChallenge !== null && (
              <div className="flex justify-center">
                <div className="bg-red-100 p-6 md:p-8 rounded-lg shadow-md border-l-4 border-red-500 w-full md:max-w-2xl">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-red-700">{challenges[selectedChallenge].title}</h3>
                  <p className="text-base md:text-lg mb-4 md:mb-6 text-gray-700">{challenges[selectedChallenge].details}</p>
                  <Button 
                    size="lg"
                    onClick={openCalendly}
                    className="bg-red-500 hover:bg-red-600 text-white w-full"
                  >
                    Solve This Challenge
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

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
                <li><Link href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">How it works</Link></li>
                <li><Link href="#case-studies" className="text-sm text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
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
              <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for the latest B2B outreach tips and trends.</p>
              <form className="flex">
                <Input type="email" placeholder="Enter your email" className="rounded-r-none" />
                <Button type="submit" className="rounded-l-none">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} The Email Protocol. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}