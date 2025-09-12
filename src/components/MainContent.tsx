import React, { useState } from "react";
import { MenuIcon } from "./Icon";

interface MainContentProps {
  toggleSidebar: () => void;
}

const MainContent: React.FC<MainContentProps> = ({ toggleSidebar }) => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    { sender: "bot", text: "Hello Aman 👋, ask me anything!" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Mock bot reply
    setTimeout(() => {
      const reply = { sender: "bot", text: "🤖 " + newMessage.text + " (mock reply)" };
      setMessages((prev) => [...prev, reply]);
    }, 700);
  };

  return (
    <main className="main-content">
      <header className="main-header">
        <button onClick={toggleSidebar} className="menu-button">
          <MenuIcon />
        </button>
        <div className="header-spacer" />
      </header>

      <div className="content-center">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-input-container">
          <input
            type="text"
            className="chat-input"
            placeholder="Ask anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <div className="chat-input-actions">
            <button className="chat-action-btn send-btn" onClick={sendMessage}>
              ➤
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
