// components/HeaderSection.tsx
import React from "react";
import { motion } from "framer-motion";

interface HeaderSectionProps {
  title: string;
  subtitle: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
        {title}
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default HeaderSection;
