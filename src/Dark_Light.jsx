import { useState, useEffect } from "react";

const ChangeMode = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    document.documentElement.className = mode;
  }, [mode]);

  return (
    <div className="mode-container">
      <h1>{mode === "light" ? "Light Mode" : "Dark Mode"}</h1>

      <button onClick={toggleMode}>
        {mode === "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

export default ChangeMode;
