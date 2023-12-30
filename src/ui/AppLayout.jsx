import { Outlet, useSearchParams } from "react-router-dom";
import { useModal } from "../contexts/ModalContext";
import Footer from "./Footer";
import Header from "./Header";
import ModalExercise from "./ModalExercise";

function AppLayout() {
  const { modalIsOpen } = useModal();
  const [params] = useSearchParams();

  return (
    <div className=" grid h-screen grid-rows-[auto_1fr_auto] gap-3 px-4 py-7 ">
      <Header />
      {<Outlet />}
      {modalIsOpen && <ModalExercise id={params.get("id")} />}
      <Footer />
    </div>
  );
}

// export async function loader() {
//   const exercises = await getExercises();
//   return { exercises };
// }

export default AppLayout;
