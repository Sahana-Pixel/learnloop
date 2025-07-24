import React from "react";
import { motion } from "framer-motion";

const Logo: React.FC = () => {
  return (
    <motion.a 
      href="#home" 
      className="flex items-center group"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div 
        className="flex items-center gap-3"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <div className="relative">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 shadow-md overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1/5 bg-white/10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-blue-800/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-xl drop-shadow-sm">LL</span>
            </div>
          </div>
        </div>
        <span className="text-2xl font-bold text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-300">
            LearnLoop
          </span>
        </span>
      </motion.div>
    </motion.a>
  );
};

export default Logo;
