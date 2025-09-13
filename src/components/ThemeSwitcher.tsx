import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import type { Theme } from "../context/ThemeContext";
import { MdPalette } from "react-icons/md";
import { FiMoon, FiSun } from "react-icons/fi";
import { GiFlowerPot, GiSprout } from "react-icons/gi";

const themes: { id: Theme; label: string; icon: React.ReactNode }[] = [
  { id: "dark", label: "Dark", icon: <FiMoon /> },
  { id: "light", label: "Light", icon: <FiSun /> },
  { id: "pink", label: "Pink", icon: <GiFlowerPot /> },
  { id: "lightgreen", label: "Light Green", icon: <GiSprout /> },
];

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="theme-switcher">
      {/* Main toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="theme-toggle-btn"
        title="Switch Theme"
      >
        <MdPalette size={20} />
      </button>

      {/* Dropdown with theme options */}
      {open && (
        <div className="theme-dropdown">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id);
                setOpen(false);
              }}
              className={`theme-option ${theme === t.id ? "active" : ""}`}
            >
              <span style={{ marginRight: 6 }}>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
