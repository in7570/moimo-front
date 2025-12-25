import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

const routeList = [
  {
    path: "/",
    element: <Home />,
  },
];

const router = createBrowserRouter(
  routeList.map((item) => {
    return {
      ...item,
      element: item.element,
      //errorElement: <Error />
    };
  })
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
