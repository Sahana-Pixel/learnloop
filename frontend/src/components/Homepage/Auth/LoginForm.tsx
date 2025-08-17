// components/auth/LoginForm.tsx
import { Mail, Lock } from "lucide-react";

interface LoginFormProps {
  formData: { email: string; password: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  switchMode: () => void;
}

const LoginForm = ({ formData, handleChange, handleSubmit, switchMode }: LoginFormProps) => {
  return (
    <form onSubmit={handleSubmit} className="p-4">
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
    </form>
  );
};

export default LoginForm;
