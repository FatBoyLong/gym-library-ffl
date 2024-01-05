import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const TrainingContext = createContext();

function TrainingContextProvider({ children }) {
  const [trainingList, setTrainingList] = useState(function () {
    const storedValue = localStorage.getItem("trainingList");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  function addExerciseToTrainingList(exercise) {
    setTrainingList((list) => [...list, exercise]);
  }

  function deleteExerciseFromTrainingList(exercise) {
    setTrainingList((list) => list.filter((el) => el.id !== exercise.id));
  }

  useEffect(
    function () {
      localStorage.setItem("trainingList", JSON.stringify(trainingList));
    },
    [trainingList],
  );

  return (
    <TrainingContext.Provider
      value={{
        trainingList,
        addExerciseToTrainingList,
        deleteExerciseFromTrainingList,
      }}
    >
      {children}
    </TrainingContext.Provider>
  );
}

function useTraining() {
  const context = useContext(TrainingContext);
  if (context === undefined)
    throw new Error("This context was used outside of the provider");
  return context;
}

export { TrainingContextProvider, useTraining };
