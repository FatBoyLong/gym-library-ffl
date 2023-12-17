import DarkModeButton from "./DarkModeButton";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className=" flex items-center justify-between gap-3">
      <Logo />
      <SearchBar />
      <DarkModeButton />
    </header>
  );
}

export default Header;
