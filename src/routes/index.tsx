import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Play from "./Play";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/play", element: <Play /> },
]);

export default router;
