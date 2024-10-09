import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check, Rocket, Mail, Target, BarChart, Users, Settings, Building, PieChart, DollarSign, Clock, Zap, Shield, Globe, Lightbulb } from "lucide-react";

const questions = [
  {
    id: 1,
    icon: <Target className="w-8 h-8 text-blue-500" />,
    text: "What's your primary goal for outbound strategy?",
    options: ["Generate More Leads", "Book More Sales Meetings", "Increase Revenue", "Expand to New Markets", "Improve Brand Awareness"],
    tip: "Your primary goal shapes our recommendations. We'll tailor strategies to align with your specific objectives, whether it's lead generation, sales meetings, or market expansion."
  },
  {
    id: 2,
    icon: <Mail className="w-8 h-8 text-blue-500" />,
    text: "How many cold emails does your team send weekly?",
    options: ["0-100", "101-500", "501-1000", "1001-5000", "5000+"],
    tip: "Your email volume helps us determine the right balance between personalization and scale. We'll provide strategies to optimize your outreach based on your current capacity."
  },
  {
    id: 3,
    icon: <BarChart className="w-8 h-8 text-blue-500" />,
    text: "What's your current average open rate?",
    options: ["<10%", "10-20%", "21-30%", "31-40%", "41%+", "Not sure"],
    tip: "Your open rate indicates the effectiveness of your subject lines and sender reputation. We'll offer tailored advice to improve these crucial elements of your outbound strategy."
  },
  {
    id: 4,
    icon: <Users className="w-8 h-8 text-blue-500" />,
    text: "What's your current average response rate?",
    options: ["<2%", "2-5%", "6-10%", "11-15%", "16%+", "Not sure"],
    tip: "Your response rate reflects the overall effectiveness of your outbound campaigns. We'll provide strategies to enhance your email content and call-to-actions based on your current performance."
  },
  {
    id: 5,
    icon: <Settings className="w-8 h-8 text-blue-500" />,
    text: "How do you handle email personalization?",
    options: ["Manual personalization", "Basic automation (e.g., mail merge)", "AI-powered personalization", "We don't personalize", "Combination of methods"],
    tip: "Personalization is key to successful outbound campaigns. We'll recommend personalization strategies and tools that fit your current approach and help you scale effectively."
  },
  {
    id: 6,
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    text: "Which email authentication methods do you use? (Select all that apply)",
    options: ["SPF", "DKIM", "DMARC", "None", "Not sure"],
    multiple: true,
    tip: "Email authentication is crucial for deliverability. We'll guide you on implementing or improving your authentication methods to ensure your emails reach the inbox."
  },
  {
    id: 7,
    icon: <Clock className="w-8 h-8 text-blue-500" />,
    text: "How long have you been doing outbound email campaigns?",
    options: ["Just starting", "1-6 months", "6-12 months", "1-2 years", "2+ years"],
    tip: "Your experience level helps us tailor our advice. We'll provide strategies suitable for your current expertise, whether you're just starting or looking to refine an established process."
  },
  {
    id: 8,
    icon: <Zap className="w-8 h-8 text-blue-500" />,
    text: "What tools are you currently using for outbound? (Select all that apply)",
    options: ["CRM", "Email Automation Platform", "LinkedIn Automation", "Data Enrichment Tools", "Email Warmup Tools", "None"],
    multiple: true,
    tip: "Your tech stack influences your outbound capabilities. We'll suggest optimizations for your current tools and recommend additional ones to enhance your outreach efforts."
  },
  {
    id: 9,
    icon: <PieChart className="w-8 h-8 text-blue-500" />,
    text: "What's your biggest outbound challenge right now?",
    options: ["Low Deliverability", "Poor Response Rates", "Lack of Personalization", "Finding Quality Prospects", "Scaling Outreach", "Compliance and Legal Issues"],
    tip: "Understanding your main challenge allows us to focus our recommendations on solving your most pressing issues, providing targeted strategies for improvement."
  },
  {
    id: 10,
    icon: <Users className="w-8 h-8 text-blue-500" />,
    text: "How large is your outbound team?",
    options: ["Just me", "2-5 people", "6-10 people", "11-20 people", "20+ people"],
    tip: "Your team size helps us recommend appropriate strategies and tools. We'll provide advice on how to optimize your processes based on your current team structure."
  },
  {
    id: 11,
    icon: <DollarSign className="w-8 h-8 text-blue-500" />,
    text: "What's your monthly budget for outbound tools and resources?",
    options: ["$0-$500", "$501-$1,000", "$1,001-$5,000", "$5,001-$10,000", "$10,000+"],
    tip: "Your budget informs our tool and strategy recommendations. We'll suggest the most cost-effective solutions that can deliver the best ROI for your outbound efforts."
  },
  {
    id: 12,
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    text: "What industry is your company in?",
    options: ["SaaS/Technology", "E-commerce", "Professional Services", "Finance/Insurance", "Healthcare", "Other"],
    tip: "Your industry context is crucial for tailoring our advice. We'll provide industry-specific strategies and best practices to help you stand out in your market."
  },
];

