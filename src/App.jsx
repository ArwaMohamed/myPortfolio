import "./App.css";
import MasterLayout from "./components/MasterLayout/MasterLayout";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Experience from "./components/Experience/Experience";
import NotFound from "./components/NotFound/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      errorElement:<NotFound/>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "skills", element: <Skills /> },
        { path: "work", element: <Work /> },
        { path: "experience", element: <Experience /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
