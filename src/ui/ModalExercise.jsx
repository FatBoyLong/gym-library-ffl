import { useExercises } from "../contexts/ExercisesContext";
import { useModal } from "../contexts/ModalContext";
import { useTraining } from "../contexts/TrainingContext";

function ModalExercise({ id }) {
  const { setModalIsOpen } = useModal();
  const { sortedExercises } = useExercises();
  const activeExercise = sortedExercises.find((el) => el.id === id);
  const {
    trainingList,
    addExerciseToTrainingList,
    deleteExerciseFromTrainingList,
  } = useTraining();

  if (!activeExercise) return null;

  const isIdAdded = trainingList.find((el) => el.id === id);

  return (
    <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm ">
      <div className=" flex w-5/6 flex-col gap-2 rounded-md border bg-white px-4 py-5 dark:bg-slate-900">
        <h1 className="text-l font-bold">
          {activeExercise.name.toUpperCase()}
        </h1>
        <img
          className="h-auto object-contain"
          src={activeExercise.gifUrl}
          alt={activeExercise.name}
        />
        <div className="h-44 overflow-scroll">
          <h2 className=" text-lg font-bold">Technique:</h2>
          {activeExercise.instructions.map((el, i) => (
            <p key={i}>
              {i + 1} - {el}
            </p>
          ))}
        </div>
        <div className="mt-7 flex items-center justify-between gap-4">
          {!isIdAdded && (
            <button
              className="dark:highlight-white/20 flex h-12 w-full items-center justify-center rounded-lg bg-slate-900 px-3 font-semibold text-white hover:bg-slate-700 focus:outline-none  dark:bg-sky-500 dark:hover:bg-sky-400 "
              onClick={() => {
                addExerciseToTrainingList(activeExercise);
              }}
            >
              + ADD TO TRAINING
            </button>
          )}
          {isIdAdded && (
            <button
              className="dark:highlight-white/20 flex h-12 w-full items-center justify-center rounded-lg bg-slate-900 px-3 font-semibold text-white hover:bg-slate-700 focus:outline-none  dark:bg-sky-500 dark:hover:bg-sky-400 "
              onClick={() => {
                deleteExerciseFromTrainingList(activeExercise);
              }}
            >
              REMOVE FROM TRAINING
            </button>
          )}
          <button
            className="rounded-lg border px-3 py-2 text-inherit"
            onClick={() => {
              setModalIsOpen(false);
            }}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalExercise;
