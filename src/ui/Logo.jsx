import { useState } from "react";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function Logo() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <span
      className="text-center text-sm font-extrabold tracking-tight cursor-pointer"
      onClick={() => setIsClicked((isClicked) => !isClicked)}
    >
      {isClicked ? shuffle(["L", "O", "G", "O"]) : "LOGO"}
    </span>
  );
}

export default Logo;
