import { useState } from "react";
import _ from "lodash";

export default function ThemeToggleFunc() {
  const [dark, setDark] = useState(false);
  const [message, setMessage] = useState("hello from lodash");

  const toggleTheme = () => {
    setDark((prev) => !prev);
  };

  const randomizeMessage = () => {
    // Use lodash
    const randomNum = _.random(1, 100);
    const capitalized = _.capitalize(`your random number is ${randomNum}`);
    setMessage(capitalized);
  };

  return (
    <div
      className={
        dark
          ? "bg-gray-900 text-white min-h-screen p-6"
          : "bg-white text-black min-h-screen p-6"
      }
    >
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-blue-600 text-white mr-4"
      >
        Switch to {dark ? "Light" : "Dark"} Mode
      </button>

      <button
        onClick={randomizeMessage}
        className="px-4 py-2 rounded bg-green-600 text-white"
      >
        Randomize Message
      </button>

      <h1 className="text-2xl font-bold mt-6">
        {dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </h1>
      <p className="mt-2">
        <b>Functional Component</b> with Lodash: {message}
      </p>
    </div>
  );
}
