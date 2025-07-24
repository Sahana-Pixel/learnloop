import React from "react";

interface RoleSwitchTabsProps {
  role: "student" | "mentor";
  setRole: (role: "student" | "mentor") => void;
}

const RoleSwitchTabs: React.FC<RoleSwitchTabsProps> = ({ role, setRole }) => {
  const activeClasses = "border-b-2 border-blue-500 text-white font-semibold";
  const inactiveClasses = "text-gray-400 hover:text-white";

  return (
    <div className="flex justify-center space-x-6 border-b border-gray-700 px-4 pt-4">
      <button
        onClick={() => setRole("student")}
        className={`pb-2 ${role === "student" ? activeClasses : inactiveClasses}`}
      >
        Student
      </button>
      <button
        onClick={() => setRole("mentor")}
        className={`pb-2 ${role === "mentor" ? activeClasses : inactiveClasses}`}
      >
        Mentor
      </button>
    </div>
  );
};

export default RoleSwitchTabs;
