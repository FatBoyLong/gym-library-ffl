import { Link } from "react-router-dom";
import { useHistory } from "../contexts/HistoryContext";

function HistoryButton() {
  const { history } = useHistory();
  const historyCount = history.length;

  return (
    <Link
      to="../history"
      className="dark:highlight-white/20 relative flex h-10  grow-0 items-center justify-center rounded-lg bg-slate-900 px-3 font-semibold text-white hover:bg-slate-700  focus:outline-none disabled:opacity-25  dark:bg-sky-500 dark:hover:bg-sky-400"
    >
      HISTORY{" "}
      {historyCount > 0 && (
        <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-300 text-center text-sm">
          {historyCount}
        </span>
      )}
    </Link>
  );
}

export default HistoryButton;
