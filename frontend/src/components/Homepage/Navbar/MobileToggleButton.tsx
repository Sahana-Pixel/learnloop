import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileToggleButton: React.FC<Props> = ({ isOpen, onToggle }) => {
  return (
    <motion.button 
      className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all"
      onClick={onToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={isOpen ? "open" : "closed"}
    >
      {isOpen ? (
        <X className="w-5 h-5 text-white" />
      ) : (
        <Menu className="w-5 h-5 text-white" />
      )}
    </motion.button>
  );
};

export default MobileToggleButton;
