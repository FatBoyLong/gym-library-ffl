import { useTraining } from "../contexts/TrainingContext";
import Button from "./Button";

function Footer() {
  const { trainingList } = useTraining();

  return (
    <>
      {trainingList.length > 0 && (
        <footer className="mx-auto flex items-center gap-2">
          <p className="grow">{`You added ${trainingList.length} exercises to your training!`}</p>

          <Button to={"training"}>GO &rarr;</Button>
        </footer>
      )}
    </>
  );
}

export default Footer;
