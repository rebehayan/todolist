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
  // {
  //   path: "#/notes",
  //   component: Notes,
  // },
  // {
  //   path: "#/projectplans",
  //   component: ProjectPlans,
  // },
  // {
  //   path: "#/dayplans",
  //   component: DayPlans,
  // },
  // {
  //   path: "#/sideprojecpPlans",
  //   component: SideProjectPlans,
  // },
  // {
  //   path: "#/reminder",
  //   component: Reminder,
  // },
  // {
  //   path: "#/bin",
  //   component: Bin,
  // },
  // {
  //   path: "#/notes",
  //   component: Notes,
  // },
]);
