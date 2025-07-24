import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Users,
  Code,
  GraduationCap,
  Map,
  Calendar,
  Bookmark,
  LogIn,
  Rocket,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AuthModal from "./AuthModal"; // ✅ Adjust path if needed

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Circles", href: "#circles", icon: Users },
  { label: "Hackathons", href: "#hackathons", icon: Code },
  { label: "Mentors", href: "#mentors", icon: GraduationCap },
  { label: "Roadmap", href: "#roadmap", icon: Map },
  { label: "Tracker", href: "#tracker", icon: Calendar },
  { label: "Wall", href: "#wall", icon: Bookmark },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false); // ✅ Auth modal state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full bg-gradient-to-b from-gray-900 to-gray-900/80 text-gray-100 fixed top-0 z-50 backdrop-blur-lg border-b border-gray-800/50 transition-all duration-300 ${
          scrolled ? "pt-6 pb-2 shadow-xl" : "pt-8 pb-3 shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
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
                    <span className="text-white font-bold text-xl drop-shadow-sm">
                      LL
                    </span>
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

          {/* Center menu */}
          <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2 space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.label} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href={item.href}
                    className={`flex flex-col items-center px-4 py-2 text-sm transition ${
                      activeLink === item.href
                        ? "text-blue-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={() => setActiveLink(item.href)}
                  >
                    <Icon className="h-5 w-5 mb-1" />
                    <span>{item.label}</span>
                    {activeLink === item.href && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop Right Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.button
              onClick={() => setIsAuthModalOpen(true)} // ✅ Open modal
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

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800/50"
            >
              <div className="px-4 py-3 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm ${
                        activeLink === item.href
                          ? "bg-blue-900/30 text-blue-400"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white"
                      }`}
                      onClick={() => {
                        setActiveLink(item.href);
                        setIsOpen(false);
                      }}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="h-5 w-5 mr-3" />
                      <span>{item.label}</span>
                      {activeLink === item.href && (
                        <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full"></div>
                      )}
                    </motion.a>
                  );
                })}

                <div className="pt-3 mt-2 border-t border-gray-800/50 space-y-3">
                  <motion.button
                    onClick={() => {
                      setIsAuthModalOpen(true); // ✅ Open modal on mobile
                      setIsOpen(false);
                    }}
                    className="flex items-center justify-center px-4 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white transition-all"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.2 }}
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    <span>Login</span>
                  </motion.button>

                  <motion.a
                    href="#get-started"
                    className="flex items-center justify-center px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg hover:shadow-blue-500/30 transition-all"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.2 }}
                  >
                    <Rocket className="h-4 w-4 mr-2" />
                    <span>Get Started</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ✅ Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
};

export default Navbar;
