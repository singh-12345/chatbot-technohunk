import React, { useState } from "react";
import { MenuIcon } from "./Icon";
import "../styles/maincontent.css";
// import { useTheme } from "../context/ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

interface MainContentProps {
  toggleSidebar: () => void;
}


const MainContent: React.FC<MainContentProps> = ({ toggleSidebar }) => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    { sender: "bot", text: "Hello Aman 👋, ask me anything!" },
  ]);
  const [input, setInput] = useState("");
  // const { theme, setTheme } = useTheme();

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    setTimeout(() => {
      const reply = { sender: "bot", text: "🤖 " + newMessage.text + " (mock reply)" };
      setMessages((prev) => [...prev, reply]);
    }, 700);
  };

  return (
    <main className="main-content">
      {/* ✅ Top Header */}
      <div className="chat-header-top">
        <h2 className="title">Welcome to AI Assistant</h2>
        {/* Theme Switcher */}
      
      {/* <div style={{ marginTop: 18 }}>
        <h4 style={{ margin: "8px 0" }}>Choose theme</h4>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              aria-pressed={theme === t.id}
              className="panel"
              style={{
                padding: "8px 10px",
                borderRadius: 8,
                border: theme === t.id ? `2px solid var(--accent-strong)` : `1px solid var(--border)`,
                background: "var(--bg-panel)",
                color: "var(--text-primary)",
                cursor: "pointer",
              }}
            >
              <span style={{ marginRight: 8 }}>{t.emoji}</span>
              {t.label}
            </button>
          ))}
        </div>
      </div> */}
       <ThemeSwitcher />
      </div>

      {/* Existing Header */}
      <header className="main-header">
        <button onClick={toggleSidebar} className="menu-button">
          <MenuIcon />
        </button>
        <div className="header-spacer" />
      </header>

      {/* Chat Content */}
      <div className="content-center">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Section */}
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
