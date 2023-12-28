import Header from "./src/routes/Header";
import MobileHeader from "./src/routes/MobileHeader";
import Footer from "./src/routes/Footer";
import router from "./src/routes/index";
// import Write from "./src/routes/Write";
import "./src/style.scss";

const appEl = document.querySelector("#app");
const header = new Header().el;
const mobileHeader = new MobileHeader().el;
const footer = new Footer().el;
// const write = new Write().el;
const routerView = document.createElement("main");
appEl.append(header, mobileHeader, routerView, footer);
router();
