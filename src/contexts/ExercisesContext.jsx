import { createContext, useContext, useEffect, useState } from "react";

import { getExercises } from "../services/apiExercises";

const ExercisesContext = createContext();

function ExercisesContextProvider({ children }) {
  const [exercisesList, setExercisesList] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 1. Loading all exercises from api in first mount of app
  // 2. Sorting array by user query
  // 3. Saving array in state variable
  useEffect(function () {
    async function getExercisesData() {
      setIsLoading(true);
      const data = await getExercises();
      setExercisesList(data);
      setIsLoading(false);
    }

    getExercisesData();
  }, []);

  // useEffect(
  //   function () {
  //     if (!query) {
  //       return () => {
  //         searchParams.delete("page");
  //         setSearchParams(searchParams);
  //       };
  //     }
  //   },
  //   [query, searchParams, setSearchParams],
  // );

  // bodyPart equipment target
  const sortedExercises = exercisesList
    .filter(
      (el) =>
        el.bodyPart.toLowerCase().includes(query.toLowerCase().trim()) ||
        el.equipment.toLowerCase().includes(query.toLowerCase().trim()) ||
        el.target.toLowerCase().includes(query.toLowerCase().trim()) ||
        el.name.includes(query.toLowerCase().trim()),
    )
    .map((el) => {
      return { ...el, reps: 0, sets: 0 };
    });

  return (
    <ExercisesContext.Provider
      value={{
        sortedExercises,
        setQuery,
        query,
        isLoading,
      }}
    >
      {children}
    </ExercisesContext.Provider>
  );
}

function useExercises() {
  const context = useContext(ExercisesContext);
  if (context === undefined)
    throw new Error("This context was used outside of the provider");
  return context;
}

export { ExercisesContextProvider, useExercises };