const Quiz = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [emailError, setEmailError] = useState('');
  const [websiteError, setWebsiteError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setStep(0);
      setAnswers({});
      setEmail('');
      setName('');
      setCompany('');
    }
  }, [isOpen]);

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => {
      if (questions[step].multiple) {
        const currentAnswers = prev[questionId] || [];
        if (currentAnswers.includes(answer)) {
          return { ...prev, [questionId]: currentAnswers.filter(a => a !== answer) };
        } else {
          return { ...prev, [questionId]: [...currentAnswers, answer] };
        }
      } else {
        return { ...prev, [questionId]: [answer] };
      }
    });
  };

  const handleNext = () => {
    if (step < questions.length) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateWebsite = (website) => {
    const re = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
    return re.test(String(website).toLowerCase());
  };

  const handleSubmit = () => {
    let isValid = true;
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!validateWebsite(company)) {
      setWebsiteError('Please enter a valid website URL');
      isValid = false;
    } else {
      setWebsiteError('');
    }

    if (isValid && name && email && company) {
      console.log({ answers, email, name, company });
      // Here you would typically send this data to your backend or analytics service
      onClose();
    }
  };

  const renderQuestion = () => {
    const question = questions[step];
    return (
      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        <div className="flex items-center space-x-4">
          {question.icon}
          <h3 className="text-2xl font-bold text-gray-800">{question.text}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnswer(question.id, option)}
              className={`p-4 rounded-lg transition-all duration-200 ${
                question.multiple
                  ? answers[question.id]?.includes(option)
                    ? 'bg-blue-100 border-blue-500 text-blue-700'
                    : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                  : answers[question.id]?.[0] === option
                  ? 'bg-blue-100 border-blue-500 text-blue-700'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              } border-2 flex items-center justify-between`}
            >
              <span>{option}</span>
              {(question.multiple ? answers[question.id]?.includes(option) : answers[question.id]?.[0] === option) && 
                <Check className="w-5 h-5 text-blue-500" />
              }
            </motion.button>
          ))}
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg flex items-start">
          <Lightbulb className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
          <p className="text-sm text-blue-800">{question.tip}</p>
        </div>
      </motion.div>
    );
  };

  const renderCompletion = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="text-center"
    >
      <Rocket className="w-20 h-20 text-blue-500 mx-auto mb-6" />
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Your Outbound Audit is Ready!</h2>
      <p className="mb-8 text-gray-600">Enter your details to receive your personalized outbound strategy report.</p>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 transition-colors"
        />
        <div>
          <input
            type="email"
            placeholder="Your work email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) setEmailError('');
            }}
            className={`w-full p-3 border-2 ${emailError ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:border-blue-500 transition-colors`}
          />
          {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Your company website"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
              if (websiteError) setWebsiteError('');
            }}
            className={`w-full p-3 border-2 ${websiteError ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:border-blue-500 transition-colors`}
          />
          {websiteError && <p className="text-red-500 text-sm mt-1">{websiteError}</p>}
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
        >
          Get My Free Audit
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white flex justify-between items-center">
              <h2 className="text-2xl font-bold">Outbound Strategy Audit</h2>
              <motion.button
                whileHover={{ rotate: 90 }}
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>
            <div className="p-6">
              {step < questions.length ? (
                <>
                  <div className="mb-8">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                        className="h-full bg-blue-600"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Question {step + 1} of {questions.length}</p>
                  </div>
                  {renderQuestion()}
                  <div className="flex justify-between mt-8">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleBack}
                      disabled={step === 0}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg disabled:opacity-50"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleNext}
                      disabled={!answers[questions[step].id]}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
                    >
                      {step === questions.length - 1 ? 'Finish' : 'Next'}
                    </motion.button>
                  </div>
                </>
              ) : (
                renderCompletion()
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Quiz;