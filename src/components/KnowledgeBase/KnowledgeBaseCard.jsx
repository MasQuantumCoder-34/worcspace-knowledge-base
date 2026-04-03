import React from "react";
import { MoreVertical } from "lucide-react";

export default function KnowledgeBaseCard({ name, description, createdOn }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col justify-between hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer group">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">
          {name}
        </h3>
        <button className="text-gray-400 hover:text-gray-600 transition-colors p-0.5 rounded">
          <MoreVertical size={15} />
        </button>
      </div>
      <p className="text-xs text-gray-500 leading-relaxed flex-1">{description}</p>
      <p className="text-xs text-gray-400 mt-3">
        Created On:{" "}
        <span className="text-gray-500 font-medium">{createdOn}</span>
      </p>
    </div>
  );
}
