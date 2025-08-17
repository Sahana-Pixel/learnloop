// components/auth/SignupForm.tsx
import { Mail, Lock, User, Briefcase, BookOpen } from "lucide-react";

interface SignupFormProps {
  userRole: "student" | "mentor";
  formData: {
    name: string;
    email: string;
    password: string;
    college?: string;
    branch?: string;
    year?: string;
    organization?: string;
    expertise?: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  switchMode: () => void;
}


const SignupForm = ({
  userRole,
  formData,
  handleChange,
  handleSubmit,
  switchMode,
}: SignupFormProps) => {
  return (
    <form onSubmit={handleSubmit} className="p-4">
      {/* Name */}
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

      {/* Email */}
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

      {/* Password */}
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


      {/* Submit */}
      <button
        type="submit"
        className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
      >
        Sign Up
      </button>

      {/* Switch Mode */}
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
    </form>
  );
};

export default SignupForm;
