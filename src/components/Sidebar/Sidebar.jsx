import React, { useState } from "react";
import {
  Bot, Cpu, BookOpen, Globe, Monitor, AlignJustify,
  Zap, Briefcase, Play, Shield, Database, BarChart2,
  Building2, Plug, Settings, Menu, X
} from "lucide-react";

const SectionLabel = ({ children }) => (
  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest px-3 mt-5 mb-1.5">
    {children}
  </p>
);

const NavItem = ({ icon: Icon, label, active = false }) => (
  <button
    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors text-left ${
      active
        ? "bg-indigo-50 text-indigo-700 font-semibold border-l-4 border-indigo-600"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-800 border-l-4 border-transparent"
    }`}
  >
    <Icon size={16} className={active ? "text-indigo-600" : "text-gray-500"} />
    <span>{label}</span>
  </button>
);

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = (
    <nav className="flex-1 px-2 py-3 overflow-y-auto">
      <SectionLabel>My Projects</SectionLabel>
      <NavItem icon={Bot} label="Agents" />
      <NavItem icon={Cpu} label="AI Models" />
      <NavItem icon={BookOpen} label="Library" />

      <SectionLabel>Orchestrator</SectionLabel>
      <NavItem icon={Globe} label="Published" />
      <NavItem icon={Monitor} label="Machines" />
      <NavItem icon={AlignJustify} label="Queues" />
      <NavItem icon={Zap} label="Triggers" />
      <NavItem icon={Briefcase} label="Jobs" />
      <NavItem icon={Play} label="Executions" />
      <NavItem icon={Shield} label="Vault" />
      <NavItem icon={Database} label="Knowledge Base" active />
      <NavItem icon={BarChart2} label="Key Store" />

      <SectionLabel>Admin</SectionLabel>
      <NavItem icon={Building2} label="Tenant" />
      <NavItem icon={Plug} label="Integrations" />
      <NavItem icon={Settings} label="Settings" />
    </nav>
  );

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-3 left-3 z-50 text-white p-1"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar — desktop always visible, mobile slide-in */}
      <aside
        className={`
          bg-white border-r border-gray-200 flex flex-col overflow-hidden
          fixed md:relative top-0 left-0 h-full z-40
          w-56 transition-transform duration-200
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
        style={{ paddingTop: "56px" }}
      >
        {nav}
      </aside>
    </>
  );
}