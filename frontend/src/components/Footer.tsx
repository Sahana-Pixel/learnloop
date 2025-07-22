import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const socialLinks = [
    {
      icon: <Github size={18} />,
      url: "https://github.com/yourusername",
      name: "GitHub"
    },
    {
      icon: <Twitter size={18} />,
      url: "https://twitter.com/yourhandle",
      name: "Twitter"
    },
    {
      icon: <Linkedin size={18} />,
      url: "https://linkedin.com/in/yourprofile",
      name: "LinkedIn"
    },
    {
      icon: <Mail size={18} />,
      url: "mailto:contact@learnloop.com",
      name: "Email"
    }
  ];

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", url: "#features" },
        { name: "Pricing", url: "#pricing" },
        { name: "Roadmap", url: "#roadmap" },
        { name: "Changelog", url: "#changelog" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", url: "#docs" },
        { name: "Tutorials", url: "#tutorials" },
        { name: "Blog", url: "#blog" },
        { name: "Community", url: "#community" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", url: "#about" },
        { name: "Careers", url: "#careers" },
        { name: "Privacy", url: "#privacy" },
        { name: "Terms", url: "#terms" }
      ]
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-800 border-t border-gray-800/50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="bg-blue-600 text-white px-2 py-1 rounded font-bold">LL</span>
              <span className="text-xl font-semibold">LearnLoop</span>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-sm mb-6"
            >
              Empowering students to learn, build and grow together through peer collaboration.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 1) }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.url}
                      whileHover={{ x: 3 }}
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} LearnLoop. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 text-sm text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={16} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;