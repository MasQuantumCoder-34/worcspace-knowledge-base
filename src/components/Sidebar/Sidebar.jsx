import React from "react";
import {
  Bot,
  Cpu,
  Library,
  Globe,
  Monitor,
  AlignJustify,
  Zap,
  Briefcase,
  Play,
  Shield,
  Database,
  Key,
  Building2,
  Plug,
  Settings,
} from "lucide-react";

const SectionLabel = ({ children }) => (
  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mt-5 mb-1">
    {children}
  </p>
);

const NavItem = ({ icon: Icon, label, active = false }) => (
  <button
    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors ${
      active
        ? "bg-indigo-50 text-indigo-700 font-medium"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
    }`}
  >
    <Icon size={16} className={active ? "text-indigo-600" : "text-gray-500"} />
    <span>{label}</span>
  </button>
);

export default function Sidebar() {
  return (
    <aside className="w-48 bg-white border-r border-gray-200 flex flex-col overflow-y-auto shrink-0">
      <nav className="flex-1 px-2 py-3">
        <SectionLabel>My Projects</SectionLabel>
        <NavItem icon={Bot} label="Agents" />
        <NavItem icon={Cpu} label="AI Models" />
        <NavItem icon={Library} label="Library" />

        <SectionLabel>Orchestrator</SectionLabel>
        <NavItem icon={Globe} label="Published" />
        <NavItem icon={Monitor} label="Machines" />
        <NavItem icon={AlignJustify} label="Queues" />
        <NavItem icon={Zap} label="Triggers" />
        <NavItem icon={Briefcase} label="Jobs" />
        <NavItem icon={Play} label="Executions" />
        <NavItem icon={Shield} label="Vault" />
        <NavItem icon={Database} label="Knowledge Base" active />
        <NavItem icon={Key} label="Key Store" />

        <SectionLabel>Admin</SectionLabel>
        <NavItem icon={Building2} label="Tenant" />
        <NavItem icon={Plug} label="Integrations" />
        <NavItem icon={Settings} label="Settings" />
      </nav>
    </aside>
  );
}
