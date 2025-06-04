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
  Play,
  Building
} from "lucide-react";
import Navigation from '../../../components/ui/Navigation';
import Footer from '../../../components/ui/Footer';

const StrategicAdvisoryComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isCalOpen, setIsCalOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const standardCTA = "bg-[#14213D] hover:bg-[#1C2E56] text-white px-8 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors flex items-center gap-2";

  const services = [
    {
      icon: <Target className="w-10 h-10 text-white" />,
      title: "Market Defense Strategy",
      description: "Protect and expand market share against aggressive competitors",
      benefits: [
        "Prevent revenue erosion from competitor advances",
        "Identify and neutralize competitive threats",
        "Secure dominant market positioning",
        "Outmaneuver emerging market disruptors"
      ]
    },
    {
      icon: <Shield className="w-10 h-10 text-white" />,
      title: "Risk & Compliance Shield",
      description: "Protect your business from devastating regulatory and legal risks",
      benefits: [
        "Prevent costly compliance violations",
        "Protect board and shareholder confidence",
        "Avoid reputation-damaging incidents",
        "Secure against operational vulnerabilities"
      ]
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-white" />,
      title: "Growth Acceleration",
      description: "Deliver exceptional returns that silence skeptical investors",
      benefits: [
        "Exceed growth expectations",
        "Strengthen investor confidence",
        "Accelerate market capture",
        "Maximize valuation metrics"
      ]
    },
    {
      icon: <Network className="w-10 h-10 text-white" />,
      title: "Digital Dominance",
      description: "Don't let digital disruptors steal your market position",
      benefits: [
        "Prevent digital disruption threats",
        "Modernize before competitors",
        "Protect against tech obsolescence",
        "Secure digital market leadership"
      ]
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Talent & Culture Shield",
      description: "Prevent talent exodus and protect your operational backbone",
      benefits: [
        "Retain crucial executive talent",
        "Prevent competitive poaching",
        "Maintain operational stability",
        "Protect institutional knowledge"
      ]
    },
    {
      icon: <DollarSign className="w-10 h-10 text-white" />,
      title: "Capital Protection",
      description: "Secure your financial position and investor confidence",
      benefits: [
        "Protect against funding disruptions",
        "Maintain strong investor relations",
        "Prevent valuation erosion",
        "Secure strategic capital access"
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
      description: "Navigate complex market dynamics"
    },
    { 
      title: "Digital Evolution", 
      description: "Future-proof your operations"
    },
    { 
      title: "Risk Management", 
      description: "Protect strategic interests"
    },
    { 
      title: "Business Architecture", 
      description: "Optimize organizational structure"
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
                      Strategic Excellence
                    </span>
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light font-montserrat tracking-wider text-white">
                    Strategic
                    <span className="block mt-2 text-violet-300">Advisory</span>
                  </h1>
                </div>
                
                <p className="text-base sm:text-lg md:text-xl font-medium text-gray-300 max-w-xl leading-relaxed">
                  Securing your market position through precise strategy and elite expertise
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
                      const servicesSection = document.querySelector('#comprehensive-services');
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
              const servicesSection = document.querySelector('#comprehensive-services');
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
              className="text-white hover:text-violet-300 transition-colors"
            >
              <ChevronDown className="w-12 h-12" />
            </motion.div>
          </motion.div>
        </section>

        {/* Comprehensive Services Section */}
        <section id="comprehensive-services" className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#1A1A1A] mb-4">
                    Advisory Network
                  </h2>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-[1px] w-8 bg-[#14213D]"></div>
                    <span className="text-[#14213D] uppercase tracking-widest text-sm font-medium">Elite Expertise</span>
                    <div className="h-[1px] w-8 bg-[#14213D]"></div>
                  </div>
                  <p className="text-gray-600 text-lg max-w-3xl">
                    Access world-class industry veterans who've navigated complex market challenges at the highest levels.
                  </p>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg border border-gray-100 hover:border-[#14213D] transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-[#14213D] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {React.cloneElement(service.icon, { 
                          className: "w-6 h-6 text-white" 
                        })}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-[#1A1A1A]">{service.title}</h3>
                        <p className="text-gray-500 text-sm mt-1">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {service.benefits?.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#14213D] group-hover:scale-150 transition-transform"></div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Process Steps - More Compact Design */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    step: "01",
                    title: "Understand",
                    description: "Deep analysis of your business challenges and objectives",
                    icon: <Search className="w-6 h-6" />
                  },
                  {
                    step: "02",
                    title: "Connect",
                    description: "Match your needs with precise strategic solutions",
                    icon: <Network className="w-6 h-6" />
                  },
                  {
                    step: "03",
                    title: "Transform",
                    description: "Guide implementation and drive measurable results",
                    icon: <RefreshCw className="w-6 h-6" />
                  }
                ].map((process, index) => (
                  <motion.div
                    key={process.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group"
                  >
                    <div className="bg-white rounded-xl border border-[#14213D]/10 hover:border-[#14213D]/30 transition-all duration-300 h-full p-6">
                      <div className="flex items-center gap-4 mb-4">
                        {/* Icon Container */}
                        <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                          {React.cloneElement(process.icon, { 
                            className: "text-[#14213D]" 
                          })}
                        </div>
                        {/* Step Number */}
                        <div className="text-violet-400 text-sm font-medium">
                          {process.step}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-[#1A1A1A]">
                          {process.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {process.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Approach Section */}
        <section id="strategic-approach" className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#14213D]">
                  Immediate Action Plan
                </h2>
                <div className="h-[1px] w-24 bg-[#14213D] mx-auto mt-6 mb-8"></div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Preemptive measures to fortify your position before competitors make their move.
                </p>
              </motion.div>

              {/* Strategic Elements */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="space-y-12"
                >
                  <div>
                    <h3 className="text-2xl font-light text-[#14213D] mb-4">Imminent Threats</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Time-sensitive challenges requiring immediate executive attention to prevent catastrophic outcomes.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Revenue Collapse",
                        description: "Emerging players capturing core revenue streams within 90 days"
                      },
                      {
                        title: "Investor Exodus",
                        description: "Key stakeholders preparing exit strategies due to missed projections"
                      },
                      {
                        title: "Compliance Penalties",
                        description: "Impending regulatory changes threatening seven-figure fines"
                      },
                      {
                        title: "Innovation Gap",
                        description: "Market leaders launching superior solutions next quarter"
                      }
                    ].map((challenge, index) => (
                      <motion.div
                        key={challenge.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-1 h-1 bg-[#14213D] rounded-full mt-3 group-hover:scale-150 transition-transform"></div>
                        <div>
                          <h4 className="text-[#14213D] font-medium mb-1">{challenge.title}</h4>
                          <p className="text-gray-600 text-sm">{challenge.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="space-y-12"
                >
                  <div>
                    <h3 className="text-2xl font-light text-[#14213D] mb-4">Rapid Response</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Swift, decisive actions that neutralize threats and seize control of your market narrative.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        title: "First-Strike Advantage",
                        description: "Outmaneuver competitors before they fully mobilize"
                      },
                      {
                        title: "Stakeholder Alignment",
                        description: "Rally board support behind your executive vision"
                      },
                      {
                        title: "Compliance Fortress",
                        description: "Build ironclad safeguards against regulatory action"
                      },
                      {
                        title: "Innovation Acceleration",
                        description: "Fast-track development of market-leading capabilities"
                      }
                    ].map((solution, index) => (
                      <motion.div
                        key={solution.title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-1 h-1 bg-violet-400 rounded-full mt-3 group-hover:scale-150 transition-transform"></div>
                        <div>
                          <h4 className="text-[#14213D] font-medium mb-1">{solution.title}</h4>
                          <p className="text-gray-600 text-sm">{solution.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
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
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-white">
                  Transform Your
                  <br />
                  <span className="text-violet-300">Business Today</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                  Let's explore how our strategic advisory services can help you navigate complex challenges and capture new opportunities.
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

        <Footer />
      </main>
    </div>
  );
};

export default function Page() {
  return <StrategicAdvisoryComponent />;
} 