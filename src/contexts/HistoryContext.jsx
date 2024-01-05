import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const HistoryContext = createContext();

function HistoryContextProvider({ children }) {
  const [history, setHistory] = useState(function () {
    const storedValue = localStorage.getItem("history");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  function handleAddTrainingToHistory(exercise) {
    setHistory((exercises) => [...exercises, exercise]);
  }

  function handleDeleteTrainingToHistory(exercise) {
    setHistory((exercises) => exercises.filter((el) => el.id !== exercise.id));
  }

  return (
    <HistoryContext.Provider value={history}>
      {children}
    </HistoryContext.Provider>
  );
}

function useHistory() {
  const context = useContext(HistoryContext);
  if (context === undefined)
    throw new Error("History context was used outside the context provider");
  return context;
}

export { useHistory, HistoryContextProvider };
