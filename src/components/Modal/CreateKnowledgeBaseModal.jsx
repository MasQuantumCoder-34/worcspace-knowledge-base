import React, { useState, useEffect, useRef } from "react";
import { X, ChevronDown } from "lucide-react";

const Field = ({ label, required, children }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
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
  const [nameError, setNameError] = useState(false);
  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleCreate = () => {
    if (!form.name.trim()) { setNameError(true); return; }
    if (window.__addKnowledgeBase) window.__addKnowledgeBase(form);
    onClose();
  };

  return (
    /* Full-screen backdrop */
    <div
      className="fixed inset-0 z-50 flex justify-end"
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Panel */}
      <div
        className="bg-white w-full max-w-sm h-full flex flex-col shadow-2xl"
        style={{ animation: "slideIn 0.2s ease-out" }}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-6 py-5 border-b border-gray-100">
          <div>
            <h2 className="text-base font-bold text-gray-900">Create New Knowledge Base</h2>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Best for quick answers from documents, websites and text files.
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 ml-3 mt-0.5 flex-shrink-0">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          <Field label="Name (Cannot be edited later)" required>
            <input
              ref={nameRef}
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => { setForm({ ...form, name: e.target.value }); setNameError(false); }}
              className={`w-full text-sm border rounded-lg px-3 py-2.5 focus:outline-none focus:border-indigo-500 ${
                nameError ? "border-red-400" : "border-gray-300"
              }`}
            />
            {nameError && <p className="text-red-500 text-xs mt-1">Name is required</p>}
          </Field>

          <Field label="Description">
            <textarea
              placeholder="Description"
              rows={4}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-indigo-500 resize-none"
            />
          </Field>

          <Field label="Vector Store" required>
            <div className="relative">
              <select
                value={form.vectorStore}
                onChange={(e) => setForm({ ...form, vectorStore: e.target.value })}
                className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-indigo-500 appearance-none bg-white pr-9"
              >
                <option>Qdrant</option>
                <option>Pinecone</option>
                <option>Weaviate</option>
                <option>Chroma</option>
              </select>
              <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </Field>

          <Field label="LLM Embedding Model" required>
            <div className="relative">
              <select
                value={form.embeddingModel}
                onChange={(e) => setForm({ ...form, embeddingModel: e.target.value })}
                className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-indigo-500 appearance-none bg-white pr-9"
              >
                <option>Text-embedding-ada-002</option>
                <option>Text-embedding-3-small</option>
                <option>Text-embedding-3-large</option>
                <option>all-MiniLM-L6-v2</option>
              </select>
              <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </Field>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={handleCreate}
            className="text-sm font-semibold text-white px-6 py-2.5 rounded-lg hover:opacity-90 active:scale-95 transition-all"
            style={{ backgroundColor: "#4F46E5" }}
          >
            Create
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}