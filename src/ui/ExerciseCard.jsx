function ExerciseCard({ imgUrl, exerciseName, onClick }) {
  return (
    <div
      className="flex w-72 cursor-pointer justify-between gap-2 rounded-xl border px-2 py-2 dark:border-slate-400"
      onClick={onClick}
    >
      <img
        src={imgUrl}
        alt={exerciseName}
        className="h-16 rounded-xl object-cover"
      />
      <div className="flex">
        <h1 className="text-xs uppercase">{exerciseName}</h1>
      </div>
    </div>
  );
}

export default ExerciseCard;
