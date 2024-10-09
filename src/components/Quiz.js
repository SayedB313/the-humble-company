import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check, Rocket, Mail, Target, BarChart, Users, Settings, Building, PieChart, DollarSign } from "lucide-react";

const questions = [
  {
    id: 1,
    icon: <Target className="w-8 h-8 text-blue-500" />,
    text: "What's your primary goal for outbound strategy?",
    options: ["Generate Leads", "Book Meetings", "Increase Revenue", "Expand Market Reach"],
  },
  {
    id: 2,
    icon: <Mail className="w-8 h-8 text-blue-500" />,
    text: "How many cold emails does your team send weekly?",
    options: ["0-100", "101-500", "501-1000", "1000+"],
  },
  {
    id: 3,
    icon: <BarChart className="w-8 h-8 text-blue-500" />,
    text: "What's your current average open rate?",
    options: ["<10%", "10-20%", "21-30%", "31%+", "Not sure"],
  },
  {
    id: 4,
    icon: <Users className="w-8 h-8 text-blue-500" />,
    text: "How do you handle email personalization?",
    options: ["Manual", "Basic automation", "AI-powered", "We don't personalize"],
  },
  {
    id: 5,
    icon: <Settings className="w-8 h-8 text-blue-500" />,
    text: "What's your biggest outbound challenge?",
    options: ["Deliverability", "Response Rates", "Personalization", "Finding Prospects", "Compliance"],
  },
];

const Quiz = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (isOpen) {
      setStep(0);
      setAnswers({});
      setEmail('');
      setName('');
    }
  }, [isOpen]);

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (step < questions.length) {
      setStep(step + 1);
    }
  };

  const handleSubmit = () => {
    if (email && name) {
      console.log({ answers, email, name });
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
                answers[question.id] === option
                  ? 'bg-blue-100 border-blue-500 text-blue-700'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              } border-2 flex items-center justify-between`}
            >
              <span>{option}</span>
              {answers[question.id] === option && <Check className="w-5 h-5 text-blue-500" />}
            </motion.button>
          ))}
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
        <input
          type="email"
          placeholder="Your work email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 transition-colors"
        />
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
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold flex items-center justify-center"
                  >
                    {step === questions.length - 1 ? 'Finish' : 'Next'}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
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