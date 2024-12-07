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

  const teamMembers = [
    {
      image: "/placeholder-profile.jpg",
      name: "John Smith",
      title: "Managing Director",
      shortDescription: "20+ years of investment banking experience",
      fullBio: "John Smith brings over two decades of investment banking and private equity experience. Previously held senior positions at Morgan Stanley and KKR. Led transactions worth over $10B across technology, healthcare, and industrial sectors.",
      expertise: ["M&A Advisory", "Private Equity", "Growth Strategy"],
      education: "MBA from Harvard Business School",
      linkedin: "https://linkedin.com/in/johnsmith"
    },
    {
      image: "/placeholder-profile.jpg",
      name: "Sarah Johnson",
      title: "Head of M&A",
      shortDescription: "Former Goldman Sachs executive",
      fullBio: "Sarah Johnson's 15-year career spans investment banking and strategic advisory. Former Executive Director at Goldman Sachs, specializing in cross-border M&A transactions.",
      expertise: ["Cross-border M&A", "Deal Structuring", "Financial Advisory"],
      education: "MBA from Wharton School of Business",
      linkedin: "https://linkedin.com/in/sarahjohnson"
    },
    {
      image: "/placeholder-profile.jpg",
      name: "Michael Chen",
      title: "Director of Strategy",
      shortDescription: "Tech sector specialist",
      fullBio: "Michael Chen specializes in technology sector strategy and growth advisory. Former strategy consultant at McKinsey & Company with deep expertise in digital transformation and emerging technologies.",
      expertise: ["Technology Strategy", "Digital Transformation", "Growth Advisory"],
      education: "MS in Computer Science from Stanford University",
      linkedin: "https://linkedin.com/in/michaelchen"
    }
  ];

  const advisors = [
    {
      image: "/placeholder-profile.jpg",
      name: "David Williams",
      title: "Technology Advisor",
      shortDescription: "Former CTO at Major Tech Co.",
      expertise: ["AI/ML", "Digital Transformation", "Enterprise Tech"],
      linkedin: "https://linkedin.com/in/davidwilliams"
    },
    {
      image: "/placeholder-profile.jpg",
      name: "Emma Thompson",
      title: "Financial Markets Advisor",
      shortDescription: "25+ years in Investment Banking",
      expertise: ["Capital Markets", "Risk Management", "Strategic Finance"],
      linkedin: "https://linkedin.com/in/emmathompson"
    },
    {
      image: "/placeholder-profile.jpg",
      name: "Robert Chen",
      title: "Strategic Advisor",
      shortDescription: "Serial Entrepreneur & Investor",
      expertise: ["Venture Capital", "Startups", "Scale-ups"],
      linkedin: "https://linkedin.com/in/robertchen"
    }
  ];

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
            >
              <source 
                src="xhttps://res.cloudinary.com/dluf6sg5d/video/upload/v1/ClippedMountain_q3feug" 
                type="video/mp4" 
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
                  <span className="block mb-2 font-semibold">Network-Based Advisory & Strategic Growth</span>
                  <span className="block text-base sm:text-lg md:text-xl opacity-80 font-semibold mb-8">
                    Orchestrating elite expertise networks to solve complex business challenges through aligned partnerships
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
                      const rolesSection = document.querySelector('#roles');
                      rolesSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                      <ChevronDown className="w-6 h-6" />
                    </div>
                    <span className="text-sm uppercase tracking-wider font-bold">Our Role</span>
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

        {/* Network Model Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-24 max-w-3xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#1A1A1A] mb-6">
                  Our Network Model
                </h2>
                <div className="h-[1px] w-full bg-[#14213D] opacity-20 mb-8"></div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We reimagined advisory services through a network-first approach, creating perfect alignments between business challenges and expert solutions.
                </p>
              </div>

              {/* Core Model Description */}
              <div className="grid md:grid-cols-2 gap-16 mb-16">
                <div className="space-y-12">
                  <div>
                    <h3 className="text-2xl font-light text-[#1A1A1A] mb-4">The Bridge to Excellence</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Vector Summit acts as a sophisticated bridge between your business challenges and our curated network of industry experts, technical specialists, and strategic operators. We don't just connect – we orchestrate precise solutions through deep understanding and perfect alignment.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-light text-[#1A1A1A] mb-4">Aligned Interests</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our entire network operates on an equity and profit-sharing model. From our team to our partners, everyone has a vested interest in your success. This creates a unique ecosystem where expertise meets commitment, driving exceptional outcomes.
                    </p>
                  </div>

                  {/* White Paper Button - Inline with text */}
                  <button
                    onClick={() => setIsWhitePaperModalOpen(true)}
                    className="inline-flex items-center text-[#14213D] hover:text-[#1C2E56] transition-colors group"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    <span className="font-medium">Download Our Network Model White Paper</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="space-y-8">
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#14213D]/5 flex items-center justify-center">
                        <Target className="w-5 h-5 text-[#14213D]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#1A1A1A]">Precision Matching</h4>
                        <p className="text-sm text-gray-600">Expert alignment with your specific needs</p>
                      </div>
                    </div>
                    <div className="pl-14">
                      <div className="h-[1px] w-full bg-[#14213D] opacity-10 mb-6"></div>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 rounded-full bg-[#14213D]"></div>
                          <span>Deep business analysis</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 rounded-full bg-[#14213D]"></div>
                          <span>Strategic network activation</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 rounded-full bg-[#14213D]"></div>
                          <span>Tailored solution design</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#14213D]/5 flex items-center justify-center">
                        <Users className="w-5 h-5 text-[#14213D]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#1A1A1A]">Shared Success</h4>
                        <p className="text-sm text-gray-600">Performance-based partnership model</p>
                      </div>
                    </div>
                    <div className="pl-14">
                      <div className="h-[1px] w-full bg-[#14213D] opacity-10 mb-6"></div>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 rounded-full bg-[#14213D]"></div>
                          <span>Equity participation</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 rounded-full bg-[#14213D]"></div>
                          <span>Revenue sharing structure</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1 h-1 rounded-full bg-[#14213D]"></div>
                          <span>Long-term value alignment</span>
                        </li>
                      </ul>
                    </div>
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
                      className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#14213D] cursor-pointer"
                      onClick={() => setSelectedTeamMember(member)}
                    >
                      <div className="flex flex-col items-center text-center mb-6">
                        <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h4 className="text-2xl font-bold text-[#1A1A1A] mb-2">{member.name}</h4>
                        <p className="text-[#14213D] font-medium mb-4">{member.title}</p>
                        <div className="h-[2px] w-12 bg-[#14213D] opacity-20 mb-4"></div>
                      </div>
                      
                      <p className="text-gray-600 text-base mb-6 text-center">
                        {member.shortDescription}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 justify-center mb-6">
                        {member.expertise.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="text-sm px-3 py-1 bg-gray-50 text-[#14213D] rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-center text-[#14213D] hover:text-[#1C2E56] transition-colors group">
                        <span className="font-medium">View Full Profile</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
                  <div className="pt-8 grid md:grid-cols-3 gap-6">
                    {advisors.map((advisor, index) => (
                      <motion.div
                        key={advisor.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100"
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden">
                            <Image
                              src={advisor.image}
                              alt={advisor.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-[#1A1A1A]">{advisor.name}</h4>
                            <p className="text-sm text-[#14213D]">{advisor.title}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{advisor.shortDescription}</p>
                        <div className="flex flex-wrap gap-2">
                          {advisor.expertise.map((skill, idx) => (
                            <span 
                              key={idx}
                              className="text-xs px-2 py-1 bg-gray-100 text-[#14213D] rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        <a 
                          href={advisor.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#14213D] hover:text-[#1C2E56] transition-colors mt-4 text-sm"
                        >
                          <span>Connect</span>
                          <ArrowUpRight className="w-4 h-4 ml-1" />
                        </a>
                      </motion.div>
                    ))}
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
                            <DollarSign className="w-5 h-5 text-[#14213D]" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-[#1A1A1A] mb-1">Capital Formation</h4>
                            <p className="text-gray-600">Successful Series B funding secured</p>
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
                        <div className="p-6 bg-gray-50 rounded-xl">
                          <div className="text-3xl font-light text-[#14213D] mb-2">$50M+</div>
                          <div className="text-sm text-gray-600">Capital Raised</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                          {["Market Entry", "Series B", "Growth Strategy"].map((tag, idx) => (
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

        {/* Partnership & Values Section */}
        <section className="py-32 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-20 max-w-3xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#1A1A1A] mb-6">
                  Our Approach
                </h2>
                <div className="h-[1px] w-full bg-[#14213D] opacity-20"></div>
              </div>

              {/* Partnership Model */}
              <div className="grid md:grid-cols-3 gap-8 mb-24">
                {partnershipPrinciples.map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#14213D]"
                  >
                    <div className="bg-[#14213D] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                      {principle.icon}
                    </div>
                    <h3 className="text-2xl font-bold font-montserrat text-[#1A1A1A] mb-4">
                      {principle.title}
                    </h3>
                    <div className="h-[2px] w-12 bg-[#14213D] mb-6"></div>
                    <p className="text-gray-600 mb-8">
                      {principle.description}
                    </p>
                    <ul className="space-y-3">
                      {principle.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-600">
                          <ArrowRight className="w-4 h-4 text-[#14213D] flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Divider with Text */}
              <div className="flex items-center justify-center mb-24">
                <div className="h-[1px] flex-grow bg-gray-200"></div>
                <span className="px-8 text-gray-400 text-sm uppercase tracking-wider">Our Values</span>
                <div className="h-[1px] flex-grow bg-gray-200"></div>
              </div>

              {/* Core Values Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#14213D]"
                  >
                    <div className="flex flex-col items-start space-y-4">
                      <div className="bg-gray-50 p-4 rounded-xl group-hover:bg-[#14213D]/5 transition-colors">
                        <div className="group-hover:scale-110 transition-transform duration-500 text-[#14213D]">
                          {value.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold font-montserrat text-[#1A1A1A]">
                        {value.title}
                      </h3>
                      <div className="h-[2px] w-12 bg-[#14213D]"></div>
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