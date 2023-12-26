import { Component } from "../core/core";
import insertTodo, { WriteTodo } from "../store/todo";
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
    const dialog = new Dialog("test", "sdfsdf654").el;

    const sendData = () => {
      const value = inputEl.value;
      if (value.includes("/")) {
        insertTodo.state.title = inputEl.value;
        inputEl.value = "";
        WriteTodo();
      } else {
        this.el.append(dialog);
      }
    };

    btnEl.addEventListener("click", () => {
      sendData();
    });
    inputEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        sendData();
      }
    });
  }
}
