import { Component } from "../core/core";
import insertTodo, { writeTodo } from "../store/todo";
import Dialog from "../routes/Dialog";

export default class Write extends Component {
  constructor() {
    super({
      tagName: "section",
    });
    insertTodo.subscribe("title", () => {
      this.render();
    });
  }
  render() {
    this.el.classList.add("write");

    this.el.innerHTML = /* html */ `
      <input type="text" title="input plan" placeholder="Write Your Title / Write your Plan" value="${insertTodo.state.title}" />
      <button class="btn-submit" aria-label="submit"></button>
      `;
    const inputEl = this.el.querySelector("input");
    const btnEl = this.el.querySelector(".btn-submit");
    const dialog = new Dialog({
      container: this.el,
      title: "Error",
      content: "Todo 내용이 잘못되었습니다. 다시 입력해 주세요.",
    });

    inputEl.value = "";
    const sendData = () => {
      const value = inputEl.value;
      if (value.includes("/")) {
        insertTodo.state.title = inputEl.value;
        writeTodo();
      } else {
        dialog.open();
      }
    };

    btnEl.addEventListener("click", sendData);
    inputEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        sendData();
      }
    });
  }
}
