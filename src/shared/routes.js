import Home from "../components/home";
import Contact from "../components/contact";
import BlockChain from "../components/services/blockchain";

const routes = [
  {
    component: Home,
    exact: true,
    path: "/"
  },
  {
    component: Contact,
    path: "/contact"
  }, {
    component: BlockChain,
    path: "/services/business-services/blockchain"
  }
];

export default routes;
