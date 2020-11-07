import Home from "./views/Home/home.component";
import Opportunities from "./views/Opportunities/opportunities.component";
import Projects from "./views/Projects/projects.component";
import Proposals from "./views/Proposals/proposals.component";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    id: "home",
  },
  {
    path: "/opportunities",
    name: "Opportunities",
    component: Opportunities,
    id: "opportunities",
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    id: "projects",
  },
  {
    path: "/proposals",
    name: "Proposals",
    component: Proposals,
    id: "proposals",
  },
  // {
  //   path: "/opportunities",
  //   name: "Opportunities",
  //   component: Opportunities,
  //   id: "opportunities",
  // },
  // {
  //   path: "/opportunities",
  //   name: "Opportunities",
  //   component: Opportunities,
  //   id: "opportunities",
  // },
  // {
  //   path: "/opportunities",
  //   name: "Opportunities",
  //   component: Opportunities,
  //   id: "opportunities",
  // },
  // {
  //   path: "/opportunities",
  //   name: "Opportunities",
  //   component: Opportunities,
  //   id: "opportunities",
  // },
];
export default routes;
