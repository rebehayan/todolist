import { Component } from "../core/core";

export default class Header extends Component {
  constructor() {
    super({
      tagName: "header",
    });
  }
  render() {
    const nav = [
      {
        title: "Notes",
        action: (event) => {
          event.preventDefault();
          console.log("test");
        },
      },
      {
        title: "NoteBooks",
        action: (el) => {
          el.preventDefault();
        },
        submenus: [
          {
            title: "Project Plans",
            action: () => {},
          },
          {
            title: "Day Plans",
            action: () => {},
          },
          {
            title: "Side Project Plans",
            action: () => {},
          },
        ],
      },
      {
        title: "Reminder",
        action: () => {},
      },
      {
        title: "Bin",
        action: () => {},
      },
      {
        title: "Notes",
        action: () => {},
      },
    ];
    this.el.classList.add("header");
    this.el.innerHTML = /* html */ `
      <h1 class="logo"><a href="#/">MyToDo</a></h1>
      <nav class="gnb">
      </nav>
    `;

    const gnbEl = this.el.querySelector(".gnb");

    const Gnb = (nav) => {
      const gnbEl = document.createElement("ul");
      nav.forEach((item) => {
        const navItem = document.createElement("li");
        const navLink = document.createElement("a");
        const navText = document.createTextNode(item.title);

        navItem.append(navLink);
        navLink.append(navText);

        if (item.submenus && item.submenus.length > 0) {
          navItem.append(Gnb(item.submenus));
        }
        if (item.action) {
          navLink.addEventListener("click", item.action);
        }
        gnbEl.append(navItem);
      });

      return gnbEl;
    };

    gnbEl.append(Gnb(nav));

    // 링크 및 아이콘 생성
    const gnbItems = gnbEl.querySelectorAll("a");
    gnbItems.forEach((el, index) => {
      el.setAttribute("href", "");
      el.setAttribute("data-icon", `ico${index}`);
    });
  }
}
