import { Link, useNavigate } from "react-router-dom";

function Button({ children, type = "regular", onClick, to }) {
  const navigate = useNavigate();

  const base =
    "dark:highlight-white/20 flex h-10 grow-0  items-center justify-center rounded-lg bg-slate-900 px-3 font-semibold text-white hover:bg-slate-700 focus:outline-none  dark:bg-sky-500 dark:hover:bg-sky-400  ";

  const styles = {
    regular: base,
    counter:
      "dark:highlight-white/20 flex  grow-0  items-center justify-center rounded-lg bg-slate-900 text-white hover:bg-slate-700 focus:outline-none  dark:bg-sky-500 dark:hover:bg-sky-400 rounded-full h-10 w-10",
  };

  if (to === -1) {
    return (
      <Link onClick={() => navigate(to)} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
