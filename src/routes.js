import Home from "./views/Home/home.component";
import Opportunities from "./views/Opportunities/opportunities.component";

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
];
export default routes;
