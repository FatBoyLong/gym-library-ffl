import { useTraining } from "../contexts/TrainingContext";

import Button from "../ui/Button";
import HistoryButton from "../ui/HistoryButton";
import TrainingExercise from "../ui/TrainingExercise";

function TrainingPage() {
  const { trainingList } = useTraining();

  return (
    <div className="grid h-screen grid-rows-[auto_auto_1fr_auto] gap-4 px-4 pb-4 pt-7">
      <div className="flex justify-between">
        <Button to={-1}>&larr; BACK</Button>
        <HistoryButton />
      </div>
      <h1 className="text-center text-xl font-bold uppercase">
        your today's training
      </h1>
      <div className="flex shrink flex-col overflow-scroll">
        <div className="grid grid-cols-1 divide-y">
          {trainingList.map((el) => (
            <TrainingExercise exercise={el} key={el.id} />
          ))}
        </div>
      </div>
      <div className="  pb-5 text-center text-lg">
        <p className="rounded-full bg-slate-200/60 dark:bg-slate-800">
          Gym Library by Future Frontend Legend &copy;.
        </p>
      </div>
    </div>
  );
}

export default TrainingPage;
