import { Component } from "../core/core";

export default class Dialog extends Component {
  constructor({ container, title, content }) {
    super({
      tagName: "dialog",
      state: {
        container,
        title,
        content,
      },
    });
  }

  render() {
    this.state.container.append(this.el);
    this.el.classList.add("alert");
    this.el.innerHTML = /* html */ `
      <div class="alert__title">${this.state.title}</div>
      <div class="alert__content">${this.state.content}</div>
      <div class="alert__btns"><button class="btn large white close">확인</button></div>
    `;

    const closeEl = this.el.querySelector(".close");

    closeEl.addEventListener("click", () => {
      this.el.close();
    });
    // closeEl.addEventListener("click", this.close.bind(this));
  }

  open() {
    this.el.show();
  }

  close() {
    this.el.close();
  }
}
