import React from "react";
import { X } from "lucide-react";

interface Props {
  isLogin: boolean;
  onClose: () => void;
}

const AuthHeader: React.FC<Props> = ({ isLogin, onClose }) => {
  return (
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
  );
};

export default AuthHeader;
