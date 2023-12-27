import Header from "./src/routes/Header";
import Footer from "./src/routes/Footer";
import router from "./src/routes/index";
// import Write from "./src/routes/Write";
import "./src/style.scss";

const appEl = document.querySelector("#app");
const header = new Header().el;
const footer = new Footer().el;
// const write = new Write().el;
const routerView = document.createElement("main");
appEl.append(header, routerView, footer);
router();
