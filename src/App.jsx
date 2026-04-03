import React, { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import KnowledgeBasePage from "./components/KnowledgeBase/KnowledgeBasePage";
import CreateKnowledgeBaseModal from "./components/Modal/CreateKnowledgeBaseModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-50">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <KnowledgeBasePage onCreateNew={() => setIsModalOpen(true)} />
        </main>
      </div>
      {isModalOpen && (
        <CreateKnowledgeBaseModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
