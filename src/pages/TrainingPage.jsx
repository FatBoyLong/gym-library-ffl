import Button from "../ui/Button";
import ExerciseCard from "../ui/ExerciseCard";
import TrainingExercise from "../ui/TrainingExercise";

function TrainingPage() {
  const trainingExercises = JSON.parse(localStorage.getItem("trainingList"));
  console.log(trainingExercises);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] gap-4 px-4 py-7">
      <div className="flex justify-between">
        <Button to={-1}>&larr; BACK</Button>
        <Button>HISTORY</Button>
      </div>

      <div className="flex shrink flex-col py-2 ">
        <h1 className="mb-4 text-center text-xl font-bold uppercase">
          your today's training
        </h1>
        <div className="grid grid-cols-1 divide-y">
          {trainingExercises.map((el) => (
            <TrainingExercise imgUrl={el.gifUrl} name={el.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrainingPage;
