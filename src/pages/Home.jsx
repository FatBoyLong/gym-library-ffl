import { useExercises } from "../contexts/ExercisesContext";
import ExerciseCard from "../ui/ExerciseCard";
import { useSearchParams } from "react-router-dom";
import { useModal } from "../contexts/ModalContext";

function Home() {
  const { sortedExercises, query } = useExercises();
  const [, setParams] = useSearchParams();
  const { setModalIsOpen } = useModal();
  console.log(sortedExercises);

  if (!query)
    return (
      <p className="flex items-center justify-center">
        Start searching your exercises
      </p>
    );

  return (
    <div className="flex flex-col items-center gap-3 overflow-scroll ">
      {sortedExercises.map((el) => (
        <ExerciseCard
          imgUrl={el.gifUrl}
          exerciseName={el.name}
          key={el.id}
          onClick={() => {
            setParams({ id: el.id });
            setModalIsOpen(true);
          }}
        />
      ))}
    </div>
  );
}

export default Home;
