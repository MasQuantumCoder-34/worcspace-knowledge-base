import React from "react";
import { Search, Bell, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header
      className="flex items-center justify-between px-6 h-14 shrink-0 w-full"
      style={{ backgroundColor: "#1E1B4B" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 min-w-0">
        <div className="flex items-center gap-2 flex-shrink-0">
          <img src="/logo.png" alt="Worcspace logo" className="w-10 h-14 rounded-full object-cover" />
          <span className="text-white font-bold text-base tracking-wide hidden sm:block">Worcspace</span>
        </div>
        <button className="flex items-center gap-1 text-white text-sm font-medium px-3 py-1.5 rounded-full border border-indigo-500 hover:bg-indigo-800 transition-colors flex-shrink-0">
          <span className="hidden sm:inline">Worcspace 1</span>
          <span className="sm:hidden">W1</span>
          <ChevronDown size={13} />
        </button>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-xs mx-6 hidden md:block">
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full text-white placeholder-gray-400 text-sm pl-9 pr-12 py-2 rounded-lg border border-indigo-600 focus:outline-none focus:border-indigo-300"
            style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">⌘K</span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <button className="text-gray-300 hover:text-white">
          <Bell size={18} />
        </button>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
          style={{ backgroundColor: "#4F46E5" }}
        >
          GK
        </div>
      </div>
    </header>
  );
}