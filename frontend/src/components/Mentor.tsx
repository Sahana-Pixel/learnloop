import React from "react";
import { motion } from "framer-motion";
import { User, Briefcase, MessageSquare, Star, ChevronRight } from "lucide-react";

const Mentor: React.FC = () => {
  const mentors = [
    {
      name: "Dr. Sarah Chen",
      role: "Senior Software Engineer",
      company: "Google",
      expertise: ["Career Guidance", "Interview Prep", "System Design"],
      rating: 4.9,
      sessions: 142
    },
    {
      name: "Alex Rodriguez",
      role: "Product Manager",
      company: "Microsoft",
      expertise: ["Product Strategy", "Resume Review", "Case Studies"],
      rating: 4.8,
      sessions: 98
    },
    {
      name: "Priya Patel",
      role: "Data Scientist",
      company: "Amazon",
      expertise: ["Machine Learning", "Portfolio Review", "Research Guidance"],
      rating: 4.7,
      sessions: 76
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen py-16 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Find the Right Mentor for Your Journey
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Get career guidance, placement prep help, or project feedback from experienced mentors.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#become-mentor"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-medium shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              <User className="h-5 w-5 mr-2" />
              Become a Mentor
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Mentor Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-gray-900/20 backdrop-blur-lg border border-gray-700/30 rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
                    <User className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{mentor.name}</h3>
                    <p className="text-gray-400 text-sm">{mentor.role} @ {mentor.company}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-medium">{mentor.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">({mentor.sessions} sessions)</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, i) => (
                      <span key={i} className="text-xs bg-gray-800/50 px-2 py-1 rounded-full border border-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-800/50">
                  <a 
                    href="#view-profile" 
                    className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
                  >
                    View profile <ChevronRight className="h-4 w-4" />
                  </a>
                  <motion.a
                    href="#book-session"
                    whileHover={{ x: 2 }}
                    className="text-sm bg-blue-600 hover:bg-blue-500 px-4 py-1.5 rounded-md flex items-center gap-1"
                  >
                    <MessageSquare className="h-4 w-4" /> Book
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* How It Works Section */}
        <motion.div 
          className="bg-gray-900/20 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">How Mentor Connect Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <User className="h-6 w-6 text-blue-400" />,
                title: "Create Profile",
                desc: "Sign up and highlight your skills, experience, and availability"
              },
              {
                icon: <Briefcase className="h-6 w-6 text-blue-400" />,
                title: "Find Mentors",
                desc: "Browse and connect with mentors in your field of interest"
              },
              {
                icon: <MessageSquare className="h-6 w-6 text-blue-400" />,
                title: "Start Learning",
                desc: "Schedule 1:1 sessions or join group mentoring events"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default Mentor;