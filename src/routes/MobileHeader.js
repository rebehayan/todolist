import { Component } from "../core/core";
import Header from "./Header";

export default class MobileHeader extends Component {
  constructor() {
    super({
      tagName: "header",
    });
    window.addEventListener("popstate", () => {
      this.render();
    });
  }
  render() {
    this.el.classList.add("mobile-header");
    this.el.innerHTML = /* html */ `
      <h1 class="logo"><a href="#/">JUSTTODO</a></h1>
      <button class="btn-menu" aria-label="메뉴"></button>
      `;
    this.menuOpen();
  }
  menuOpen() {
    const btnMenuEl = this.el.querySelector(".btn-menu");
    let navActive = false;
    btnMenuEl.addEventListener("click", () => {
      navActive = !navActive;
      const menu = new Header({
        navActive,
      });
      menu.mobile(navActive);
    });
  }
}
