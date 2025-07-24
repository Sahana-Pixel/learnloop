import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { X, User, GraduationCap, Mail, Lock, Briefcase, BookOpen } from "lucide-react";
import ModalWrapper from "./ModalWrapper";

const AuthModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [userRole, setUserRole] = useState<"student" | "mentor">("student");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    college: "",
    branch: "",
    year: "",
    organization: "",
    expertise: ""
  });

  const modalRef = useRef<HTMLDivElement>(null);

  // Clear form when modal closes or when switching modes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: "",
        email: "",
        password: "",
        college: "",
        branch: "",
        year: "",
        organization: "",
        expertise: ""
      });
    }
  }, [isOpen]);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    // Clear form when switching between login/signup
    setFormData({
      name: "",
      email: "",
      password: "",
      college: "",
      branch: "",
      year: "",
      organization: "",
      expertise: ""
    });
  };

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>

          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
className="bg-gray-900 border border-gray-700 rounded-xl w-full max-w-xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <h2 className="text-xl font-bold">
                {isLogin ? "🔐 Login" : "🚀 Sign Up"}
              </h2>
              <button 
                onClick={onClose} 
                className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-800"
              >
                <X size={20} />
              </button>
            </div>

            {/* Role Selection */}
            {!isLogin && (
              <div className="p-4 border-b border-gray-800">
                <p className="text-sm text-gray-400 mb-3">👋 I am a...</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setUserRole("student")}
                    className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors ${userRole === "student" ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                  >
                    <GraduationCap size={16} />
                    Student 
                  </button>
                  <button
                    onClick={() => setUserRole("mentor")}
                    className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors ${userRole === "mentor" ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                  >
                    <User size={16} />
                    Mentor 
                  </button>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-4">
              {isLogin ? (
                <>
                  <div className="mb-4">
                    <label className="block text-sm text-gray-400 mb-1">📧 Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={16} className="text-gray-500" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm text-gray-400 mb-1">🔒 Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock size={16} className="text-gray-500" />
                      </div>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    Login 
                  </button>
                  <div className="mt-4 text-center text-sm text-gray-400">
                    New here?{" "}
                    <button
                      type="button"
                      onClick={switchMode}
                      className="text-blue-400 hover:underline focus:outline-none"
                    >
                      Create an account 
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-4">
                    <label className="block text-sm text-gray-400 mb-1">👤 Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={16} className="text-gray-500" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Your name"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm text-gray-400 mb-1">📧 Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={16} className="text-gray-500" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm text-gray-400 mb-1">🔒 Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock size={16} className="text-gray-500" />
                      </div>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </div>

                  {userRole === "student" ? (
                    <>
                      <div className="mb-4">
                        <label className="block text-sm text-gray-400 mb-1">🏫 College Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <BookOpen size={16} className="text-gray-500" />
                          </div>
                          <input
                            type="text"
                            name="college"
                            value={formData.college}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Your college/university"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">📚 Branch</label>
                          <input
                            type="text"
                            name="branch"
                            value={formData.branch}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="e.g. Computer Science"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">📅 Year</label>
                          <input
                            type="text"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="e.g. 2nd"
                            required
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="mb-4">
                        <label className="block text-sm text-gray-400 mb-1">💼 Organization</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Briefcase size={16} className="text-gray-500" />
                          </div>
                          <input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Your company/organization"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-6">
                        <label className="block text-sm text-gray-400 mb-1">🧠 Area of Expertise</label>
                        <input
                          type="text"
                          name="expertise"
                          value={formData.expertise}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="e.g. Web Development, Machine Learning"
                          required
                        />
                      </div>
                    </>
                  )}

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    Sign Up 
                  </button>
                  <div className="mt-4 text-center text-sm text-gray-400">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={switchMode}
                      className="text-blue-400 hover:underline focus:outline-none"
                    >
                      Login 
                    </button>
                  </div>
                </>
              )}
            </form>
          </motion.div>
        {/* </motion.div>
      )} */}

</ModalWrapper>
  );
};

export default AuthModal;