export function initRetum() {
  class outlined extends HTMLElement {
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
       
          <div class = "div"> 
          <a class = "a" href="/">${label}</a>
        </div>
       
        `;
      style.innerHTML = `
          .root{
          display: flex;
          flex-direction: column;
        }
        .label{
          font-size:18px;
        }
        .div{
          border: 3px solid ;
         text-align: center;
         font-size: 22px;
         padding: 17px 13px;
         border :3px solid black;
         border-radius 4px;
         margin: 18px;
        }
        .a{
          text-decoration: none;
          text-align: center;
          color:black;
          font-size: 18px;
          font-weight: 500;
        }
    
        `;

      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("componet-href", outlined);
}
