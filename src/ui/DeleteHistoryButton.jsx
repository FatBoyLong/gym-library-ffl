import { useState } from "react";
import { useHistory } from "../contexts/HistoryContext";

function DeleteHistoryButton({ children }) {
  const [isClicked, setIsClicked] = useState(false);
  const { setHistory } = useHistory();

  function toggleClick() {
    setIsClicked((click) => !click);
  }

  return (
    <>
      {!isClicked && (
        <button
          className="dark:highlight-white/20 relative flex h-12  grow-0 items-center justify-center rounded-lg bg-red-400 px-3 font-semibold text-white focus:outline-none disabled:opacity-25  dark:bg-red-400 dark:hover:bg-red-400"
          onClick={toggleClick}
        >
          {children}
        </button>
      )}
      {isClicked && (
        <div
          className={`dark:highlight-white/20 relative flex h-12  grow-0 items-center justify-between rounded-lg bg-red-400 px-3 font-semibold text-white focus:outline-none disabled:opacity-25  dark:bg-red-400 dark:hover:bg-red-400`}
        >
          <span>Sure?</span>
          <div className="flex gap-5">
            <button
              className="rounded-lg border border-inherit px-6 py-0.5"
              onClick={() => {
                setHistory([]);
                toggleClick();
              }}
            >
              Yes
            </button>
            <button
              className="rounded-lg border border-inherit px-6 py-0.5"
              onClick={toggleClick}
            >
              No
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteHistoryButton;
