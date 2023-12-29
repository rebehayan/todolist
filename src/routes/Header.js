import { Component } from "../core/core";

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
        // navActive,
      },
    });
    window.addEventListener("popstate", () => {
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
    gnbItems.forEach((el, index) => {
      el.setAttribute("data-icon", `ico${index}`);
    });
  }

  mobile(navActive) {
    const headerEl = this.el;
    if (navActive) {
      console.log(this.el);
      headerEl.classList.add("active");
    } else {
      console.log(this.el);
      headerEl.classList.remove("active");
    }
  }
}
