import Albums from "../components/Pages/Albums/Albums";
import Browse from "../components/Pages/Browse/Browse";
import Home from "../components/Pages/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/browse',
        element: <Browse></Browse>
      },
      {
        path: '/albums',
        element: <Albums></Albums>
      },

    ]
  }
])

export default router;