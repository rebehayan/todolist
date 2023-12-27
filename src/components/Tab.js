import { Component } from "../core/core";
import { changeActiveTab } from "../store/todo";

export default class Tab extends Component {
  constructor() {
    super({
      tagName: "nav",
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
      <ul class="tab-type1">
        <li><button class="--active"><span>All</span></button></li>
        <li><button><span>Doing</span></button></li>
        <li><button><span>Done</span></button></li>
      </ul>
    `;

    this.tabBtnEl = this.el.querySelectorAll("button");
    this.tabControl();
  }

  tabControl() {
    this.tabBtnEl.forEach((el) => {
      el.addEventListener("click", () => {
        this.removeClass();
        const txt = el.textContent.toLowerCase();
        changeActiveTab(txt);
        el.classList.add("--active");
      });
    });
  }

  removeClass() {
    this.tabBtnEl.forEach((el) => {
      el.classList.remove("--active");
    });
  }
}
