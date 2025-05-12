import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Play from "./Play";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/play", element: <Play mode="cpu" /> },
  { path: "/vs", element: <Play mode="vs" /> },
]);

export default router;
