import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import TrainingPage from "./pages/TrainingPage";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [{ path: "/", element: <Home /> }],
  },
  { element: <TrainingPage />, path: "training" },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
