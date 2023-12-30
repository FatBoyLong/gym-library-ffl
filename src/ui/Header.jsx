import { useExercises } from "../contexts/ExercisesContext";
import DarkModeButton from "./DarkModeButton";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

function Header() {
  const { sortedExercises, query } = useExercises();

  return (
    <header className="flex flex-col gap-2">
      <div className=" flex items-center justify-between gap-3">
        <Logo />
        <SearchBar />
        <DarkModeButton />
      </div>
      {sortedExercises.length > 0 && query && (
        <span className="rounded-full bg-slate-200/60 px-4 py-1 text-center font-medium dark:bg-slate-800">
          Founded {sortedExercises.length} exercises 🎅
        </span>
      )}
      {sortedExercises.length <= 0 && query && (
        <span className="rounded-full bg-slate-200/60 px-4 py-1 text-center font-medium dark:bg-slate-800">
          No exercises found!
        </span>
      )}
    </header>
  );
}

export default Header;
