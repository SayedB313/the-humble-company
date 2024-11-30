'use client'

import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Building, Target, Network, Users, DollarSign, TrendingUp, ArrowUpRight, Globe, Shield, Rocket, Award } from "lucide-react";
import Navigation from '../../components/ui/Navigation';
import CalEmbed from '../../components/CalEmbed';
import { CldVideoPlayer } from 'next-cloudinary';

export default function AboutUs() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isCalOpen, setIsCalOpen] = React.useState(false);
  const standardCTA = "bg-[#14213D] hover:bg-[#1C2E56] text-white px-8 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors flex items-center gap-2";

  const roles = [
    {
      icon: <Rocket className="w-10 h-10 text-white" />,
      title: "Growth Enabler",
      description: "Unlocking opportunities through expertly crafted capital strategies",
      benefits: [
        "Operational expansion",
        "R&D advancement",
        "Strategic funding"
      ]
    },
    {
      icon: <Network className="w-10 h-10 text-white" />,
      title: "Strategic Partner",
      description: "Building enduring partnerships to drive value creation",
      benefits: [
        "Joint ventures",
        "Market access",
        "Industry expertise"
      ]
    },
    {
      icon: <Globe className="w-10 h-10 text-white" />,
      title: "Global Intermediary",
      description: "Connecting businesses with institutional and private investors",
      benefits: [
        "Capital markets access",
        "Investment opportunities",
        "Deal structuring"
      ]
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-[#14213D]" />,
      title: "Holistic Growth",
      description: "Integrating financial, operational, and market considerations"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#14213D]" />,
      title: "Custom Strategies",
      description: "Tailored solutions for unique business needs"
    },
    {
      icon: <Users className="w-8 h-8 text-[#14213D]" />,
      title: "Collaborative Execution",
      description: "Active partnership in implementing initiatives"
    },
    {
      icon: <Building className="w-8 h-8 text-[#14213D]" />,
      title: "Global Reach",
      description: "Extensive networks worldwide for funding and partnerships"
    },
    {
      icon: <Award className="w-8 h-8 text-[#14213D]" />,
      title: "Proven Expertise",
      description: "Combining legacy experience with modern insights"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#14213D]" />,
      title: "Risk Mitigation",
      description: "Carefully structured partnerships and transactions"
    }
  ];

  const trackRecord = [
    {
      icon: <DollarSign className="w-10 h-10 text-white" />,
      metric: "$500M+",
      title: "Transaction Value",
      description: "Total value of completed deals across all services"
    },
    {
      icon: <Building className="w-10 h-10 text-white" />,
      metric: "50+",
      title: "Strategic Partnerships",
      description: "Successful partnerships and deals facilitated"
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      metric: "100+",
      title: "Client Relationships",
      description: "Long-term client partnerships built on trust"
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-white" />,
      metric: "85%",
      title: "Success Rate",
      description: "Consistent track record of successful outcomes"
    }
  ];

  const teamMembers = [
    {
      image: "/placeholder-profile.jpg",
      name: "John Smith",
      title: "Managing Director",
      description: "20+ years of investment banking and private equity experience"
    },
    {
      image: "/placeholder-profile.jpg",
      name: "Sarah Johnson",
      title: "Head of M&A",
      description: "Former Goldman Sachs executive with extensive deal experience"
    },
    {
      image: "/placeholder-profile.jpg",
      name: "Michael Chen",
      title: "Director of Strategy",
      description: "Strategic advisor with deep technology sector expertise"
    }
  ];

  React.useEffect(() => {
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

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#14213D] shadow-lg' 
          : ''
      }`}>
        <div className="container mx-auto px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-3xl sm:text-3xl md:text-2xl font-light font-montserrat tracking-wider text-white">
              Vector Summit
            </span>
          </Link>
          <Navigation currentPath="/about" />
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full"
            >
              <source 
                src={`https://res.cloudinary.com/dluf6sg5d/video/upload/v1/ClippedMountain_q3feug`} 
                type="video/mp4" 
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
          </div>
          
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-light font-montserrat tracking-wider text-white">
                  OUR
                  <span className="block mt-2">
                    PROFILE
                  </span>
                </h1>
                
                <div className="h-2 w-24 bg-[#14213D]"></div>
                
                <p className="text-lg sm:text-xl md:text-2xl font-light font-montserrat tracking-wider text-gray-300 max-w-4xl">
                  <span className="block mb-2 font-semibold">Strategic Capital & Growth Partners</span>
                  <span className="block text-base sm:text-lg md:text-xl opacity-80 font-semibold">
                    Architecting Bespoke Solutions for Exceptional Growth
                  </span>
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center space-x-4 text-white hover:text-[#14213D] transition-colors cursor-pointer pl-4 sm:pl-0"
                  onClick={() => {
                    const rolesSection = document.querySelector('#roles');
                    rolesSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <ChevronDown className="w-6 h-6" />
                  </div>
                  <span className="text-sm uppercase tracking-wider font-bold">Our Role</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Roles Section */}
        <section id="roles" className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-20 max-w-3xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#1A1A1A] mb-6">
                  Our Role
                </h2>
                <div className="h-[1px] w-full bg-[#14213D] opacity-20"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                {roles.map((role, index) => (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="group bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#14213D]"
                  >
                    <div className="bg-[#14213D] w-16 h-16 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                      {role.icon}
                    </div>
                    <h3 className="text-2xl font-bold font-montserrat text-[#1A1A1A] mb-4">
                      {role.title}
                    </h3>
                    <div className="h-[2px] w-12 bg-[#14213D] mb-6 group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-gray-600 mb-8 text-lg">
                      {role.description}
                    </p>
                    <ul className="space-y-4">
                      {role.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-600">
                          <ArrowRight className="w-5 h-5 text-[#14213D] flex-shrink-0" />
                          <span className="text-lg">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-20 max-w-3xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#1A1A1A] mb-6">
                  Our Values
                </h2>
                <div className="h-[1px] w-full bg-[#14213D] opacity-20"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#14213D]"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="group-hover:scale-110 transition-transform duration-500">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold font-montserrat text-[#1A1A1A]">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Track Record Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-20 max-w-3xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#1A1A1A] mb-6">
                  Track Record
                </h2>
                <div className="h-[1px] w-full bg-[#14213D] opacity-20"></div>
              </div>

              <div className="grid md:grid-cols-4 gap-12">
                {trackRecord.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="group bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#14213D]"
                  >
                    <div className="bg-[#14213D] w-16 h-16 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <h3 className="text-4xl font-bold font-montserrat text-[#1A1A1A] mb-2">
                      {item.metric}
                    </h3>
                    <div className="h-[2px] w-12 bg-[#14213D] mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <h4 className="text-xl font-bold font-montserrat text-[#1A1A1A] mb-4">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-lg">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-20 max-w-3xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#1A1A1A] mb-6">
                  Leadership Team
                </h2>
                <div className="h-[1px] w-full bg-[#14213D] opacity-20"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#14213D]"
                  >
                    <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-2xl font-bold font-montserrat text-[#1A1A1A] mb-2">
                      {member.name}
                    </h3>
                    <div className="h-[2px] w-12 bg-[#14213D] mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <h4 className="text-lg font-bold text-[#14213D] mb-4">
                      {member.title}
                    </h4>
                    <p className="text-gray-600">
                      {member.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32">
          <div className="absolute inset-0">
            <Image
              src="/River Near Mountains.jpg"
              alt="Mountains"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h2 className="text-4xl md:text-6xl font-light font-montserrat tracking-wider text-white">
                  Partner With Us
                </h2>
                <p className="text-xl text-gray-300">
                  Join us in creating transformative growth opportunities and 
                  achieving sustained success in competitive markets.
                </p>
                <button 
                  onClick={() => setIsCalOpen(true)}
                  className={`${standardCTA} mx-auto`}
                >
                  Schedule a Meeting
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

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
              © {new Date().getFullYear()} Vector Summit. All rights reserved.
            </div>
            <div className="border-t border-gray-100"></div>
          </div>
        </div>
      </footer>

      <CalEmbed 
        isOpen={isCalOpen}
        onClose={() => setIsCalOpen(false)}
      />
    </div>
  );
} 