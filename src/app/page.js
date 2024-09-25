'use client'

import React from 'react';
import { useState, useEffect } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/card"
import { Mail, ArrowRight, Check, Star, Users, BarChart, Zap, Clock, TrendingUp, ChevronLeft, ChevronRight, Calendar } from "lucide-react"
import Image from 'next/image'
import Link from "next/link"
import { motion } from "framer-motion"
import CalendlyWidget from '../components/CalendlyWidget'

export default function EnhancedAgencyLandingPage() {
  const [currentInsight, setCurrentInsight] = useState(0)

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
            <Mail className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold">ColdEmailPro</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">Services</Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-blue-600 transition-colors">How it works</Link>
            <Link href="#case-studies" className="text-sm font-medium hover:text-blue-600 transition-colors">Case Studies</Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">Testimonials</Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="#faq" className="text-sm font-medium hover:text-blue-600 transition-colors">FAQ</Link>
          </nav>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button onClick={openCalendly}>
              <Calendar className="mr-2 h-4 w-4" />
              Book a Consultation
            </Button>
          </motion.div>
        </div>
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
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold mb-6"
              >
                Supercharge Your B2B Sales Pipeline with Expert Cold Email Outreach
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-gray-600 mb-8"
              >
                We help B2B companies generate high-quality leads and book more meetings through our proven cold email strategies and AI-powered automation.
              </motion.p>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button size="lg" onClick={openCalendly}>
                  Book Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8 flex items-center justify-center space-x-4"
              >
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Image key={i} src="/placeholder.svg" alt="Client logo" width={40} height={40} className="rounded-full border-2 border-white" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Trusted by 100+ B2B companies</p>
              </motion.div>
            </div>
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

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Skyrocket Your B2B Sales?</h2>
            <p className="text-xl mb-8">Book a free consultation and learn how we can help you generate more leads and close more deals.</p>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button size="lg" variant="secondary" onClick={openCalendly}>
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible>
                {[
                  {
                    question: "How do you ensure high email deliverability?",
                    answer: "We use advanced email authentication protocols, maintain a clean sender reputation, and continuously monitor deliverability rates to ensure your emails reach the intended inboxes."
                  },
                  {
                    question: "Can you integrate with our existing CRM?",
                    answer: "Yes, we can integrate with most popular CRMs including Salesforce, HubSpot, and Pipedrive. We'll work with you to ensure smooth data flow between our systems."
                  },
                  {
                    question: "How do you measure the success of campaigns?",
                    answer: "We track key metrics such as open rates, reply rates, meeting booking rates, and ultimately, the ROI of our campaigns. We provide detailed reports and insights to help you understand the performance."
                  },
                  {
                    question: "What makes your cold email approach different?",
                    answer: "Our approach combines expert strategy, AI-powered personalization, and continuous optimization. We don't just send emails; we create conversations that lead to meaningful business relationships."
                  }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Mail className="w-8 h-8" />
                <span className="text-xl font-bold">ColdEmailPro</span>
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
            © {new Date().getFullYear()} ColdEmailPro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}