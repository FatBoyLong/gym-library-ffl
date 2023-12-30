import { useState } from "react";

import { IoCaretDown } from "react-icons/io5";
import Counter from "./Counter";

function TrainingExercise({ imgUrl, name }) {
  const [isClicked, setIsClicked] = useState(false);
  function handleToggleExercise() {
    setIsClicked((isClicked) => !isClicked);
  }

  return (
    <div className="flex flex-col gap-2 px-2 py-2">
      <div className="flex items-center gap-2 ">
        <img src={imgUrl} className="h-10 rounded-md" alt={name} />
        <h2 className="grow uppercase">{name}</h2>
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
      </div>
      {isClicked && (
        <div className="flex items-center justify-between py-2">
          <Counter name="sets" />
          <Counter name="reps" />
        </div>
      )}
    </div>
  );
}

export default TrainingExercise;
