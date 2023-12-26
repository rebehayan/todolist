import { Component } from "../core/core";
import insertTodo, { WriteTodo } from "../store/todo";

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
      <input type="text" title="input plan" placeholder="Write Your Plan" value="${insertTodo.state.title}" />
      <button class="btn-submit" aria-label="submit"></button>
    `;
    const inputEl = this.el.querySelector("input");

    inputEl.addEventListener("input", () => {
      insertTodo.state.title = inputEl.value;
    });
    inputEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        WriteTodo();
      }
    });
  }
}
