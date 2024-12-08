'use client'

import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ChevronDown, 
  Target, 
  Network, 
  Shield, 
  RefreshCw, 
  FileText, 
  TrendingUp,
  Users,
  DollarSign,
  Laptop,
  Search,
  PenTool,
  List,
  Play
} from "lucide-react";
import Navigation from '../../../components/ui/Navigation';
import CalEmbed from '../../../components/CalEmbed';
import Footer from '../../../components/ui/Footer';

export default function GrowthAdvisory() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isCalOpen, setIsCalOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const standardCTA = "bg-[#14213D] hover:bg-[#1C2E56] text-white px-8 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors flex items-center gap-2";

  const services = [
    {
      icon: <Target className="w-10 h-10 text-white" />,
      title: "Market Strategy",
      description: "Comprehensive market expansion and positioning strategies",
      benefits: [
        "Market opportunity analysis",
        "Entry strategy development",
        "Geographic expansion planning",
        "Competitive positioning"
      ]
    },
    {
      icon: <Network className="w-10 h-10 text-white" />,
      title: "Business Transformation",
      description: "End-to-end business model optimization and digital transformation",
      benefits: [
        "Operating model design",
        "Digital strategy roadmap",
        "Process optimization",
        "Technology enablement"
      ]
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-white" />,
      title: "Strategic Planning",
      description: "Long-term growth roadmap and partnership development",
      benefits: [
        "Growth planning",
        "Partnership strategy",
        "Implementation roadmap",
        "Performance metrics"
      ]
    },
    {
      icon: <Shield className="w-10 h-10 text-white" />,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies",
      benefits: [
        "Geopolitical risk analysis",
        "Regulatory compliance",
        "Crisis management",
        "Business continuity"
      ]
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Organizational Design",
      description: "Strategic restructuring and talent optimization",
      benefits: [
        "Org structure design",
        "Change management",
        "Talent strategy",
        "Culture transformation"
      ]
    },
    {
      icon: <DollarSign className="w-10 h-10 text-white" />,
      title: "Capital Raising",
      description: "Strategic funding solutions and investor relationships",
      benefits: [
        "Funding strategy",
        "Investor matching",
        "Deal structuring",
        "Capital optimization"
      ]
    }
  ];

  const strategicDocs = [
    {
      title: "Risk Analysis",
      icon: <Shield className="w-8 h-8 text-[#14213D]" />,
      description: "Comprehensive geopolitical and operational risk assessment frameworks"
    },
    {
      title: "Transformation Plans",
      icon: <RefreshCw className="w-8 h-8 text-[#14213D]" />,
      description: "Detailed organizational restructuring and change management roadmaps"
    },
    {
      title: "Industry Reports",
      icon: <FileText className="w-8 h-8 text-[#14213D]" />,
      description: "In-depth sector analysis and market intelligence reports"
    },
    {
      title: "Digital Strategy",
      icon: <Laptop className="w-8 h-8 text-[#14213D]" />,
      description: "Technology transformation and digital enablement blueprints"
    },
    {
      title: "Growth Plans",
      icon: <TrendingUp className="w-8 h-8 text-[#14213D]" />,
      description: "Strategic growth and market expansion playbooks"
    },
    {
      title: "Capital Strategy",
      icon: <DollarSign className="w-8 h-8 text-[#14213D]" />,
      description: "Comprehensive funding and capital structure analysis"
    }
  ];

  const equityUses = [
    "Acquisitions",
    "Building new facilities",
    "New product development",
    "Financing short-term gaps",
    "Minority recapitalizations"
  ];

  const heroHighlights = [
    { 
      title: "Market Strategy", 
      description: "Expansion & positioning"
    },
    { 
      title: "Digital Transform", 
      description: "Technology enablement"
    },
    { 
      title: "Risk Management", 
      description: "Geopolitical analysis"
    },
    { 
      title: "Restructuring", 
      description: "Organizational design"
    }
  ];

  const approachSteps = [
    {
      title: "Diagnostic Assessment",
      description: "Comprehensive analysis of current state, market position, and opportunities",
      icon: <Search className="w-8 h-8 text-[#14213D]" />
    },
    {
      title: "Strategy Development",
      description: "Tailored solutions and roadmap creation aligned with business objectives",
      icon: <PenTool className="w-8 h-8 text-[#14213D]" />
    },
    {
      title: "Implementation Planning",
      description: "Detailed execution framework with clear milestones and deliverables",
      icon: <List className="w-8 h-8 text-[#14213D]" />
    },
    {
      title: "Execution Support",
      description: "Hands-on guidance and expertise throughout implementation",
      icon: <Play className="w-8 h-8 text-[#14213D]" />
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
          <Navigation currentPath="/services/growth-advisory" />
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
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source 
                src="xhttps://res.cloudinary.com/dluf6sg5d/video/upload/v1/Snowy_Mountain_Drone_Footage_4K_swe7iv" 
                type="video/mp4" 
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-8 relative z-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-[2px] w-12 bg-white"></div>
                    <span className="text-white uppercase tracking-wider text-sm font-semibold">
                      Business Transformation
                    </span>
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light font-montserrat tracking-wider text-white">
                    Strategic
                    <span className="block mt-2 text-violet-300">Advisory</span>
                  </h1>
                </div>
                
                <p className="text-base sm:text-lg md:text-xl font-medium text-gray-300 max-w-xl leading-relaxed">
                  Driving business transformation through comprehensive strategy development and execution
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
                    className="flex items-center space-x-4 text-white hover:text-violet-300 transition-colors cursor-pointer w-full sm:w-auto pl-4 sm:pl-0 justify-start sm:justify-center"
                    onClick={() => {
                      const servicesSection = document.querySelector('#services');
                      servicesSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                      <ChevronDown className="w-6 h-6" />
                    </div>
                    <span className="text-sm uppercase tracking-wider font-bold">Our Services</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column - Stats Grid */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden md:grid grid-cols-2 gap-6"
              >
                {heroHighlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors border border-[#14213D]/20"
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

          {/* Update scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
            onClick={() => {
              const servicesSection = document.querySelector('#services');
              servicesSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-[#14213D] hover:text-rose-400 transition-colors"
            >
              <ChevronDown className="w-12 h-12" />
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-20 max-w-3xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#1A1A1A] mb-6">
                  Strategic Management
                </h2>
                <div className="h-[1px] w-full bg-[#14213D] opacity-20"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="group bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#14213D]"
                  >
                    <div className="bg-[#14213D] w-16 h-16 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold font-montserrat text-[#1A1A1A] mb-4">
                      {service.title}
                    </h3>
                    <div className="h-[2px] w-12 bg-[#14213D] mb-6 group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-gray-600 mb-8 text-lg">
                      {service.description}
                    </p>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, i) => (
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

        {/* Our Approach Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-20 max-w-3xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#1A1A1A] mb-6">
                  Our Approach
                </h2>
                <div className="h-[1px] w-full bg-[#14213D] opacity-20"></div>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {approachSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#14213D]"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="bg-gray-50 p-4 rounded-full group-hover:scale-110 transition-transform duration-500">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold font-montserrat text-[#1A1A1A]">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Documentation Section */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-20 max-w-3xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#1A1A1A] mb-6">
                  Strategic Documentation
                </h2>
                <div className="h-[1px] w-full bg-[#14213D] opacity-20"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {strategicDocs.map((doc, index) => (
                  <motion.div
                    key={doc.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#14213D]"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="group-hover:scale-110 transition-transform duration-500">
                        {doc.icon}
                      </div>
                      <h3 className="text-xl font-bold font-montserrat text-[#1A1A1A]">
                        {doc.title}
                      </h3>
                      <p className="text-gray-600">
                        {doc.description}
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
                  Transform Your Business
                </h2>
                <p className="text-xl text-gray-300">
                  Our Strategic Advisory services help organizations navigate complex business challenges and capture new opportunities through comprehensive strategy development and execution.
                </p>
                <button 
                  className={`${standardCTA} mx-auto`}
                  onClick={() => setIsCalOpen(true)}
                >
                  Schedule a Meeting
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <CalEmbed 
        isOpen={isCalOpen}
        onClose={() => setIsCalOpen(false)}
      />
    </div>
  );
} 