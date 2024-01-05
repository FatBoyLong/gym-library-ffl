import { useState } from "react";

import Counter from "./Counter";

import { IoCaretDown } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { useTraining } from "../contexts/TrainingContext";

function TrainingExercise({ exercise }) {
  const [isClicked, setIsClicked] = useState(false);
  const { deleteExerciseFromTrainingList } = useTraining();

  function handleToggleExercise() {
    setIsClicked((isClicked) => !isClicked);
  }

  return (
    <div className="flex flex-col gap-2 px-2 py-4">
      <div className="flex items-center gap-3">
        <img
          src={exercise.gifUrl}
          className="h-10 rounded-md"
          alt={exercise.name}
        />
        <h2 className="grow uppercase">{exercise.name}</h2>
        <div
          className="flex items-center gap-2 rounded-full bg-slate-200/60 px-4 py-1 text-center font-medium dark:bg-slate-800"
          onClick={handleToggleExercise}
        >
          <span>Sets`n`reps</span>
          <span
            className={`transition-transform duration-300 ${
              isClicked ? "rotate-180" : ""
            }`}
          >
            <IoCaretDown />
          </span>
        </div>
        <FaTrashAlt
          className="shrink-0 grow-0 text-xl text-inherit"
          onClick={() => deleteExerciseFromTrainingList(exercise)}
        />
      </div>
      {isClicked && <Counter exercise={exercise} />}
    </div>
  );
}

export default TrainingExercise;
