import { useSearchParams } from "react-router-dom";

import { useExercises } from "../contexts/ExercisesContext";
import { useModal } from "../contexts/ModalContext";

import { PAGE_SIZE } from "../utils/constants";

import ExerciseCard from "../ui/ExerciseCard";
import Pagination from "../ui/Pagination";

import { FaCar } from "react-icons/fa";

function Home() {
  const { sortedExercises, query } = useExercises();
  const [searchParams, setSearchParams] = useSearchParams();
  const { setModalIsOpen } = useModal();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const from = (currentPage - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  if (!query)
    return (
      <p className="flex items-center justify-center">
        Start searching your exercises,
        <span className="pl-1 text-2xl text-inherit">
          <FaCar />
        </span>
      </p>
    );

  return (
    <div className="flex flex-col items-center gap-3 overflow-scroll">
      {sortedExercises.map((el, idx) => {
        if (idx < from || idx > to) return null;
        return (
          <ExerciseCard
            isActive={el.id === searchParams.get("id")}
            imgUrl={el.gifUrl}
            exerciseName={el.name}
            key={el.id}
            onClick={() => {
              searchParams.set("id", el.id);
              setSearchParams(searchParams);
              setModalIsOpen(true);
            }}
          />
        );
      })}

      <Pagination count={sortedExercises.length} />
    </div>
  );
}

export default Home;
