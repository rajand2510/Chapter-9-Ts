import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-gray-900 text-white min-h-screen p-6" : "bg-white text-black min-h-screen p-6"}>
      <button
        onClick={() => setDark(!dark)}
        className="px-4 py-2 rounded bg-blue-600 text-white"
      >
        Switch to {dark ? "Light" : "Dark"} Mode
      </button>

      <h1 className="text-2xl font-bold mt-6">
        {dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </h1>
      <p className="mt-2">
    Toggle Theme    
      </p>
    </div>
  );
}
