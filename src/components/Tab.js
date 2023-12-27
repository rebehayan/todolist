import { Component } from "../core/core";
import todoStore, { filteredTodoList, changeActiveTab } from "../store/todo";

export default class Tab extends Component {
  constructor() {
    super({
      tagName: "nav",
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
      <ul class="tab-type1">
        <li><button data-status="all"><span>All</span></button></li>
        <li><button data-status="doing"><span>Doing</span></button></li>
        <li><button data-status="done"><span>Done</span></button></li>
      </ul>
    `;

    this.tabBtnEl = Array.from(this.el.querySelectorAll("button"));
    this.tabControl();
  }

  tabControl() {
    const willActiveTabButton = this.tabBtnEl.find((button) => {
      return todoStore.state.activeTab === button.dataset.status;
    });

    willActiveTabButton.classList.add("--active");

    this.tabBtnEl.forEach((el) => {
      el.addEventListener("click", () => {
        const txt = el.textContent.toLowerCase();
        changeActiveTab(txt);
        filteredTodoList(txt);
      });
    });
  }
}
