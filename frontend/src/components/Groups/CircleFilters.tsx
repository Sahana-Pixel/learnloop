import React from "react";

interface CircleFiltersProps {
  showFilters: boolean;
  filters: {
    branch: string;
    year: string;
    sortBy: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      branch: string;
      year: string;
      sortBy: string;
    }>
  >;
}

const CircleFilters: React.FC<CircleFiltersProps> = ({
  showFilters,
  filters,
  setFilters,
}) => {
  const handleChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    showFilters && (
      <div className="bg-[#0f0f0f] p-4 rounded-xl shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Branch</label>
            <select
              className="w-full bg-[#1c1c1c] text-white rounded-md p-2"
              value={filters.branch}
              onChange={(e) => handleChange("branch", e.target.value)}
            >
              <option value="">All</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="ISE">ISE</option>
              <option value="AIML">AIML</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Year</label>
            <select
              className="w-full bg-[#1c1c1c] text-white rounded-md p-2"
              value={filters.year}
              onChange={(e) => handleChange("year", e.target.value)}
            >
              <option value="">All</option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
              <option value="4th">4th Year</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Sort by</label>
            <select
              className="w-full bg-[#1c1c1c] text-white rounded-md p-2"
              value={filters.sortBy}
              onChange={(e) => handleChange("sortBy", e.target.value)}
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>
        <div className="mt-4 text-right">
          <button
            onClick={() =>
              setFilters({
                branch: "",
                year: "",
                sortBy: "recent",
              })
            }
            className="text-sm text-gray-400 hover:text-white"
          >
            Clear Filters
          </button>
        </div>
      </div>
    )
  );
};

export default CircleFilters;
