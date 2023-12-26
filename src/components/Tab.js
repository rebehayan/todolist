import { Component } from "../core/core";

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

    const tabBtnEl = this.el.querySelectorAll("button");
    const removeClass = () => {
      tabBtnEl.forEach((el) => {
        el.classList.remove("--active");
      });
    };

    tabBtnEl.forEach((el) => {
      el.addEventListener("click", (event) => {
        const txt = el.textContent.toLowerCase();
        console.log(txt);
        removeClass();
        el.classList.add("--active");
      });
    });
  }
}
