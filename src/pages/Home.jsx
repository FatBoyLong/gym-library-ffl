import { useExercises } from "../contexts/ExercisesContext";
import ExerciseCard from "../ui/ExerciseCard";
import { useSearchParams } from "react-router-dom";
import { useModal } from "../contexts/ModalContext";

import { FaCar } from "react-icons/fa";

function Home() {
  const { sortedExercises, query } = useExercises();
  const [params, setParams] = useSearchParams();
  const { setModalIsOpen } = useModal();

  if (!query)
    return (
      <p className="flex items-center justify-center">
        Start searching your exercises,{" "}
        <span className="pl-1 text-2xl text-inherit">
          <FaCar />
        </span>
      </p>
    );

  return (
    <div className="flex flex-col items-center gap-3 overflow-scroll">
      {sortedExercises.map((el) => (
        <ExerciseCard
          isActive={el.id === params.get("id")}
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
