import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, Users, Clock, ArrowRight, TrendingUp, Code } from "lucide-react";
import HeaderSection from "../UI/Header";

const Hackathon: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for hackathon teams
  const hackathonTeams = [
    {
      id: 1,
      name: "Code Crushers",
      hackathon: "DevSoc 2023",
      techStack: ["React", "Node.js", "MongoDB"],
      lookingFor: ["Frontend Dev", "UI Designer"],
      status: "recruiting",
      experience: "Intermediate",
      members: 3,
      daysLeft: 5
    },
    {
      id: 2,
      name: "AI Innovators",
      hackathon: "Hackloop Finals",
      techStack: ["Python", "TensorFlow", "Next.js"],
      lookingFor: ["ML Engineer"],
      status: "recruiting",
      experience: "Advanced",
      members: 4,
      daysLeft: 2
    },
    {
      id: 3,
      name: "Web Wizards",
      hackathon: "Hack the North",
      techStack: ["TypeScript", "GraphQL", "AWS"],
      lookingFor: ["Fullstack Dev"],
      status: "recruiting",
      experience: "Intermediate",
      members: 2,
      daysLeft: 7
    },
    {
      id: 4,
      name: "Blockchain Builders",
      hackathon: "ETH Global",
      techStack: ["Solidity", "Ethers.js", "Hardhat"],
      lookingFor: [],
      status: "full",
      experience: "Advanced",
      members: 5,
      daysLeft: 3
    }
  ];

  // Filter teams based on active filter and search query
  const filteredTeams = hackathonTeams.filter(team => {
    const matchesFilter = activeFilter === "all" || team.status === activeFilter;
    const matchesSearch = team.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         team.hackathon.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Glass morphism background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
       <HeaderSection
  title="Find a Hackathon Team or Project"
  subtitle="Looking for a team? Want to join a cool project? Find your perfect match here."
/>

        {/* Filters and Search */}
        <motion.div 
          className="bg-gray-900/50 backdrop-blur-md border border-gray-700/30 rounded-2xl p-6 mb-8 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search teams or hackathons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {["all", "recruiting", "full"].map((filter) => (
                <motion.button
                  key={filter}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter === "all" ? "All Teams" : 
                   filter === "recruiting" ? "Recruiting" : "Full"}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tech Stack and Experience Filters */}
         <motion.div 
  className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, staggerChildren: 0.1 }}
>
  {/* Tech Stack Select */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
  >
    <label className="block text-sm font-medium text-gray-300 mb-3 ml-1">
      <span className="flex items-center gap-2">
        <Code className="h-4 w-4 text-blue-400" />
        Tech Stack
      </span>
    </label>
    <motion.div whileHover={{ y: -2 }}>
      <select className="block w-full bg-gray-900/30 backdrop-blur-sm border border-gray-700/40 rounded-xl text-white p-3.5 pl-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all duration-200 shadow-sm">
        <option className="bg-gray-800">All Technologies</option>
        <option className="bg-gray-800">React</option>
        <option className="bg-gray-800">Node.js</option>
        <option className="bg-gray-800">Python</option>
        <option className="bg-gray-800">Machine Learning</option>
        <option className="bg-gray-800">Blockchain</option>
      </select>
    </motion.div>
  </motion.div>

  {/* Experience Level Select */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
  >
    <label className="block text-sm font-medium text-gray-300 mb-3 ml-1">
      <span className="flex items-center gap-2">
        <TrendingUp className="h-4 w-4 text-blue-400" />
        Experience Level
      </span>
    </label>
    <motion.div whileHover={{ y: -2 }}>
      <select className="block w-full bg-gray-900/30 backdrop-blur-sm border border-gray-700/40 rounded-xl text-white p-3.5 pl-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all duration-200 shadow-sm">
        <option className="bg-gray-800">Any Level</option>
        <option className="bg-gray-800">Beginner</option>
        <option className="bg-gray-800">Intermediate</option>
        <option className="bg-gray-800">Advanced</option>
      </select>
    </motion.div>
  </motion.div>

  {/* Floating decorative elements */}
  <motion.div 
    className="absolute -bottom-2 left-1/4 w-3 h-3 bg-blue-500/20 rounded-full backdrop-blur-sm"
    animate={{
      y: [0, -5, 0],
      opacity: [0.4, 0.8, 0.4]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
</motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-end mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-medium text-white shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            <Plus className="h-5 w-5" />
            Post a Team
          </motion.button>
        </motion.div>

        {/* Teams Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <AnimatePresence>
            {filteredTeams.map((team) => (
              <motion.div
                key={team.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  {/* Team header */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{team.name}</h3>
                      <p className="text-blue-400 text-sm">{team.hackathon}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      team.status === "recruiting" 
                        ? "bg-green-900/50 text-green-400" 
                        : "bg-purple-900/50 text-purple-400"
                    }`}>
                      {team.status === "recruiting" ? "Recruiting" : "Full"}
                    </span>
                  </div>

                  {/* Tech stack */}
                  <div className="mb-4">
                    <h4 className="text-sm text-gray-400 mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {team.techStack.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded-md text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Looking for */}
                  {team.lookingFor.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm text-gray-400 mb-2">Looking For</h4>
                      <div className="flex flex-wrap gap-2">
                        {team.lookingFor.map((role, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-blue-900/30 text-blue-400 rounded-md text-xs"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-800/50">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center text-sm text-gray-400">
                        <Users className="h-4 w-4 mr-1" />
                        {team.members}/5
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        {team.daysLeft}d left
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ x: 2 }}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center"
                    >
                      View Team
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredTeams.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="mx-auto h-24 w-24 text-gray-500 mb-4">
              <Search className="w-full h-full" />
            </div>
            <h3 className="text-lg font-medium text-white mb-1">No teams found</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hackathon;