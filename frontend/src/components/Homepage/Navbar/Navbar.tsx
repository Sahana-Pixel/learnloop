import React, { useState, useEffect } from "react";
import {
  Home,
  Users,
  Code,
  GraduationCap,
  Map,
  Calendar,
  Bookmark,
} from "lucide-react";

import AuthModal from "../Auth/AuthModal";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import DesktopAuthButtons from "./DesktopAuthButtons";
import MobileToggleButton from "./MobileToggleButton";
import MobileMenuPanel from "./MobileMenuPanel";

// Navigation items with icons
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
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [activeLink, setActiveLink] = useState("#home"); // Active nav item
  const [scrolled, setScrolled] = useState(false); // Tracks scroll position
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false); // Auth modal toggle
  const [isLogin, setIsLogin] = useState(true); // true = Login, false = Sign Up


  // Add shadow and padding when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={`w-full bg-gradient-to-b from-gray-900 to-gray-900/80 text-gray-100 fixed top-0 z-50 backdrop-blur-lg border-b border-gray-800/50 transition-all duration-300 ${
          scrolled ? "pt-6 pb-2 shadow-xl" : "pt-8 pb-3 shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Left: Logo */}
          <Logo />

          {/* Center: Desktop Navigation Links */}
          <DesktopMenu
            navItems={navItems}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />

          {/* Right: Login/Signup Buttons (Desktop) */}
<DesktopAuthButtons
  onLoginClick={() => {
    setIsLogin(true);         // 👈 show login mode
    setIsAuthModalOpen(true);
  }}
/>

          {/* Mobile Menu Toggle Button */}
          <MobileToggleButton
            isOpen={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
          />
        </div>

        {/* Mobile Menu Panel */}
        <MobileMenuPanel
          isOpen={isOpen}
          navItems={navItems}
          activeLink={activeLink}
          setActiveLink={(link) => {
            setActiveLink(link);
            setIsOpen(false); // Close menu on selection
          }}
         onLoginClick={() => {
  setIsLogin(true);           // 👈 show login mode
  setIsAuthModalOpen(true);
  setIsOpen(false);
}}

        />
      </nav>

      {/* Login / Signup Modal */}
     <AuthModal
  isOpen={isAuthModalOpen}
  onClose={() => setIsAuthModalOpen(false)}
  isLogin={isLogin}
/>

    </>
  );
};

export default Navbar;
