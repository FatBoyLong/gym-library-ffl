import { useDarkMode } from "../contexts/DarkModeContext";
import { HiOutlineSun } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";

function DarkModeButton() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineMoon className="h-6 w-6" />
      ) : (
        <HiOutlineSun className="h-6 w-6" />
      )}
    </button>
  );
}

export default DarkModeButton;
