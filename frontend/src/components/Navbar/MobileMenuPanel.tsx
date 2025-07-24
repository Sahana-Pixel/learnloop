import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn, Rocket } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

interface Props {
  isOpen: boolean;
  navItems: NavItem[];
  activeLink: string;
  setActiveLink: (link: string) => void;
  onLoginClick: () => void;
}

const MobileMenuPanel: React.FC<Props> = ({
  isOpen,
  navItems,
  activeLink,
  setActiveLink,
  onLoginClick,
}) => {
  return (
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
                onClick={onLoginClick}
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
  );
};

export default MobileMenuPanel;
