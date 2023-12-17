import { useExercises } from "../contexts/ExercisesContext";
import { useModal } from "../contexts/ModalContext";

function ModalExercise({ id }) {
  const { setModalIsOpen } = useModal();
  const { sortedExercises } = useExercises();
  const activeExercise = sortedExercises.find((el) => el.id === id);
  console.log(activeExercise);
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
          {activeExercise.instructions.map((el, i) => (
            <p>
              {i + 1} - {el}
            </p>
          ))}
        </div>
        <div className="mt-7 flex items-center justify-between gap-4">
          <button className="dark:highlight-white/20 flex h-12 w-full items-center justify-center rounded-lg bg-slate-900 px-3 font-semibold text-white hover:bg-slate-700 focus:outline-none  dark:bg-sky-500 dark:hover:bg-sky-400 ">
            + ADD TO TRAINING
          </button>
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
