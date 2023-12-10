import { useDarkMode } from "./contexts/DarkModeContext";
import DarkModeButton from "./ui/DarkModeButton";

function App() {
  const { toggleDarkMode } = useDarkMode();

  return (
    <div>
      <h1>App</h1>
      <button onClick={toggleDarkMode}>Dark Mode</button>
      <DarkModeButton />
    </div>
  );
}

export default App;
