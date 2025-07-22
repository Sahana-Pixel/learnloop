// components/BackgroundWrapper.tsx
import React from "react";

interface BackgroundWrapperProps {
  children: React.ReactNode;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children }) => {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default BackgroundWrapper;
