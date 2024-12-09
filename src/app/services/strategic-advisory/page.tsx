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
import CalEmbed from '../../../components/CalEmbed';
import Footer from '../../../components/ui/Footer';

const StrategicAdvisoryComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isCalOpen, setIsCalOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const standardCTA = "bg-[#14213D] hover:bg-[#1C2E56] text-white px-8 py-4 rounded-lg font-montserrat tracking-wider text-lg transition-colors flex items-center gap-2";

  const services = [
    {
      icon: <Target className="w-10 h-10 text-white" />,
      title: "Market Strategy",
      description: "Data-driven market expansion and positioning strategies",
      benefits: [
        "Market opportunity analysis",
        "Entry strategy development",
        "Geographic expansion planning",
        "Competitive positioning"
      ],
      capabilities: [
        "Market analysis",
        "Industry Expertise",
        "Competitive positioning"
      ],
      color: "amber"
    },
    {
      icon: <Network className="w-10 h-10 text-white" />,
      title: "Business Transformation",
      description: "End-to-end transformation of operations and technology to drive sustainable growth",
      benefits: [
        "Digital enablement",
        "Process optimization",
        "Change management"
      ],
      capabilities: [
        "Digital enablement",
        "Process optimization",
        "Change management"
      ],
      color: "violet"
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
      icon: <DollarSign className="w-8 h-8" />,
      title: "Capital Raising",
      description: "Strategic capital solutions and funding opportunities for growth",
      capabilities: [
        "Growth financing",
        "Strategic investors",
        "Transaction advisory"
      ],
      color: "emerald"
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

        {/* Strategic Approach Section */}
        <section id="strategic-approach" className="py-32 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto text-center mb-24"
              >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#14213D]">
                  Strategic Advisory
                </h2>
                <div className="h-[1px] w-24 bg-[#14213D] mx-auto mt-6 mb-8"></div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We bridge the gap between business challenges and strategic solutions, connecting your needs with precise expertise.
                </p>
              </motion.div>

              {/* Strategic Elements */}
              <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="space-y-12"
                >
                  <div>
                    <h3 className="text-2xl font-light text-[#14213D] mb-4">Your Challenges</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Every business faces unique challenges requiring specific expertise and strategic guidance. We understand these complexities and transform them into opportunities.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Market Positioning",
                        description: "Finding your competitive edge"
                      },
                      {
                        title: "Growth Barriers",
                        description: "Overcoming expansion challenges"
                      },
                      {
                        title: "Operational Efficiency",
                        description: "Optimizing business processes"
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
                    <h3 className="text-2xl font-light text-[#14213D] mb-4">Our Solutions</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Through our extensive network and expertise, we craft tailored solutions that align perfectly with your strategic objectives.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Strategic Planning",
                        description: "Data-driven market strategies"
                      },
                      {
                        title: "Network Access",
                        description: "Industry expertise connection"
                      },
                      {
                        title: "Implementation Support",
                        description: "Hands-on execution guidance"
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

              {/* Process Flow */}
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
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
                      transition={{ delay: index * 0.2 }}
                      className="relative group"
                    >
                      <div className="bg-white p-8 rounded-xl border border-gray-100 hover:border-violet-200 transition-colors duration-300">
                        <div className="text-sm text-violet-400 mb-4">{process.step}</div>
                        <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-violet-50 transition-colors">
                          {React.cloneElement(process.icon, { className: "text-[#14213D] group-hover:text-violet-400 transition-colors" })}
                        </div>
                        <h3 className="text-xl font-medium text-[#14213D] mb-3">{process.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {process.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Services Section */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-24"
              >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light font-montserrat tracking-wider text-[#14213D]">
                  Comprehensive Services
                </h2>
                <div className="h-[1px] w-24 bg-[#14213D] mx-auto mt-6 mb-8"></div>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Strategic solutions tailored to your specific needs, delivered through our expert network
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <TrendingUp className="w-8 h-8" />,
                    title: "Business Transformation",
                    description: "End-to-end transformation of operations and technology to drive sustainable growth",
                    capabilities: [
                      "Digital enablement",
                      "Process optimization",
                      "Change management"
                    ],
                    color: "violet"
                  },
                  {
                    icon: <DollarSign className="w-8 h-8" />,
                    title: "Capital Raising",
                    description: "Strategic capital solutions and funding opportunities for growth",
                    capabilities: [
                      "Growth financing",
                      "Strategic investors",
                      "Transaction advisory"
                    ],
                    color: "emerald"
                  },
                  {
                    icon: <Network className="w-8 h-8" />,
                    title: "Strategic Partnerships",
                    description: "Connecting you with key industry players and opportunities",
                    capabilities: [
                      "Network access",
                      "Alliance building",
                      "Joint ventures"
                    ],
                    color: "emerald"
                  },
                  {
                    icon: <Target className="w-8 h-8" />,
                    title: "Market Strategy",
                    description: "Data-driven market expansion and positioning strategies",
                    capabilities: [
                      "Market analysis",
                      "Industry Expertise",
                      "Competitive positioning"
                    ],
                    color: "amber"
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: "Organizational Design",
                    description: "Optimizing structure and talent for maximum performance",
                    capabilities: [
                      "Talent strategy",
                      "Structure optimization",
                      "Firm Restructuring"
                    ],
                    color: "rose"
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Risk Management",
                    description: "Comprehensive risk assessment and mitigation strategies",
                    capabilities: [
                      "Geopolitical Risk Strategy",
                      "Compliance strategy",
                      "Crisis management"
                    ],
                    color: "indigo"
                  }
                ].map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    {/* Decorative Background Element */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-${service.color}-50 rounded-bl-full rounded-tr-2xl opacity-20 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:opacity-30`}></div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 rounded-xl bg-${service.color}-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                          {React.cloneElement(service.icon, { className: `text-${service.color}-500` })}
                        </div>
                        <h3 className="text-2xl font-bold font-montserrat text-[#1A1A1A] mb-4">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-3">
                        {service.capabilities.map((capability, idx) => (
                          <div 
                            key={idx}
                            className="text-sm text-gray-600"
                          >
                            {capability}
                          </div>
                        ))}
                      </div>
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

      <CalEmbed 
        isOpen={isCalOpen}
        onClose={() => setIsCalOpen(false)}
      />
    </div>
  );
};

export default function Page() {
  return <StrategicAdvisoryComponent />;
} 