import React from "react";
import { motion } from "framer-motion";
import { LogIn, Rocket } from "lucide-react";

interface Props {
  onLoginClick: () => void;
}

const DesktopAuthButtons: React.FC<Props> = ({ onLoginClick }) => {
  return (
    <div className="hidden md:flex items-center space-x-3">
      <motion.button
        onClick={onLoginClick}
        className="flex items-center px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white transition-all duration-200 group"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <LogIn className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
        <span>Login</span>
      </motion.button>

      <motion.a
        href="#get-started"
        className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-200 group"
        whileHover={{ y: -2, scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
      >
        <Rocket className="h-4 w-4 mr-2 group-hover:animate-pulse" />
        <span>Get Started</span>
      </motion.a>
    </div>
  );
};

export default DesktopAuthButtons;
