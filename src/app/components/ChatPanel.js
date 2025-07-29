"use client";

import { useState } from "react";

export default function ChatPanel({ onSubmit }) {
  const [prompt, setPrompt] = useState("");

  const handleSend = () => {
    if (!prompt.trim()) return;
    onSubmit(prompt);
    setPrompt("");
  };

  return (
    <div className="chat-panel">
      <input
        type="text"
        placeholder="Enter your prompt (e.g., create a login form)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="prompt-input"
      />
      <button onClick={handleSend} className="send-btn">
        Generate
      </button>
    </div>
  );
}
