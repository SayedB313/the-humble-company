'use client'

import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Building, Target, Network, Users, DollarSign, TrendingUp, ArrowUpRight, Globe, Shield, Rocket, Award, FileText, Download, X, Cpu } from "lucide-react";
import Navigation from '../../components/ui/Navigation';
import CalEmbed from '../../components/CalEmbed';
import { CldVideoPlayer } from 'next-cloudinary';

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
      description: "We operate with absolute transparency and ethical clarity in every engagement. Our reputation is built on trust, confidentiality, and maintaining uncompromising professional standards across all interactions."
    },
    {
      icon: <Target className="w-8 h-8 text-[#14213D]" />,
      title: "Results-Driven Partnership",
      description: "We align our incentives directly with your goals through equity partnerships and performance-based structures. Our success is measured solely by the transformative outcomes we achieve together."
    },
    {
      icon: <Network className="w-8 h-8 text-[#14213D]" />,
      title: "Strategic Precision",
      description: "We combine deep market intelligence with tactical execution expertise. Every recommendation is backed by rigorous analysis and delivered with clear, actionable implementation pathways."
    },
    {
      icon: <Users className="w-8 h-8 text-[#14213D]" />,
      title: "Elite Expertise",
      description: "Our selective engagement model ensures direct access to senior professionals. We maintain excellence by choosing partnerships where our specialized expertise can deliver transformative impact."
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#14213D]" />,
      title: "Accelerated Innovation",
      description: "We leverage cutting-edge methodologies to stay ahead of market dynamics. Our forward-thinking solutions anticipate opportunities and create sustainable competitive advantages."
    },
    {
      icon: <Globe className="w-8 h-8 text-[#14213D]" />,
      title: "Enduring Impact",
      description: "We focus on building sustainable value that compounds over time. Our strategic initiatives create lasting positive changes in your market position and business trajectory."
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
                      const networkModelSection = document.querySelector('#network-model');
                      networkModelSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                      <ChevronDown className="w-6 h-6" />
                    </div>
                    <span className="text-sm uppercase tracking-wider font-bold">Network Model</span>
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

        {/* Network Model Section - Reimagined */}
        <section id="network-model" className="py-32 relative overflow-hidden">
          {/* Background patterns remain the same */}
          <div className="absolute inset-0 bg-[#FAFAFA]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #14213D 1px, transparent 0)`,
              backgroundSize: '48px 48px',
              opacity: 0.03
            }}></div>
          </div>

          {/* Floating shapes remain the same */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.02]">
            <div className="absolute inset-0 rotate-45 border border-[#14213D] rounded-3xl transform -translate-y-1/2"></div>
            <div className="absolute inset-0 -rotate-45 border border-[#14213D] rounded-3xl transform translate-x-1/4"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-7xl mx-auto">
              {/* Header section remains the same */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-20" // Reduced from mb-32
              >
                {/* Dynamic line and header content remain the same */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                  className="absolute -top-4 left-0 h-[1px] bg-gradient-to-r from-[#14213D] via-[#14213D]/50 to-transparent"
                ></motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#1A1A1A]">
                        Network Model
                      </h2>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="relative"
                  >
                    <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#14213D]/20 to-transparent"></div>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      A revolutionary approach to advisory services, where expertise meets opportunity in perfect harmony.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Modified Content Grid */}
              <div className="grid md:grid-cols-2 gap-12"> {/* Reduced gap from 20 to 12 */}
                {/* Left Column - Concept Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-6" // Reduced from space-y-8
                >
                  {[
                    {
                      number: "01",
                      title: "Excellence Bridge",
                      description: "Orchestrating precise solutions through elite expertise",
                      icon: <Target className="w-6 h-6" />
                    },
                    {
                      number: "02",
                      title: "Aligned Success",
                      description: "Partnership model ensuring shared growth trajectory",
                      icon: <Users className="w-6 h-6" />
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.number}
                      whileHover={{ scale: 1.02 }}
                      className="group relative bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.07)] transition-all duration-500"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#14213D] to-transparent rounded-tl-2xl rounded-bl-2xl transform origin-left transition-transform group-hover:scale-y-100 scale-y-0"></div>
                      
                      <div className="flex items-start gap-4"> {/* Reduced gap from 6 */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-xl bg-[#14213D]/5 flex items-center justify-center group-hover:bg-[#14213D] transition-colors duration-500">
                            {React.cloneElement(item.icon, { 
                              className: "text-[#14213D] group-hover:text-white transition-colors duration-500" 
                            })}
                          </div>
                        </div>
                        
                        <div className="flex-grow">
                          <div className="text-sm text-[#14213D]/60 mb-1 font-medium tracking-wider">
                            {item.number}
                          </div>
                          <h3 className="text-2xl font-light text-[#1A1A1A] mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Right Column - Value Creation Matrix */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-6"
                >
                  <div className="rounded-2xl p-8 border-2 border-[#14213D] text-[#14213D]">
                    <h3 className="text-2xl font-light mb-6">Value Creation Matrix</h3>
                    <div className="space-y-4">
                      {[
                        "Strategic Network Activation",
                        "Performance-Based Alignment",
                        "Expertise-Driven Solutions"
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 * idx }}
                          className="flex items-center gap-4"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#14213D]/30"></div>
                          <span className="text-[#14213D]/90">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setIsWhitePaperModalOpen(true)}
                    className="w-full group bg-white rounded-xl p-6 flex items-center gap-6 border border-gray-100 hover:border-[#14213D] transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-xl border-2 border-[#14213D] flex items-center justify-center group-hover:bg-[#14213D] transition-colors duration-500">
                      <FileText className="w-6 h-6 text-[#14213D] group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-[#14213D]/60 mb-1">Download</div>
                      <div className="text-lg font-medium text-[#1A1A1A]">Network Model White Paper</div>
                    </div>
                  </motion.button>
                </motion.div>
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
              </div>

              {/* Featured Case Studies */}
              <div className="mb-24">
                {/* MR&A Case Study */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#14213D] transition-all duration-500 shadow-sm hover:shadow-xl">
                  <div className="grid md:grid-cols-12 gap-12">
                    {/* Left Column - Main Content */}
                    <div className="md:col-span-8 space-y-8">
                      <div>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="h-[2px] w-12 bg-[#14213D] opacity-20"></div>
                          <span className="text-[#14213D]/60 uppercase tracking-wider text-sm">Featured Success Story</span>
                        </div>
                        <h3 className="text-3xl font-light text-[#1A1A1A] mb-4">MR&A Strategic Growth Initiative</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Orchestrated comprehensive market expansion strategy resulting in 300% revenue growth and successful Series B funding round.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 rounded-full bg-[#14213D]/5 flex items-center justify-center flex-shrink-0">
                            <Target className="w-5 h-5 text-[#14213D]" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-[#1A1A1A] mb-1">Market Expansion</h4>
                            <p className="text-gray-600">Strategic entry into key growth markets</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 rounded-full bg-[#14213D]/5 flex items-center justify-center flex-shrink-0">
                            <TrendingUp className="w-5 h-5 text-[#14213D]" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-[#1A1A1A] mb-1">Strategic Growth</h4>
                            <p className="text-gray-600">Comprehensive business transformation</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Key Metrics */}
                    <div className="md:col-span-4 flex flex-col justify-center">
                      <div className="space-y-6">
                        <div className="p-6 bg-gray-50 rounded-xl">
                          <div className="text-3xl font-light text-[#14213D] mb-2">300%</div>
                          <div className="text-sm text-gray-600">Revenue Growth</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                          {["Market Entry", "Growth Strategy", "Digital Transformation"].map((tag, idx) => (
                            <span 
                              key={idx}
                              className="text-sm px-3 py-1 bg-gray-50 text-[#14213D] rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button className="inline-flex items-center text-[#14213D] hover:text-[#1C2E56] transition-colors group">
                        <span className="font-medium">Read Full Case Study</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Companies - Updated styling */}
              <div className="mb-12">
                <div className="flex items-center space-x-4">
                  <div className="h-[2px] w-12 bg-[#14213D] opacity-20"></div>
                  <span className="text-[#14213D]/60 uppercase tracking-wider text-sm">Companies Under Our Brand</span>
                </div>
                <h3 className="text-2xl font-light text-[#1A1A1A] mt-4">
                  Strategic Ventures & Partnerships
                </h3>
                <p className="text-gray-600 mt-4 max-w-2xl">
                  Select companies where we maintain direct operational involvement, representing our commitment to innovation across key sectors.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-24">
                {[
                  {
                    title: "FuturePrimeAI",
                    description: "Advanced AI solutions for enterprise transformation",
                    tags: ["AI & Machine Learning", "Enterprise Tech"],
                    icon: <Cpu className="w-6 h-6 text-[#14213D]" />
                  },
                  {
                    title: "EmailProtocol",
                    description: "Next-generation email security and optimization",
                    tags: ["Cybersecurity", "SaaS"],
                    icon: <Shield className="w-6 h-6 text-[#14213D]" />
                  },
                  {
                    title: "The Humble Company Co.",
                    description: "Sustainable consumer products and retail innovation",
                    tags: ["Consumer Goods", "Sustainability"],
                    icon: <Globe className="w-6 h-6 text-[#14213D]" />
                  }
                ].map((company, index) => (
                  <motion.div
                    key={company.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#14213D]"
                  >
                    <div className="flex flex-col h-full">
                      <div className="bg-[#14213D]/5 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#14213D]/10 transition-colors">
                        {company.icon}
                      </div>
                      <h3 className="text-2xl font-bold font-montserrat text-[#1A1A1A] mb-4">
                        {company.title}
                      </h3>
                      <div className="h-[2px] w-12 bg-[#14213D] mb-6"></div>
                      <p className="text-gray-600 mb-6">
                        {company.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {company.tags.map((tag, idx) => (
                          <span 
                            key={idx}
                            className="bg-gray-50 text-[#14213D] px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto flex items-center text-[#14213D] group-hover:text-[#1C2E56] transition-colors">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Network Metrics */}
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { metric: "200+", label: "Strategic Partners", sublabel: "Global network reach" },
                  { metric: "15+", label: "Industry Verticals", sublabel: "Sector expertise" },
                  { metric: "25+", label: "Global Markets", sublabel: "International presence" },
                  { metric: "300%", label: "Average Growth", sublabel: "Client success rate" }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#14213D] text-center"
                  >
                    <div className="text-3xl font-light text-[#14213D] mb-2">{item.metric}</div>
                    <div className="h-[2px] w-12 bg-[#14213D] mx-auto mb-4"></div>
                    <div className="text-[#1A1A1A] font-medium mb-1">{item.label}</div>
                    <div className="text-gray-600 text-sm">{item.sublabel}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-32 bg-white relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="flex flex-col items-center text-center mb-24">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-light font-montserrat tracking-wider text-[#1A1A1A]">
                  Core Values
                </h2>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-[#14213D]"></div>
                  <span className="text-[#14213D] uppercase tracking-widest text-sm font-medium">Our Foundation</span>
                  <div className="h-[1px] w-12 bg-[#14213D]"></div>
                </div>
              </div>

              {/* Main Content */}
              <div className="relative">
                {/* Central Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#14213D]/20 to-transparent"></div>

                {/* Content Sections */}
                <div className="space-y-32">
                  {values.map((value, index) => (
                    <div key={value.title} className="grid md:grid-cols-2 gap-16 items-center">
                      {index % 2 === 0 ? (
                        <>
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-right pr-16 relative"
                          >
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-[1px] bg-[#14213D]/20"></div>
                            <span className="text-sm uppercase tracking-widest text-[#14213D]/60 mb-2 block">0{index + 1}</span>
                            <h3 className="text-3xl font-light text-[#14213D] mb-4">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                              {value.description}
                            </p>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="pl-16"
                          >
                            <div className="relative h-40 bg-[#14213D]/[0.02] rounded-lg p-8 flex items-center group hover:bg-[#14213D]/[0.05] transition-all duration-500">
                              <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#14213D]/0 via-[#14213D]/20 to-[#14213D]/0"></div>
                              <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center">
                                  {React.cloneElement(value.icon, { className: "w-8 h-8 text-[#14213D]" })}
                                </div>
                                <div className="flex-1">
                                  <div className="h-[2px] w-12 bg-[#14213D]/20 mb-4"></div>
                                  <p className="text-gray-600 leading-relaxed italic">
                                    {value.description.split('.')[0] + '.'}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </>
                      ) : (
                        <>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="pr-16 order-2 md:order-1"
                          >
                            <div className="relative h-40 bg-[#14213D]/[0.02] rounded-lg p-8 flex items-center group hover:bg-[#14213D]/[0.05] transition-all duration-500">
                              <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#14213D]/0 via-[#14213D]/20 to-[#14213D]/0"></div>
                              <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center">
                                  {React.cloneElement(value.icon, { className: "w-8 h-8 text-[#14213D]" })}
                                </div>
                                <div className="flex-1">
                                  <div className="h-[2px] w-12 bg-[#14213D]/20 mb-4"></div>
                                  <p className="text-gray-600 leading-relaxed italic">
                                    {value.description.split('.')[0] + '.'}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="pl-16 relative order-1 md:order-2"
                          >
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-[1px] bg-[#14213D]/20"></div>
                            <span className="text-sm uppercase tracking-widest text-[#14213D]/60 mb-2 block">0{index + 1}</span>
                            <h3 className="text-3xl font-light text-[#14213D] mb-4">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                              {value.description}
                            </p>
                          </motion.div>
                        </>
                      )}
                    </div>
                  ))}
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