import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Laptop, Cpu, GitPullRequest, BookOpen, ChevronDown, Check, Rocket } from "lucide-react";

const Roadmap: React.FC = () => {
  const goals = [
    { id: 1, title: "Crack SDE Internship", icon: <Laptop className="h-5 w-5" /> },
    { id: 2, title: "Master Web Development", icon: <Code className="h-5 w-5" /> },
    { id: 3, title: "Learn ML Basics", icon: <Cpu className="h-5 w-5" /> },
    { id: 4, title: "Contribute to Open Source", icon: <GitPullRequest className="h-5 w-5" /> },
    { id: 5, title: "Ace Coding Interviews", icon: <BookOpen className="h-5 w-5" /> }
  ];

  const [selectedGoal, setSelectedGoal] = useState(goals[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Sample roadmap data
  const roadmapStages = [
    {
      title: "Foundation",
      tasks: [
        "Learn core programming concepts",
        "Complete basic DSA",
        "Build 2-3 small projects"
      ],
      duration: "4-6 weeks"
    },
    {
      title: "Specialization",
      tasks: [
        "Advanced DSA practice",
        selectedGoal.id === 2 ? "Learn React/Node.js" : 
        selectedGoal.id === 3 ? "ML fundamentals" : "Domain-specific skills",
        "Build portfolio project"
      ],
      duration: "6-8 weeks"
    },
    {
      title: "Preparation",
      tasks: [
        "Mock interviews",
        "Resume building",
        "Networking"
      ],
      duration: "2-4 weeks"
    },
    {
      title: "Execution",
      tasks: [
        "Apply to opportunities",
        "Interview process",
        "Final preparations"
      ],
      duration: "Ongoing"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Personalized Learning Roadmap
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your step-by-step guide to achieving your tech career goals
          </p>
        </motion.div>

        {/* Goal Selector - Glass Card */}
        <motion.div 
          className="bg-gray-900/20 backdrop-blur-lg border border-gray-700/30 rounded-xl p-6 mb-12 max-w-3xl mx-auto shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-medium mb-4 text-center text-blue-400">
            What's your current goal?
          </h3>
          
          {/* Dropdown */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                {selectedGoal.icon}
                <span>{selectedGoal.title}</span>
              </div>
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-10 mt-2 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden"
                >
                  {goals.map((goal) => (
                    <motion.div
                      key={goal.id}
                      whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                      className={`px-4 py-3 flex items-center gap-3 cursor-pointer ${selectedGoal.id === goal.id ? 'bg-blue-500/10' : ''}`}
                      onClick={() => {
                        setSelectedGoal(goal);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {goal.icon}
                      <span>{goal.title}</span>
                      {selectedGoal.id === goal.id && (
                        <Check className="h-4 w-4 ml-auto text-blue-400" />
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Roadmap Visualization */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {roadmapStages.map((stage, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 shadow-lg overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            >
              {/* Stage indicator */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500"></div>
              
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-blue-500/10 p-2 rounded-lg text-blue-400">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{stage.title}</h3>
                  <p className="text-sm text-gray-400">{stage.duration}</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {stage.tasks.map((task, taskIndex) => (
                  <motion.li 
                    key={taskIndex}
                    className="flex items-start gap-2 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + (index * 0.2) + (taskIndex * 0.1) }}
                  >
                    <span className="text-blue-400 mt-0.5">
                      <Check className="h-4 w-4" />
                    </span>
                    <span>{task}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="#get-started"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-medium shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            Start Your Journey
          </motion.a>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Roadmap;