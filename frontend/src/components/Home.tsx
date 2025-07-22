import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Code, GraduationCap, Calendar, LogIn, PlayCircle, BookOpen, Clock, Target } from "lucide-react";
import BackgroundWrapper from "../UI/bg";

const Home: React.FC = () => {
  // Rotating subheadlines
  const subheadlines = [
    "Join study groups, find mentors, and stay accountable — all in one place.",
    "No more learning alone. Connect. Collaborate. Conquer.",
    "Your journey from learning to building starts here.",
    "Where students become builders and thinkers become doers."
  ];
  const [currentSubheadline, setCurrentSubheadline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubheadline((prev) => (prev + 1) % subheadlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    // <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center px-4 overflow-hidden">
    //   <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    //     {/* Text Content */}
     <BackgroundWrapper>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Your All-in-One Platform for Peer Learning
            </span>
          </motion.h1>

          {/* Subheadline */}
          <div className="h-20 md:h-16 mb-8 flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSubheadline}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className="text-lg md:text-xl text-gray-300"
              >
                {subheadlines[currentSubheadline]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Primary CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-10 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="#join-student"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/30"
            >
              <Users className="h-5 w-5" />
              Join as Student
            </motion.a>
            <motion.a
              href="#join-mentor"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              <GraduationCap className="h-5 w-5" />
              Join as Mentor
            </motion.a>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            className="flex items-center justify-center md:justify-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#login"
              whileHover={{ x: 3 }}
              className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              <LogIn className="h-4 w-4" />
              Existing user? Login
            </motion.a>
            <span className="text-gray-500">|</span>
            <motion.a
              href="#demo"
              whileHover={{ x: 3 }}
              className="text-gray-300 hover:text-white flex items-center gap-1"
            >
              <PlayCircle className="h-4 w-4" />
              Watch Demo
            </motion.a>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center md:justify-start gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: <Users className="h-4 w-4" />, text: "Peer Circles" },
              { icon: <Code className="h-4 w-4" />, text: "Hackathon Teams" },
              { icon: <GraduationCap className="h-4 w-4" />, text: "Mentor Wall" },
              { icon: <Calendar className="h-4 w-4" />, text: "Daily Tracker" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-800 px-4 py-2 rounded-full text-sm border border-gray-700"
              >
                {item.icon}
                {item.text}
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Signal */}
          <motion.div
            className="mt-8 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Join 1,000+ students and mentors already collaborating on LearnLoop
          </motion.div>
        </div>

        {/* Glass Morphism Dashboard */}
        <motion.div 
          className="relative bg-gray-900/20 backdrop-blur-xl border border-gray-700/30 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 p-6 rounded-xl h-full">
            {/* Profile Section */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-500/30 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-blue-400" />
              </div>
              <div className="space-y-1">
                <div className="h-3 w-36 bg-gray-700/50 rounded-full backdrop-blur-sm"></div>
                <div className="h-2 w-28 bg-gray-800/50 rounded-full backdrop-blur-sm"></div>
              </div>
            </div>
            
            {/* Animated Progress Bars */}
            <motion.div 
              className="space-y-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2 }}
            >
              {[
                { label: "Learning Path", icon: <BookOpen className="h-4 w-4" />, value: 78 },
                { label: "Project Work", icon: <Code className="h-4 w-4" />, value: 65 },
                { label: "Peer Network", icon: <Users className="h-4 w-4" />, value: 92 }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    {item.icon}
                    <span>{item.label}</span>
                    <span className="ml-auto">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Quick Stats */}
            <motion.div 
              className="mt-8 grid grid-cols-3 gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { value: "3", label: "Circles", icon: <Users size={16} /> },
                { value: "24", label: "Hours", icon: <Clock size={16} /> },
                { value: "7", label: "Goals", icon: <Target size={16} /> }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className="bg-gray-800/30 backdrop-blur-sm p-2 rounded-lg border border-gray-700/30 text-center"
                >
                  <div className="text-blue-400 mb-1">{item.icon}</div>
                  <div className="text-xl font-medium">{item.value}</div>
                  <div className="text-xs text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500/10 rounded-full backdrop-blur-sm border border-blue-500/20 flex items-center justify-center"
            animate={{
              y: [0, -8, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <BookOpen className="h-4 w-4 text-blue-400" />
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-5 -right-5 w-14 h-14 bg-teal-500/10 rounded-full backdrop-blur-sm border border-teal-500/20 flex items-center justify-center"
            animate={{
              y: [0, 8, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <GraduationCap className="h-5 w-5 text-teal-400" />
          </motion.div>
        </motion.div>
      </div>
   
      </BackgroundWrapper>

    //   {/* Background elements */}
    //   <div className="absolute inset-0 overflow-hidden pointer-events-none">
    //     <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
    //     <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
    //   </div>
    // </section>
  );
};

export default Home;