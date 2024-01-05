import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";


function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center gap-2">
      <p>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </p>
      <div className="flex items-center gap-2">
        <button
          className="rounded-full bg-slate-200/60 p-1 disabled:opacity-20 dark:bg-slate-800"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <HiChevronLeft className="text-2xl text-inherit" />
        </button>
        <button
          className="rounded-full bg-slate-200/60 p-1 disabled:opacity-20 dark:bg-slate-800"
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <HiChevronRight className="text-2xl text-inherit" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
