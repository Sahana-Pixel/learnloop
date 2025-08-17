// We'll start by extracting the HeaderSection and Search/Filter bar into a reusable component.

// 1. Create a new file: components/CircleHeader.tsx

import React from "react";
import { motion } from "framer-motion";
import { Search, Filter, ChevronDown, ChevronUp } from "lucide-react";

interface CircleHeaderProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  showFilters: boolean;
  setShowFilters: (value: boolean) => void;
}

const CircleHeader: React.FC<CircleHeaderProps> = ({
  searchQuery,
  setSearchQuery,
  showFilters,
  setShowFilters
}) => {
  return (
    <>
      {/* Header Section */}
      <motion.div>
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
      </motion.div>
    </>
  );
};

export default CircleHeader;
