import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/Home.jsx";
import Generator from "./routes/Generator/Generator.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/generator",
      element: <Generator />
    }
  ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
