import { useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { useExercises } from "../contexts/ExercisesContext";

import { useSearchParams } from "react-router-dom";

function SearchBar() {
  const { query, setQuery, isLoading: isLoadingExercises } = useExercises();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(
    function () {
      if (!query) {
        searchParams.delete("page");
        setSearchParams(searchParams);
      }
    },
    [query, searchParams, setSearchParams],
  );

  return (
    <div className="dark:highlight-white/5 flex items-center gap-1 rounded-md px-3 py-1 text-sm leading-6 text-slate-400 shadow-sm ring-1 ring-slate-900/10  hover:ring-slate-300 focus:outline-none dark:bg-slate-800 dark:text-slate-300 dark:ring-0 dark:hover:bg-slate-700">
      {isLoadingExercises ? (
        <p className="text-inherit">Loading exercises...</p>
      ) : (
        <>
          <HiOutlineSearch className="h-4 w-4 text-slate-400 " />
          <input
            placeholder="Search exercises"
            className=" text-inherit focus:outline-none  dark:bg-inherit dark:text-inherit dark:hover:bg-inherit"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <HiOutlineX
              className="-ml-5 h-4 w-4 text-slate-400"
              onClick={() => setQuery("")}
            />
          )}
        </>
      )}
    </div>
  );
}

export default SearchBar;
