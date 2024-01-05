import { useState } from "react";
import Button from "./Button";

function Counter({ exercise }) {
  const [setsCounter, setSetsCounter] = useState(exercise.sets);
  const [repsCounter, setRepsCounter] = useState(exercise.reps);

  if (setsCounter < 0) setSetsCounter(0);
  if (repsCounter < 0) setRepsCounter(0);

  exercise.sets = setsCounter;
  exercise.reps = repsCounter;

  function handleIncSets() {
    setSetsCounter((num) => num + 1);
  }

  function handleDecSets() {
    setSetsCounter((num) => num - 1);
  }

  function handleIncReps() {
    setRepsCounter((num) => num + 1);
  }

  function handleDecReps() {
    setRepsCounter((num) => num - 1);
  }

  console.log(exercise);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center justify-center  gap-2 rounded-md">
          <p className="text-md font-semibold uppercase">Sets</p>
          <Button type="counter" onClick={handleDecSets}>
            -
          </Button>
          <span className="font-medium text-inherit">{setsCounter}</span>
          <Button type="counter" onClick={handleIncSets}>
            +
          </Button>
        </div>

        <div className="flex items-center justify-center  gap-2 rounded-md">
          <p className="text-md font-semibold uppercase">Reps</p>
          <Button type="counter" onClick={handleDecReps}>
            -
          </Button>
          <span className="font-medium text-inherit">{repsCounter}</span>
          <Button type="counter" onClick={handleIncReps}>
            +
          </Button>
        </div>
      </div>
      <Button disabled={setsCounter === 0 || repsCounter === 0}>
        Complete
      </Button>
    </div>
  );
}

export default Counter;
