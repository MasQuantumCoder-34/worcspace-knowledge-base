import React from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

export default function Pagination({ totalRows, rowsPerPage, currentPage }) {
  const totalPages = Math.max(1, Math.ceil(totalRows / rowsPerPage));

  return (
    <div className="flex items-center justify-between pt-4 mt-6 border-t border-gray-200">
      {/* Left: row count */}
      <span className="text-sm text-gray-500">{totalRows} rows</span>

      {/* Right: rows per page + page info + nav buttons */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 hidden sm:inline">Rows per page</span>
          <select className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-indigo-400 text-gray-700 bg-white">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </div>

        <span className="text-sm text-gray-500 hidden sm:inline">
          page {currentPage} of {totalPages}
        </span>

        <div className="flex items-center gap-1">
          {[
            { Icon: ChevronsLeft, label: "First" },
            { Icon: ChevronLeft, label: "Previous" },
            { Icon: ChevronRight, label: "Next" },
            { Icon: ChevronsRight, label: "Last" },
          ].map(({ Icon, label }) => (
            <button
              key={label}
              aria-label={label}
              className="w-7 h-7 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600 transition-colors bg-white"
            >
              <Icon size={13} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}