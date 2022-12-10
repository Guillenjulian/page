export function initstep1(params) {
  const div = document.createElement("div");
  div.innerHTML = `
         <h1> Pagina 2 </h1>
       
           `;
  div.addEventListener("click", () => {
    params.goTo("/thankyou");
  });
  return div;
}
