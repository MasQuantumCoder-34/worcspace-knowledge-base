import React from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

export default function Pagination({ totalRows, rowsPerPage, currentPage }) {
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  return (
    <div className="flex items-center justify-between px-1 py-3 border-t border-gray-200 bg-white mt-4 rounded-b-lg">
      <span className="text-xs text-gray-500">{totalRows} rows</span>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-gray-500">Rows per page</span>
          <select className="text-xs border border-gray-300 rounded px-1.5 py-0.5 focus:outline-none focus:border-indigo-400 text-gray-700">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </div>

        <span className="text-xs text-gray-500">
          page {currentPage} of {totalPages}
        </span>

        <div className="flex items-center gap-0.5">
          {[
            { Icon: ChevronsLeft, label: "First" },
            { Icon: ChevronLeft, label: "Previous" },
            { Icon: ChevronRight, label: "Next" },
            { Icon: ChevronsRight, label: "Last" },
          ].map(({ Icon, label }) => (
            <button
              key={label}
              aria-label={label}
              className="w-6 h-6 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600 transition-colors disabled:opacity-40"
            >
              <Icon size={12} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
