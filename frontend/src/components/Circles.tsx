import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ArrowRight, Users, Clock, Star, ChevronDown, ChevronUp } from "lucide-react";
import BackgroundWrapper from "../UI/bg";
import HeaderSection from "../UI/Header";

const Circles: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    topics: [] as string[],
    level: "",
    sort: "Most active"
  });
  const [showFilters, setShowFilters] = useState(false);

  const topics = ["DSA", "Web Dev", "AI/ML", "System Design", "DBMS", "Cloud Computing", "DevOps", "Mobile Dev"];
  const levels = ["Beginner", "Intermediate", "Advanced"];
  const sortOptions = ["Most active", "Newest", "Recommended", "Most members"];

  const circles = [
    {
      id: 1,
      name: "DSA Mastery Group",
      description: "Daily Leetcode challenges and interview prep",
      members: 42,
      active: "5 min ago",
      topic: "DSA",
      level: "Intermediate",
      isRecommended: true
    },
    {
      id: 2,
      name: "Full Stack Builders",
      description: "Building projects with React & Node.js",
      members: 28,
      active: "15 min ago",
      topic: "Web Dev",
      level: "Beginner",
      isRecommended: false
    },
    {
      id: 3,
      name: "ML Enthusiasts",
      description: "Weekly Kaggle competitions and paper discussions",
      members: 35,
      active: "1 hour ago",
      topic: "AI/ML",
      level: "Advanced",
      isRecommended: true
    },
    {
      id: 4,
      name: "System Design Club",
      description: "Preparing for architecture interviews",
      members: 19,
      active: "2 hours ago",
      topic: "System Design",
      level: "Intermediate",
      isRecommended: false
    },
    {
      id: 5,
      name: "Database Wizards",
      description: "Deep dives into SQL and NoSQL technologies",
      members: 23,
      active: "30 min ago",
      topic: "DBMS",
      level: "Intermediate",
      isRecommended: true
    },
    {
      id: 6,
      name: "Cloud Explorers",
      description: "Hands-on with AWS, GCP and Azure",
      members: 31,
      active: "45 min ago",
      topic: "Cloud Computing",
      level: "Beginner",
      isRecommended: false
    }
  ];

  const toggleTopic = (topic: string) => {
    setActiveFilters(prev => ({
      ...prev,
      topics: prev.topics.includes(topic)
        ? prev.topics.filter(t => t !== topic)
        : [...prev.topics, topic]
    }));
  };

  const filteredCircles = circles.filter(circle => {
    const matchesSearch = circle.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         circle.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTopics = activeFilters.topics.length === 0 || 
                         activeFilters.topics.includes(circle.topic);
    
    const matchesLevel = !activeFilters.level || 
                         circle.level === activeFilters.level;
    
    return matchesSearch && matchesTopics && matchesLevel;
  });

  const sortedCircles = [...filteredCircles].sort((a, b) => {
    switch(activeFilters.sort) {
      case "Most active":
        return a.active.localeCompare(b.active);
      case "Newest":
        return b.id - a.id;
      case "Recommended":
        return (b.isRecommended ? 1 : 0) - (a.isRecommended ? 1 : 0);
      case "Most members":
        return b.members - a.members;
      default:
        return 0;
    }
  });

  return (
    <BackgroundWrapper>
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <motion.div 
      >
        <HeaderSection
  title="Explore Peer Circles"
  subtitle="Join active learning groups in DSA, Web Dev, AI, and more."
/>

        
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search circles..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
            {showFilters ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </motion.button>
        </div>
        
        {/* Filter Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 mb-6"
            >
              <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Topics Filter */}
                <div>
                  <h3 className="font-medium text-white mb-2">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {topics.map(topic => (
                      <motion.button
                        key={topic}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-3 py-1 rounded-full text-sm ${activeFilters.topics.includes(topic) 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                        onClick={() => toggleTopic(topic)}
                      >
                        {topic}
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                {/* Level Filter */}
                <div>
                  <h3 className="font-medium text-white mb-2">Level</h3>
                  <div className="flex flex-wrap gap-2">
                    {levels.map(level => (
                      <motion.button
                        key={level}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-3 py-1 rounded-full text-sm ${activeFilters.level === level 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                        onClick={() => setActiveFilters(prev => ({
                          ...prev,
                          level: prev.level === level ? "" : level
                        }))}
                      >
                        {level}
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                {/* Sort Filter */}
                <div>
                  <h3 className="font-medium text-white mb-2">Sort by</h3>
                  <select
                    className="w-full px-3 py-1.5 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={activeFilters.sort}
                    onChange={(e) => setActiveFilters(prev => ({
                      ...prev,
                      sort: e.target.value
                    }))}
                  >
                    {sortOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Circles Grid */}
      {sortedCircles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCircles.map((circle, index) => (
          <motion.div
  key={circle.id}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, delay: index * 0.1 }}
  whileHover={{ y: -5 }}
  className="bg-gray-900/20 backdrop-blur-lg border border-gray-700/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all"
>
  <div className="p-6 h-full flex flex-col">
    {/* Header with recommendation badge */}
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-semibold text-white">{circle.name}</h3>
      {circle.isRecommended && (
        <motion.span 
          className="flex items-center gap-1 px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
        >
          <Star className="h-3 w-3 fill-blue-400" />
          Recommended
        </motion.span>
      )}
    </div>
    
    {/* Description */}
    <p className="text-gray-300 mb-5 flex-grow">{circle.description}</p>
    
    {/* Stats */}
    <div className="flex items-center justify-between text-sm text-gray-400 mb-5">
      <span className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 flex items-center justify-center">
          <Users className="h-3 w-3 text-blue-400" />
        </div>
        {circle.members} members
      </span>
      <span className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-teal-500/10 backdrop-blur-sm border border-teal-500/20 flex items-center justify-center">
          <Clock className="h-3 w-3 text-teal-400" />
        </div>
        Active {circle.active}
      </span>
    </div>
    
    {/* Tags */}
    <div className="flex flex-wrap gap-2 mb-6">
      <motion.span 
        whileHover={{ y: -1 }}
        className="px-3 py-1 bg-gray-800/50 backdrop-blur-sm rounded-full text-xs text-white border border-gray-700/50"
      >
        {circle.topic}
      </motion.span>
      <motion.span 
        whileHover={{ y: -1 }}
        className="px-3 py-1 bg-gray-800/50 backdrop-blur-sm rounded-full text-xs text-white border border-gray-700/50"
      >
        {circle.level}
      </motion.span>
    </div>
    
    {/* CTA Button */}
    <motion.button
      whileHover={{ x: 3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg text-white font-medium shadow-md hover:shadow-blue-500/30 transition-all"
    >
      Join Circle
      <ArrowRight className="h-4 w-4" />
    </motion.button>
  </div>

  {/* Floating elements */}
  <motion.div 
    className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500/10 rounded-full backdrop-blur-sm border border-blue-500/20"
    animate={{
      rotate: [0, 15, 0, -15, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
</motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <h3 className="text-xl text-gray-300 mb-2">No circles found</h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </motion.div>
      )}
    </div>
    </BackgroundWrapper>
  );
};

export default Circles;