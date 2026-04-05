import React from "react";
import { MoreVertical } from "lucide-react";

export default function KnowledgeBaseCard({ name, description, createdOn }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col justify-between hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer group min-h-[160px]">
      <div>
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-sm font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">
            {name}
          </h3>
          <button className="text-gray-400 hover:text-gray-600 transition-colors ml-2 flex-shrink-0">
            <MoreVertical size={16} />
          </button>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        Created On:{" "}
        <span className="text-gray-600">{createdOn}</span>
      </p>
    </div>
  );
}