import React, { useState } from "react";
import { Search, Plus } from "lucide-react";
import KnowledgeBaseCard from "./KnowledgeBaseCard";
import Pagination from "./Pagination";

const DUMMY_DESCRIPTION =
  "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy";

const INITIAL_CARDS = [
  { id: 1, name: "Test", description: DUMMY_DESCRIPTION, createdOn: "14/07/2025" },
  { id: 2, name: "Test", description: DUMMY_DESCRIPTION, createdOn: "14/07/2025" },
  { id: 3, name: "Test", description: DUMMY_DESCRIPTION, createdOn: "14/07/2025" },
  { id: 4, name: "Test", description: DUMMY_DESCRIPTION, createdOn: "14/07/2025" },
  { id: 5, name: "Test", description: DUMMY_DESCRIPTION, createdOn: "14/07/2025" },
  { id: 6, name: "Test", description: DUMMY_DESCRIPTION, createdOn: "14/07/2025" },
];

export default function KnowledgeBasePage({ onCreateNew }) {
  const [cards, setCards] = useState(INITIAL_CARDS);
  const [search, setSearch] = useState("");

  const filtered = cards.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  // Exposed globally so modal can add a new card
  window.__addKnowledgeBase = (entry) => {
    setCards((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: entry.name,
        description: entry.description || DUMMY_DESCRIPTION,
        createdOn: new Date().toLocaleDateString("en-GB"),
      },
    ]);
  };

  return (
    <div className="p-6 min-h-full">
      {/* Page header */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-bold text-gray-800">Knowledge Base</h1>
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 pr-3 py-1.5 text-xs border border-gray-300 rounded-md focus:outline-none focus:border-indigo-400 w-44 bg-white"
            />
          </div>

          {/* Create New button */}
          <button
            onClick={onCreateNew}
            className="flex items-center gap-1.5 text-xs font-semibold text-white px-3 py-1.5 rounded-md transition-colors hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#4F46E5" }}
          >
            <Plus size={14} />
            Create New
          </button>
        </div>
      </div>

      {/* Cards grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {filtered.map((card) => (
            <KnowledgeBaseCard key={card.id} {...card} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-gray-400">
          <div className="w-16 h-16 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center mb-3">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <p className="text-sm">No Knowledge Bases Found</p>
        </div>
      )}

      {/* Pagination */}
      <Pagination
        totalRows={filtered.length}
        rowsPerPage={10}
        currentPage={1}
      />
    </div>
  );
}
