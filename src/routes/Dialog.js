import { Component } from "../core/core";

export default class Dialog extends Component {
  constructor(title, content) {
    super({
      tagName: "dialog",
      title: title,
      content: content,
    });
  }

  render() {
    this.el.classList.add("alert");
    this.el.setAttribute("open", "");
    this.el.innerHTML = /* html */ `
      <div class="alert__title">${this.state.title}</div>
      <div class="alert__content">${this.state.content}</div>
      <div class="alert__btns"><button class="btn large white close">확인</button></div>
      `;

    const closeEl = this.el.querySelector(".btn.close");

    closeEl.addEventListener("click", () => {
      this.el.close();
    });
  }
}
