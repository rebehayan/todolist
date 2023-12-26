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
          // {
          //   name: "Notes",
          //   href: "#/notes",
          // },
          // {
          //   name: "Project Plans",
          //   href: "#/projectplans",
          // },
          // {
          //   name: "Day Plans",
          //   href: "#/dayplans",
          // },
          // {
          //   name: "Side Project Plans",
          //   href: "#/sideprojectplans",
          // },
          // {
          //   name: "Reminder",
          //   href: "#/reminder",
          // },
          // {
          //   name: "Bin",
          //   href: "#/bin",
          // },
          // {
          //   name: "Notes",
          //   href: "#/notes",
          // },
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
}
