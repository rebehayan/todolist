import { Component } from "../core/core";

export default class Footer extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    this.el.classList.add("footer");
    const thisyear = new Date().getFullYear();
    this.el.innerHTML = /* html */ `
     &copy; ${thisyear} MyToDo
    `;
  }
}
