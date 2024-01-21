import { useEffect, useState } from "react";
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

  function handleDeleteFromHistory(exercise) {
    setHistory((history) =>
      history.filter((el) => el.identificator !== exercise.identificator),
    );
  }

  useEffect(
    function () {
      localStorage.setItem("history", JSON.stringify(history));
    },
    [history],
  );

  return (
    <HistoryContext.Provider
      value={{
        history,
        setHistory,
        handleAddTrainingToHistory,
        handleDeleteFromHistory,
      }}
    >
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
