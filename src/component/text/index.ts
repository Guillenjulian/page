export function initText() {
  class Text extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });

      const label = this.getAttribute("label");
      const div = document.createElement("div");
      const style = document.createElement("style");

      div.classList.add("root");

      div.innerHTML = `
        <p class = "p">
        ${label}
        </p>
        `;

      style.innerHTML = `
        
      .p{
        font-size: 18px;
        font-weight: 400;
        color:  #000000;
        text-align: left;
        margin: auto;
        width: 50%;
        margin-bottom: 50px;
      }
          `;
      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("text-custon", Text);
}
