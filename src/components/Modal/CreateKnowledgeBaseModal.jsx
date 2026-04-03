import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

const InputField = ({ label, required, children }) => (
  <div className="mb-4">
    <label className="block text-xs font-medium text-gray-700 mb-1">
      {label}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
    {children}
  </div>
);

export default function CreateKnowledgeBaseModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    vectorStore: "Qdrant",
    embeddingModel: "Text-embedding-ada-002",
  });
  const [errors, setErrors] = useState({});
  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current?.focus();
    // Prevent background scroll
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    return e;
  };

  const handleCreate = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    if (window.__addKnowledgeBase) {
      window.__addKnowledgeBase({ name: form.name, description: form.description });
    }
    onClose();
  };

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-end"
      style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
      onClick={handleBackdrop}
    >
      <div className="bg-white w-80 h-full shadow-2xl flex flex-col animate-slide-in">
        {/* Modal Header */}
        <div className="flex items-start justify-between px-5 pt-5 pb-3 border-b border-gray-100">
          <div>
            <h2 className="text-sm font-bold text-gray-900">
              Create New Knowledge Base
            </h2>
            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
              Best for quick answers from documents, websites and text files.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors mt-0.5 ml-2 shrink-0"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {/* Name */}
          <InputField label="Name (Cannot be edited later)" required>
            <input
              ref={nameRef}
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
                if (errors.name) setErrors({});
              }}
              className={`w-full text-xs border rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 ${
                errors.name ? "border-red-400" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </InputField>

          {/* Description */}
          <InputField label="Description">
            <textarea
              placeholder="Description"
              rows={4}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full text-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 resize-none"
            />
          </InputField>

          {/* Vector Store */}
          <InputField label="Vector Store" required>
            <div className="relative">
              <select
                value={form.vectorStore}
                onChange={(e) => setForm({ ...form, vectorStore: e.target.value })}
                className="w-full text-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 appearance-none bg-white pr-8"
              >
                <option>Qdrant</option>
                <option>Pinecone</option>
                <option>Weaviate</option>
                <option>Chroma</option>
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          </InputField>

          {/* LLM Embedding Model */}
          <InputField label="LLM Embedding Model" required>
            <div className="relative">
              <select
                value={form.embeddingModel}
                onChange={(e) => setForm({ ...form, embeddingModel: e.target.value })}
                className="w-full text-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 appearance-none bg-white pr-8"
              >
                <option>Text-embedding-ada-002</option>
                <option>Text-embedding-3-small</option>
                <option>Text-embedding-3-large</option>
                <option>all-MiniLM-L6-v2</option>
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          </InputField>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={handleCreate}
            className="text-xs font-semibold text-white px-5 py-2 rounded-md transition-colors hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#4F46E5" }}
          >
            Create
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 0.22s ease-out;
        }
      `}</style>
    </div>
  );
}
