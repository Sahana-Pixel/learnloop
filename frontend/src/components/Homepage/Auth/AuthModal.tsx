import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ModalWrapper from "./ModalWrapper";
import AuthHeader from "./AuthHeader";
import RoleSelector from "./RoleSelector";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { loginUser, registerUser } from "../../../api/auth";
import axios from "axios";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLogin: boolean;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, isLogin: initialMode }) => {
  const [isLogin, setIsLogin] = useState(initialMode);

  // Reset mode when modal opens
  useEffect(() => {
    setIsLogin(initialMode);
  }, [initialMode, isOpen]);

  const [userRole, setUserRole] = useState<"student" | "mentor">("student");
const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
  college: "",
  branch: "",
  year: "",
  organization: "",
  expertise: "",
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
  expertise: "",
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

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    if (isLogin) {
      const response = await loginUser({
        email: formData.email,
        password: formData.password,
        role: userRole, // include role
       
  ...(userRole === "student"
    ? {
        college: formData.college,
        branch: formData.branch,
        year: formData.year,
      }
    : {
        organization: formData.organization,
        expertise: formData.expertise,
      }),


      });
      console.log("Login successful:", response);
    } else {
      const response = await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: userRole,
      });
      console.log("Signup successful:", response);
    }

    onClose();
  } catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    console.error("Auth error:", error.response?.data?.message || error.message);
  } else {
    console.error("Unexpected error:", String(error));
  }
}
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
  expertise: "",
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
            <AuthHeader isLogin={isLogin} onClose={onClose} />

<RoleSelector
  userRole={userRole}
  setUserRole={(role: string) => setUserRole(role as "student" | "mentor")}
/>

{isLogin ? (
  <LoginForm
    formData={formData}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    switchMode={switchMode}
  />
) : (
<SignupForm
  userRole={userRole}
  formData={formData}
  handleChange={handleChange}
  handleSubmit={handleSubmit}
  switchMode={switchMode}
/>

)}

          </motion.div>
        {/* </motion.div>
      )} */}

</ModalWrapper>
  );
};

export default AuthModal;