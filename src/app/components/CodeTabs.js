"use client";

import { useState } from "react";

export default function CodeTabs({ code }) {
  const [activeTab, setActiveTab] = useState("html");

  return (
    <div className="code-tabs">
      <div className="tab-buttons">
        {["html", "css", "js"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>
      <pre className="code-block">
        <code>{code[activeTab]}</code>
      </pre>
    </div>
  );
}
