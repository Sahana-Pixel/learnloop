// components/RoleSelector.tsx
import { GraduationCap, User } from "lucide-react";

interface RoleSelectorProps {
  userRole: string;
  setUserRole: (role: string) => void;
}

const RoleSelector = ({ userRole, setUserRole }: RoleSelectorProps) => {
  return (
    <div className="p-4 border-b border-gray-800">
      <p className="text-sm text-gray-400 mb-3">👋 I am a...</p>
      <div className="flex gap-2">
        <button
          onClick={() => setUserRole("student")}
          className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors ${
            userRole === "student"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          <GraduationCap size={16} />
          Student
        </button>
        <button
          onClick={() => setUserRole("mentor")}
          className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors ${
            userRole === "mentor"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          <User size={16} />
          Mentor
        </button>
      </div>
    </div>
  );
};

export default RoleSelector;
