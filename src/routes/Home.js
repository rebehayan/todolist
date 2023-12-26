import { Component } from "../core/core";
import todoStore from "../store/todo";
import Todolist from "../components/Todolist";
import Write from "./Write";
import Tab from "../components/Tab";

export default class Home extends Component {
  constructor() {
    super();
    todoStore.subscribe("todoItems", () => {
      this.render();
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
    <section class="notes">
      <h2 class="heading regular">My TodoList</h2>
      <ul class="notes-list">
      </ul>
    </section>
    `;

    const write = new Write().el;
    const tab = new Tab().el;
    const noteListEl = this.el.querySelector(".notes-list");

    this.el.prepend(write);
    noteListEl.before(tab);

    console.log(todoStore.state.todoItems);
    noteListEl.append(
      ...todoStore.state.todoItems.map((todo) => {
        return new Todolist({ todo }).el;
      })
    );
  }
}
