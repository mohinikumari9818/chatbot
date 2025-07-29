"use client";

import { useState } from "react";
import ChatPanel from "./components/ChatPanel";
import CodeTabs from "./components/CodeTabs";
import PreviewFrame from "./components/PreviewFrame";


export default function HomePage() {
  const [code, setCode] = useState({
    html: "<h1>Hello, world!</h1>",
    css: "h1 { color: blue; text-align: center; }",
    js: "console.log('Hello from JS');",
  });

  const handlePromptSubmit = async (prompt) => {
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (data.success) {
        setCode(data.code);
      } else {
        alert("Error generating code");
      }
    } catch (err) {
      console.error("API error:", err);
      alert("Failed to generate code");
    }
  };

  return (
    <main className="app-container">
      <h1 className="app-title">🧠 Chatbot Code Generator</h1>
      <ChatPanel onSubmit={handlePromptSubmit} />
      <div className="code-preview-container">
        <CodeTabs code={code} />
        <PreviewFrame code={code} />
      </div>
    </main>
  );
}
