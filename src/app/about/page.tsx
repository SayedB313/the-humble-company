'use client'

import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ArrowRight, ChevronDown, Building, Target, Network, Users, DollarSign, TrendingUp, ArrowUpRight, Globe, Shield, Rocket, Award, FileText, Download, X, Cpu } from "lucide-react";
import Navigation from '../../components/ui/Navigation';
import CalEmbed from '../../components/CalEmbed';
import { CldVideoPlayer } from 'next-cloudinary';

const motionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function AboutUs() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isCalOpen, setIsCalOpen] = React.useState(false);
  const [isWhitePaperModalOpen, setIsWhitePaperModalOpen] = React.useState(false);
  const [isAdvisorsExpanded, setIsAdvisorsExpanded] = React.useState(false);
  const standardCTA = "bg-[#14213D] hover:bg-[#1C2E56] text-white px-8 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors flex items-center gap-2";

  const values = [
    {
      icon: <Shield className="w-8 h-8 text-[#14213D]" />,
      title: "Unwavering Integrity",
      description: "Transparent and ethical practices in every engagement."
    },
    {
      icon: <Target className="w-8 h-8 text-[#14213D]" />,
      title: "Results-Driven Partnership",
      description: "Success through aligned equity partnerships."
    },
    {
      icon: <Network className="w-8 h-8 text-[#14213D]" />,
      title: "Strategic Precision",
      description: "Data-driven solutions with tactical execution."
    },
    {
      icon: <Users className="w-8 h-8 text-[#14213D]" />,
      title: "Elite Expertise",
      description: "Direct access to senior advisory talent."
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#14213D]" />,
      title: "Accelerated Innovation",
      description: "Cutting-edge methods for market advantage."
    },
    {
      icon: <Globe className="w-8 h-8 text-[#14213D]" />,
      title: "Enduring Impact",
      description: "Creating sustainable long-term value."
    }
  ];

  const teamMembers = [
    {
      image: "/sayed-profile.jpg",
      name: "Sayed B Wayzi",
      title: "Managing Director",
      shortDescription: "Strategic Growth Expert",
      fullBio: "Sayed brings extensive expertise in strategic growth advisory and capital formation. His approach combines sophisticated market intelligence with tactical execution to drive transformative outcomes. Specializes in architecting bespoke solutions for complex business challenges.",
      expertise: [
        "Strategic Growth Advisory",
        "Business Transformation"
      ],
      education: "Business Administration & Management",
      linkedin: "https://www.linkedin.com/in/sayedbw/"
    }
  ];

  const advisors = []; // Empty array but keeping the structure for future additions

  const [selectedTeamMember, setSelectedTeamMember] = React.useState(null);

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
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster="https://res.cloudinary.com/dluf6sg5d/video/upload/so_0/v1/ClippedMountain_q3feug"
            >
              <source 
                src="https://res.cloudinary.com/dluf6sg5d/video/upload/q_auto,f_auto,c_scale,w_1920,vc_auto,br_2m/v1/ClippedMountain_q3feug"
                type="video/mp4"
              />
              <source 
                src="https://res.cloudinary.com/dluf6sg5d/video/upload/q_auto,f_webm,c_scale,w_1920,vc_auto,br_2m/v1/ClippedMountain_q3feug"
                type="video/webm"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Main content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-[2px] w-12 bg-white"></div>
                    <span className="text-white uppercase tracking-wider text-sm font-semibold">Our Story</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-light font-montserrat tracking-wider text-white">
                    Our
                    <span className="block mt-2 text-[#A5B4FC]">Profile</span>
                  </h1>
                </div>
                
                <p className="text-lg sm:text-xl md:text-2xl font-light font-montserrat tracking-wider text-gray-300 mb-8 max-w-4xl">
                  <span className="block text-base sm:text-lg md:text-xl opacity-80">
                    Connecting exceptional businesses with curated expertise through value-aligned partnerships
                  </span>
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <motion.button 
                    className={`${standardCTA} hidden sm:flex text-center justify-center`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={() => setIsCalOpen(true)}
                  >
                    <span>Schedule a Meeting</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-center space-x-4 text-white hover:text-[#14213D] transition-colors cursor-pointer w-full sm:w-auto pl-4 sm:pl-0 justify-start sm:justify-center"
                    onClick={() => {
                      const foundationSection = document.querySelector('#our-foundation');
                      foundationSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                      <ChevronDown className="w-6 h-6" />
                    </div>
                    <span className="text-sm uppercase tracking-wider font-bold">Our Foundation</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right side - Stats/Highlights */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden md:grid grid-cols-2 gap-6"
              >
                {[
                  { 
                    title: "Global Reach", 
                    description: "Operations across key markets"
                  },
                  { 
                    title: "Expert Team", 
                    description: "Seasoned finance professionals"
                  },
                  { 
                    title: "Focus Areas", 
                    description: "Growth, M&A, and Capital Formation"
                  },
                  { 
                    title: "Approach", 
                    description: "Bespoke solutions for each client"
                  }
                ].map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    className="bg-[#14213D]/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-[#14213D]/30 transition-colors"
                  >
                    <div className="text-xl font-semibold text-white mb-2">
                      {highlight.title}
                    </div>
                    <div className="text-white/80 text-sm leading-relaxed">
                      {highlight.description}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Combined Network Model & Core Values Section */}
        <section id="our-foundation" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #14213D 1px, transparent 0)`,
              backgroundSize: '48px 48px',
              opacity: 0.02
            }}></div>
            <div className="absolute right-0 w-[800px] h-[800px] bg-[#14213D]/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#1A1A1A] mb-4">
                    Our Foundation
                  </h2>
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-[1px] w-8 bg-[#14213D]"></div>
                    <span className="text-[#14213D] uppercase tracking-widest text-sm font-medium">Network Model & Core Values</span>
                    <div className="h-[1px] w-8 bg-[#14213D]"></div>
                  </div>
                </motion.div>
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-12 gap-8">
                {/* Left Column - Network Model */}
                <div className="lg:col-span-5">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-[#14213D] flex items-center justify-center">
                        <Network className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-light text-[#1A1A1A]">Network Model</h3>
                    </div>,

                    <div className="space-y-4 mb-6">
                      {[
                        {
                          title: "Strategic Network Activation",
                          description: "Leveraging elite expertise and connections for transformative outcomes",
                          icon: <Target className="w-4 h-4" />
                        },
                        {
                          title: "Performance-Based Alignment",
                          description: "Direct incentive alignment through equity partnerships",
                          icon: <TrendingUp className="w-4 h-4" />
                        },
                        {
                          title: "Expertise-Driven Solutions",
                          description: "Customized strategies backed by proven methodologies",
                          icon: <Users className="w-4 h-4" />
                        }
                      ].map((item, idx) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3 group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#14213D]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#14213D] transition-colors duration-300">
                            {React.cloneElement(item.icon, { 
                              className: "text-[#14213D] group-hover:text-white transition-colors duration-300" 
                            })}
                          </div>
                          <div>
                            <h4 className="text-base font-semibold text-[#1A1A1A] mb-0.5">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>,

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setIsWhitePaperModalOpen(true)}
                      className="w-full group bg-[#14213D] rounded-lg p-3 flex items-center justify-center gap-3 text-white hover:bg-[#1C2E56] transition-all duration-300 text-sm"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Download Network Model White Paper</span>
                    </motion.button>
                  </motion.div>
                </div>

                {/* Right Column - Core Values */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-2 gap-4">
                    {values.map((value, idx) => (
                      <motion.div
                        key={value.title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-[#14213D] transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-[#14213D]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#14213D] transition-colors duration-300">
                            {React.cloneElement(value.icon, { 
                              className: "w-5 h-5 text-[#14213D] group-hover:text-white transition-colors duration-300" 
                            })}
                          </div>
                          <div>
                            <h4 className="text-base font-semibold text-[#1A1A1A] mb-1">{value.title}</h4>
                            <p className="text-gray-600 text-sm line-clamp-2">{value.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Advisory Section */}
        <section className="py-32 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Leadership Team */}
              <div className="mb-20">
                <div className="mb-16 max-w-3xl">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#1A1A1A] mb-6">
                    Leadership Team
                  </h2>
                  <div className="h-[1px] w-full bg-[#14213D] opacity-20"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#14213D] cursor-pointer"
                      onClick={() => setSelectedTeamMember(member)}
                    >
                      <div className="flex flex-col items-center text-center mb-4">
                        <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h4 className="text-xl font-bold text-[#1A1A1A] mb-1">{member.name}</h4>
                        <p className="text-[#14213D] font-medium mb-2">{member.title}</p>
                        <div className="h-[2px] w-12 bg-[#14213D] opacity-20 mb-2"></div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4 text-center">
                        {member.shortDescription}
                      </p>
                      
                      <div className="flex items-center justify-center text-[#14213D] hover:text-[#1C2E56] transition-colors group">
                        <span className="font-medium text-sm">View Profile</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Advisors Section */}
              <div className="mt-16">
                <button 
                  onClick={() => setIsAdvisorsExpanded(!isAdvisorsExpanded)}
                  className="w-full flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <div className="flex items-center space-x-4">
                    <Users className="w-6 h-6 text-[#14213D]" />
                    <h3 className="text-xl font-bold font-montserrat text-[#1A1A1A]">
                      Advisory Board
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 text-[#14213D] transition-transform duration-300 ${
                      isAdvisorsExpanded ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isAdvisorsExpanded ? 'auto' : 0,
                    opacity: isAdvisorsExpanded ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-8 text-center text-gray-600">
                    Coming Soon
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Member Modal */}
        {selectedTeamMember && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold font-montserrat text-[#1A1A1A]">
                      {selectedTeamMember.name}
                    </h3>
                    <p className="text-[#14213D] font-bold">
                      {selectedTeamMember.title}
                    </p>
                  </div>
                  <button 
                    onClick={() => setSelectedTeamMember(null)}
                    className="text-gray-500 hover:text-[#14213D]"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {selectedTeamMember.fullBio}
                  </p>

                  <div>
                    <h4 className="font-bold text-[#1A1A1A] mb-2">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTeamMember.expertise.map((item, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-[#14213D] px-3 py-1 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#1A1A1A] mb-2">Education</h4>
                    <p className="text-gray-600">{selectedTeamMember.education}</p>
                  </div>

                  <a 
                    href={selectedTeamMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#14213D] hover:text-[#1C2E56] transition-colors"
                  >
                    <span>Connect on LinkedIn</span>
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Combined Ecosystem & Success Section */}
        <section className="py-32 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-20 max-w-3xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#1A1A1A] mb-6">
                  Our Impact
                </h2>
                <div className="h-[1px] w-full bg-[#14213D] opacity-20"></div>
                <p className="text-gray-600 mt-6 text-lg">
                  Transformative outcomes across diverse industries and markets.
                </p>
              </div>

              {/* Grid of Case Studies */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* MR&A */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#14213D] transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">MR&A Strategic Growth Initiative</h3>
                      <p className="text-sm text-gray-500">Nova Scotia, Canada</p>
                    </div>
                    <div className="bg-[#14213D]/5 px-4 py-2 rounded-full">
                      <span className="text-[#14213D] font-semibold">300% Growth</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6">
                    Orchestrated comprehensive market expansion strategy resulting in substantial revenue growth and successful Series B funding round.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Market Entry", "Growth Strategy", "Digital Transformation"].map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-50 text-[#14213D] rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* The Humble Company */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#14213D] transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">The Humble Company</h3>
                      <p className="text-sm text-gray-500">Toronto, Canada</p>
                    </div>
                    <div className="bg-[#14213D]/5 px-4 py-2 rounded-full">
                      <span className="text-[#14213D] font-semibold">250% Growth</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6">
                    Revolutionized business networking through innovative connection platforms, facilitating strategic partnerships and cross-industry collaborations.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Business Networking", "Partnership Development", "Industry Integration"].map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-50 text-[#14213D] rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BenchMrkPro */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#14213D] transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">BenchMrkPro</h3>
                      <p className="text-sm text-gray-500">Gananoque, Canada</p>
                    </div>
                    <div className="bg-[#14213D]/5 px-4 py-2 rounded-full">
                      <span className="text-[#14213D] font-semibold">180% Growth</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6">
                    Pioneered innovative crypto advisory solutions, providing strategic guidance for digital asset management and blockchain integration.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Crypto Advisory", "Digital Assets", "Blockchain Strategy"].map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-50 text-[#14213D] rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mobile Capital Inc. */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#14213D] transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Mobile Capital Inc.</h3>
                      <p className="text-sm text-gray-500">Toronto, Canada</p>
                    </div>
                    <div className="bg-[#14213D]/5 px-4 py-2 rounded-full">
                      <span className="text-[#14213D] font-semibold">220% Growth</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6">
                    Established comprehensive mobile device import-export operations across USA, Canada, and UAE markets, optimizing global supply chain networks.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Import/Export", "Mobile Devices", "Global Markets"].map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-50 text-[#14213D] rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* National First Financial */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#14213D] transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">National First Financial</h3>
                      <p className="text-sm text-gray-500">California, USA</p>
                    </div>
                    <div className="bg-[#14213D]/5 px-4 py-2 rounded-full">
                      <span className="text-[#14213D] font-semibold">400% Growth</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6">
                    Facilitated global market expansion into emerging economies and third-world countries, establishing sustainable financial infrastructure.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Global Markets", "Emerging Economies", "Infrastructure Development"].map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-50 text-[#14213D] rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sunrise 7KM */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#14213D] transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Sunrise 7KM</h3>
                      <p className="text-sm text-gray-500">Odessa, Ukraine</p>
                    </div>
                    <div className="bg-[#14213D]/5 px-4 py-2 rounded-full">
                      <span className="text-[#14213D] font-semibold">150% Growth</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6">
                    Established robust international import-export operations across China, Ukraine, and Europe through strategic trade partnerships.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Import/Export", "Global Trade", "Supply Chain"].map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-50 text-[#14213D] rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sunray Energy Solutions */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#14213D] transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Sunray Energy Solutions</h3>
                      <p className="text-sm text-gray-500">California, USA</p>
                    </div>
                    <div className="bg-[#14213D]/5 px-4 py-2 rounded-full">
                      <span className="text-[#14213D] font-semibold">200% Growth</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6">
                    Pioneered comprehensive renewable energy solutions across residential and commercial sectors, specializing in solar and battery storage.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Solar & Wind", "Battery Storage", "Clean Energy"].map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-50 text-[#14213D] rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
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
              priority
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-white">
                  Begin Your
                  <br />
                  <span className="text-[#A5B4FC]">Journey</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                  Let's explore how our expertise and network can help accelerate your growth and create lasting value.
                </p>
                <button 
                  onClick={() => setIsCalOpen(true)}
                  className="bg-[#14213D] hover:bg-[#1C2E56] text-white px-10 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors inline-flex items-center gap-2 group"
                >
                  <span>Start the Conversation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

      <CalEmbed 
        isOpen={isCalOpen}
        onClose={() => setIsCalOpen(false)}
      />

      {isWhitePaperModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold font-montserrat text-[#1A1A1A]">
                Download White Paper
              </h3>
              <button 
                onClick={() => setIsWhitePaperModalOpen(false)}
                className="text-gray-500 hover:text-[#14213D]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14213D] focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14213D] focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#14213D] text-white px-8 py-4 rounded-lg hover:bg-[#1C2E56] transition-colors flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download White Paper
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 