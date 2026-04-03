import React from "react";
import { Search, Bell, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header
      className="flex items-center justify-between px-4 h-12 shrink-0"
      style={{ backgroundColor: "#1E1B4B" }}
    >
      {/* Logo + Workspace */}
      <div className="flex items-center gap-3">
        {/* Logo icon */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-indigo-500 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M13 3L4 14h8l-1 7 9-11h-8l1-7z"
                fill="white"
                stroke="white"
                strokeWidth="1"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-white font-semibold text-sm tracking-wide">
            Worcspace
          </span>
        </div>

        {/* Workspace selector */}
        <button className="flex items-center gap-1 bg-indigo-700 hover:bg-indigo-600 transition-colors text-white text-xs font-medium px-3 py-1.5 rounded-md">
          Worcspace 1
          <ChevronDown size={12} />
        </button>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-sm mx-8">
        <div className="relative">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-300"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-indigo-900 bg-opacity-60 text-white placeholder-indigo-300 text-xs pl-8 pr-12 py-1.5 rounded-md border border-indigo-700 focus:outline-none focus:border-indigo-400"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 text-xs font-mono">
            ⌘K
          </span>
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        <button className="text-indigo-300 hover:text-white transition-colors">
          <Bell size={16} />
        </button>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
          style={{ backgroundColor: "#4F46E5" }}
        >
          GK
        </div>
      </div>
    </header>
  );
}
