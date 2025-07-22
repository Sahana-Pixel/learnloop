import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Plus, Edit2, Clock, Flame, TrendingUp, X, Circle } from "lucide-react";

const Tracker: React.FC = () => {
  const [goals, setGoals] = useState([
    { id: 1, text: "Solve 3 DSA problems", status: "completed", category: "DSA", deadline: "Today" },
    { id: 2, text: "Watch 1 React video", status: "in-progress", category: "Frontend", deadline: "Today" },
    { id: 3, text: "Revise OS notes", status: "not-started", category: "CS Fundamentals", deadline: "Today" }
  ]);
  const [newGoal, setNewGoal] = useState("");
  const [newCategory, setNewCategory] = useState("General");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const categories = ["General", "DSA", "Frontend", "Backend", "CS Fundamentals", "ML/AI"];

  const addGoal = () => {
    if (newGoal.trim()) {
      setGoals([...goals, {
        id: Date.now(),
        text: newGoal,
        status: "not-started",
        category: newCategory,
        deadline: "Today"
      }]);
      setNewGoal("");
    }
  };

  const toggleStatus = (id: number) => {
    setGoals(goals.map(goal => {
      if (goal.id === id) {
        const newStatus = 
          goal.status === "not-started" ? "in-progress" :
          goal.status === "in-progress" ? "completed" : "not-started";
        return { ...goal, status: newStatus };
      }
      return goal;
    }));
  };

  const startEditing = (id: number, text: string) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = (id: number) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, text: editText } : goal
    ));
    setEditingId(null);
  };

  const deleteGoal = (id: number) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  // Streak data
  const streakData = {
    current: 5,
    longest: 12,
    completion: 82
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Daily Progress Tracker</h1>
          <p className="text-gray-400">Stay accountable and build consistent learning habits</p>
        </motion.div>

        {/* Goal Input Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 mb-8 border border-gray-700/30"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Plus className="text-blue-400" size={20} />
            Add Today's Goal
          </h2>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
              placeholder="What do you want to do today?"
              className="flex-1 bg-gray-700/50 border border-gray-600/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="bg-gray-700/50 border border-gray-600/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <motion.button
              onClick={addGoal}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              <Plus size={18} />
              Add Goal
            </motion.button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Streak Tracker */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-blue-900/30 to-blue-800/40 backdrop-blur-md rounded-xl p-6 border border-blue-700/30"
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Flame className="text-orange-400" size={20} />
              Streak
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">🔥 Current</span>
                <span className="font-medium">{streakData.current} days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">🌟 Longest</span>
                <span className="font-medium">{streakData.longest} days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">📊 Completion</span>
                <span className="font-medium">{streakData.completion}%</span>
              </div>
            </div>
            <div className="mt-6 bg-blue-900/20 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-blue-500 to-teal-500 h-2.5 rounded-full" 
                style={{ width: `${streakData.completion}%` }}
              ></div>
            </div>
          </motion.div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/30 md:col-span-2"
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="text-green-400" size={20} />
              Today's Progress
            </h2>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-700/30 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-400">
                  {goals.filter(g => g.status === "completed").length}
                </div>
                <div className="text-sm text-gray-400">Completed</div>
              </div>
              <div className="bg-gray-700/30 p-4 rounded-lg">
                <div className="text-2xl font-bold text-yellow-400">
                  {goals.filter(g => g.status === "in-progress").length}
                </div>
                <div className="text-sm text-gray-400">In Progress</div>
              </div>
              <div className="bg-gray-700/30 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-400">
                  {goals.filter(g => g.status === "not-started").length}
                </div>
                <div className="text-sm text-gray-400">Not Started</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Daily Task List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gray-800/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700/30"
        >
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Clock className="text-purple-400" size={20} />
              Today's Tasks
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-400 border-b border-gray-700/50">
                    <th className="pb-3 pl-2">Task</th>
                    <th className="pb-3">Category</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3 pr-2 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {goals.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="py-6 text-center text-gray-500">
                        No goals added yet. Add your first goal above!
                      </td>
                    </tr>
                  ) : (
                    goals.map((goal) => (
                      <motion.tr 
                        key={goal.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border-b border-gray-700/30 hover:bg-gray-700/20 transition-colors"
                      >
                        <td className="py-4 pl-2">
                          {editingId === goal.id ? (
                            <input
                              type="text"
                              value={editText}
                              onChange={(e) => setEditText(e.target.value)}
                              className="bg-gray-700 border border-gray-600 rounded px-3 py-1 w-full"
                            />
                          ) : (
                            <div className="flex items-center gap-3">
                              <button 
                                onClick={() => toggleStatus(goal.id)}
                                className={`w-5 h-5 flex items-center justify-center rounded-full border ${
                                  goal.status === "completed" 
                                    ? "bg-green-500/20 border-green-500 text-green-500" 
                                    : goal.status === "in-progress" 
                                      ? "bg-yellow-500/20 border-yellow-500 text-yellow-500"
                                      : "bg-gray-700 border-gray-600"
                                }`}
                              >
                                {goal.status === "completed" && <Check size={14} />}
                                {goal.status === "in-progress" && <Circle size={8} />}
                              </button>
                              <span className={goal.status === "completed" ? "line-through text-gray-500" : ""}>
                                {goal.text}
                              </span>
                            </div>
                          )}
                        </td>
                        <td className="py-4">
                          <span className="px-3 py-1 rounded-full text-xs bg-gray-700/50">
                            {goal.category}
                          </span>
                        </td>
                        <td className="py-4">
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            goal.status === "completed" 
                              ? "bg-green-900/30 text-green-400" 
                              : goal.status === "in-progress" 
                                ? "bg-yellow-900/30 text-yellow-400"
                                : "bg-gray-700/50 text-gray-400"
                          }`}>
                            {goal.status.split("-").join(" ")}
                          </span>
                        </td>
                        <td className="py-4 pr-2">
                          <div className="flex justify-end gap-2">
                            {editingId === goal.id ? (
                              <>
                                <motion.button
                                  onClick={() => saveEdit(goal.id)}
                                  whileHover={{ scale: 1.1 }}
                                  className="text-green-400 hover:text-green-300 p-1"
                                >
                                  <Check size={18} />
                                </motion.button>
                                <motion.button
                                  onClick={() => setEditingId(null)}
                                  whileHover={{ scale: 1.1 }}
                                  className="text-red-400 hover:text-red-300 p-1"
                                >
                                  <X size={18} />
                                </motion.button>
                              </>
                            ) : (
                              <>
                                <motion.button
                                  onClick={() => startEditing(goal.id, goal.text)}
                                  whileHover={{ scale: 1.1 }}
                                  className="text-blue-400 hover:text-blue-300 p-1"
                                >
                                  <Edit2 size={18} />
                                </motion.button>
                                <motion.button
                                  onClick={() => deleteGoal(goal.id)}
                                  whileHover={{ scale: 1.1 }}
                                  className="text-red-400 hover:text-red-300 p-1"
                                >
                                  <X size={18} />
                                </motion.button>
                              </>
                            )}
                          </div>
                        </td>
                      </motion.tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tracker;