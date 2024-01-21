import { useHistory } from "../contexts/HistoryContext";

import Button from "../ui/Button";
import DeleteHistoryButton from "../ui/DeleteHistoryButton";

import { FaTrashAlt } from "react-icons/fa";

function HistoryPage() {
  const { history, handleDeleteFromHistory } = useHistory();

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] gap-4 px-4 pb-4 pt-7">
      <Button to={-1}>&larr; BACK</Button>
      <div className="flex flex-col gap-2 overflow-scroll">
        {history.map((el) => (
          <div
            className="text-l flex items-center justify-between gap-4 rounded-md  bg-slate-200/60 px-2 py-1 text-center font-medium dark:bg-slate-800"
            key={el.identificator}
          >
            <img src={el.gifUrl} alt={el.name} className="h-10 rounded-md" />
            <p className="basis-1/4 text-sm uppercase">
              {el.name.length > 15 ? `${el.name.slice(0, 15)}...` : el.name}
            </p>
            <div className="shrink-0 grow-0">
              <div className="flex items-center gap-2">
                <span>Sets</span>
                <span>{el.sets}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Reps</span>
                <span>{el.reps}</span>
              </div>
            </div>
            <p className="shrink-0 grow-0">{`${el.date.day}.${
              el.date.month <= 9 ? "0" + el.date.month : el.date.month
            }.${el.date.year}`}</p>
            <FaTrashAlt
              className="shrink-0 grow-0 text-xl text-inherit "
              onClick={() => {
                handleDeleteFromHistory(el);
              }}
            />
          </div>
        ))}
      </div>
      {history.length > 0 && (
        <DeleteHistoryButton>Clear all history</DeleteHistoryButton>
      )}
    </div>
  );
}

export default HistoryPage;
