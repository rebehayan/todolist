import { Component } from "../core/core";
import navigationStore, { closeNavigation } from "../store/navigation";

export default class Header extends Component {
  constructor() {
    super({
      tagName: "header",
      state: {
        menus: [
          {
            name: "Home",
            href: "#/",
          },
          {
            name: "About Todo",
            href: "#/abouttodo",
          },
        ],
      },
    });
    window.addEventListener("popstate", () => {
      this.render();
    });
    navigationStore.subscribe("open", () => {
      this.render();
    });
  }
  render() {
    this.el.classList.add("header");

    this.el.innerHTML = /* html */ `
      <h1 class="logo"><a href="#/">JUSTTODO</a></h1>
      <nav>
        <ul class="gnb">
          ${this.state.menus
            .map((menu) => {
              const href = menu.href.split("?")[0];
              const hash = location.hash.split("?")[0];

              const isActive = href == hash;
              return /* html */ `
              <li>
              <a class="${isActive ? "--active" : ""}" href="${menu.href}">${menu.name}</a>
              </li>
            `;
            })
            .join("")}
        </ul>
      </nav>
    `;

    const gnbEl = this.el.querySelector(".gnb");

    // 링크 및 아이콘 생성
    const gnbItems = gnbEl.querySelectorAll("a");
    const width = window.innerWidth;

    gnbItems.forEach((el, index) => {
      el.setAttribute("data-icon", `ico${index}`);
      el.addEventListener("click", () => {
        if (width < 800) {
          closeNavigation();
        }
      });
    });

    this.mobile();
  }

  mobile() {
    const navActive = navigationStore.state.open;
    const body = document.body;

    if (navActive) {
      this.el.classList.add("active");
      body.classList.add("hidden");
    } else {
      this.el.classList.remove("active");
      body.classList.remove("hidden");
    }
  }
}
