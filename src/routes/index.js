import { createRouter } from "../core/core";
import Home from "./Home";
import About from "./About";

export default createRouter([
  {
    path: "#/",
    component: Home,
  },
  {
    path: "#/abouttodo",
    component: About,
  },
]);
