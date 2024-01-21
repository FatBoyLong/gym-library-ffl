import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HistoryPage from "./pages/HistoryPage";
import Home from "./pages/Home";
import TrainingPage from "./pages/TrainingPage";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [{ path: "/", element: <Home /> }],
  },
  { element: <TrainingPage />, path: "training" },
  { element: <HistoryPage />, path: "history" },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
