import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundWrapper from "../UI/bg";
import HeaderSection from "../UI/Header";
import CircleHeader from "./Groups/CircleHeader";
import CircleCard from "./Groups/CircleCard";


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
       <CircleHeader
  searchQuery={searchQuery}
  setSearchQuery={setSearchQuery}
  showFilters={showFilters}
  setShowFilters={setShowFilters}
/>

        
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
  <CircleCard key={circle.id} circle={circle} index={index} />
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