// components/home/PrimaryCTA.tsx
import { motion } from "framer-motion";
import { Users, GraduationCap } from "lucide-react";

const PrimaryCTA = () => (
  <motion.div
    className="flex flex-col sm:flex-row gap-4 mb-10 justify-center md:justify-start"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
  >
    <motion.a
      href="#join-student"
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/30"
    >
      <Users className="h-5 w-5" />
      Join as Student
    </motion.a>
    <motion.a
      href="#join-mentor"
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium flex items-center justify-center gap-2"
    >
      <GraduationCap className="h-5 w-5" />
      Join as Mentor
    </motion.a>
  </motion.div>
);

export default PrimaryCTA;
