import React from "react";
import { motion } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

interface DesktopMenuProps {
  navItems: NavItem[];
  activeLink: string;
  setActiveLink: (link: string) => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ navItems, activeLink, setActiveLink }) => {
  return (
    <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2 space-x-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <motion.div 
            key={item.label}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <a
              href={item.href}
              className={`flex flex-col items-center px-4 py-2 text-sm transition ${
                activeLink === item.href ? "text-blue-400" : "text-gray-300 hover:text-white"
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
  );
};

export default DesktopMenu;
