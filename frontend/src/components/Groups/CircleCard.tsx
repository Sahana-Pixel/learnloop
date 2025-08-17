// components/CircleCard.tsx
import React from "react";
import { motion } from "framer-motion";
import { Users, Clock, Star, ArrowRight } from "lucide-react";

type Circle = {
  id: number;
  name: string;
  description: string;
  members: number;
  active: string;
  topic: string;
  level: string;
  isRecommended: boolean;
};

type Props = {
  circle: Circle;
  index: number;
};

const CircleCard: React.FC<Props> = ({ circle, index }) => {
  return (
    <motion.div
      key={circle.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-gray-900/20 backdrop-blur-lg border border-gray-700/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all relative"
    >
      <div className="p-6 h-full flex flex-col">
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

        <p className="text-gray-300 mb-5 flex-grow">{circle.description}</p>

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

        <motion.button
          whileHover={{ x: 3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg text-white font-medium shadow-md hover:shadow-blue-500/30 transition-all"
        >
          Join Circle
          <ArrowRight className="h-4 w-4" />
        </motion.button>
      </div>

      <motion.div
        className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500/10 rounded-full backdrop-blur-sm border border-blue-500/20"
        animate={{ rotate: [0, 15, 0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default CircleCard;
