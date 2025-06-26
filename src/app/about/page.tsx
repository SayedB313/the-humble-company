'use client'

import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ArrowRight, ChevronDown, Building, Target, Network, Users, DollarSign, TrendingUp, ArrowUpRight, Globe, Shield, Rocket, Award, FileText, Download, X, Cpu } from "lucide-react";
import Navigation from '../../components/ui/Navigation';
import CalButton from '../../components/ui/CalButton';
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
      title: "Managing Partner",
      shortDescription: "Growth Architect",
      fullBio: "Sayed brings extensive expertise in strategic growth advisory and capital formation. His approach combines sophisticated market intelligence with tactical execution to drive transformative outcomes. Specializes in architecting bespoke solutions for complex business challenges.",
      expertise: [
        "Strategic Growth Advisory",
        "Business Transformation"
      ],
      education: "Business Administration & Management",
      linkedin: "https://www.linkedin.com/in/sayedbw/"
    },
    {
      image: "/ben-humble.jpg",
      name: "Ben Humble",
      title: "Managing Partner",
      shortDescription: "Strategic Partnerships",
      fullBio: "Ben is a seasoned leader in strategic partnerships and business development, known for building high-impact relationships and driving collaborative growth. He brings a wealth of experience in connecting organizations and decision makers to unlock new opportunities.",
      expertise: [
        "Strategic Partnerships",
        "Business Development"
      ],
      education: "",
      linkedin: "https://www.linkedin.com/in/ben-humble-b97035170/"
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
              The Humble Company
            </span>
          </Link>
          <Navigation currentPath="/about" />
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          {/* Background Video (from Capital Formation) */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster="https://res.cloudinary.com/dluf6sg5d/video/upload/so_0/v1/Aerial_Snow-Covered_Mountain_Video_md3o9w"
            >
              <source 
                src="https://res.cloudinary.com/dluf6sg5d/video/upload/q_auto,f_auto,c_scale,w_1920,vc_auto,br_2m/v1/Aerial_Snow-Covered_Mountain_Video_md3o9w"
                type="video/mp4"
              />
              <source 
                src="https://res.cloudinary.com/dluf6sg5d/video/upload/q_auto,f_webm,c_scale,w_1920,vc_auto,br_2m/v1/Aerial_Snow-Covered_Mountain_Video_md3o9w"
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
                  <span className="block text-base sm:text-lg md:text-xl opacity-80 font-semibold text-white">
                    Empowering GR firms to win clients and drive results.
                  </span>
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-center space-x-4 text-white hover:text-[#14213D] transition-colors cursor-pointer w-full sm:w-auto pl-4 sm:pl-0 justify-start sm:justify-center"
                    onClick={() => {
                      const leadershipSection = document.querySelector('#leadership-team');
                      leadershipSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                      <ChevronDown className="w-6 h-6" />
                    </div>
                    <span className="text-sm uppercase tracking-wider font-bold">Leadership Team</span>
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
                    title: "Connectors", 
                    description: "Direct access to key decision-makers." 
                  },
                  { 
                    title: "Strategic Vision", 
                    description: "Stand out and secure mandates." 
                  },
                  { 
                    title: "Expertise", 
                    description: "Advocacy and public affairs specialists." 
                  },
                  { 
                    title: "Integrity", 
                    description: "Trusted by leading GR agencies." 
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

        {/* Leadership & Advisory Section */}
        <section className="py-32 bg-white border-t border-gray-100 scroll-mt-86" id="leadership-team">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto flex flex-col items-center">
              {/* Leadership Team */}
              <div className="mb-20 w-full flex flex-col items-center">
                <div className="mb-16 max-w-3xl w-full flex flex-col items-center">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#1A1A1A] mb-6 text-center">
                    Leadership Team
                  </h2>
                  <div className="h-[1px] w-full max-w-xl bg-[#14213D] opacity-20 mx-auto"></div>
                </div>

                <div className="flex flex-col md:flex-row md:justify-center md:items-stretch md:space-x-8 space-y-8 md:space-y-0 w-full">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex-1 bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#14213D] cursor-pointer flex flex-col items-center h-full"
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
                        {member.name === 'Sayed B Wayzi' ? 'Growth Architect' : member.shortDescription}
                      </p>
                      <div className="flex items-center justify-center text-[#14213D] hover:text-[#1C2E56] transition-colors group">
                        <span className="font-medium text-sm">View Profile</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Case Studies Section */}
              <section className="mt-24 text-center max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#14213D] mb-4">Discover Our Impact</h3>
                <p className="text-gray-700 text-base md:text-lg mb-8">
                  Due to the confidential nature of our work and the trust our clients place in us, we do not publicly share detailed case studies. If you'd like to learn more about our results and approach, please schedule a confidential call or get in touch. We're happy to share relevant examples and insights tailored to your interests.
                </p>
              </section>

              {/* Advisors Section */}
              {false && (
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
              )}
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
      </main>

      {/* CTA SECTION (copied from home page) */}
      <section className="relative py-32 w-[100vw] -ml-[50vw] left-[50%] bg-[#14213D]">
        <div className="absolute inset-0">
          <Image
            src="/River Near Mountains.jpg"
            alt="Mountains"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        </div>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-white">
                Ready to Grow Your GR Firm?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                Discover exclusive opportunities and proven strategies for high-value client acquisition.
              </p>
              <CalButton className="bg-[#14213D] hover:bg-[#1C2E56] text-white px-10 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors inline-flex items-center gap-2 group">
                <span>Schedule a Confidential Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </CalButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-[#1A1A1A] py-16 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Column 1 - Brand */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light font-montserrat tracking-wider">The Humble Company</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Empowering government relations firms with bespoke growth solutions and unmatched deal flow.
              </p>
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
                href="https://www.linkedin.com/company/the-humble-company/posts/?feedView=all" 
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
              © {new Date().getFullYear()} The Humble Company. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

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