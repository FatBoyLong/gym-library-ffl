import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(function () {
    const storedValue = localStorage.getItem("darkMode");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  useEffect(
    function () {
      localStorage.setItem("darkMode", JSON.stringify(isDarkMode));

      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    [isDarkMode],
  );

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeProvider;

// custom hook for getting dark mode context data
export function useDarkMode() {
  // react hook for getting context data
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("The context was used outside of the Provider Component");

  return context;
}
