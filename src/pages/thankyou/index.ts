export function initthankyou(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <header-element></header-element> 

       <h1> thankyou </h1>
 <footer-element></footer-element>
     
         `;
  div.addEventListener("click", () => {
    params.goTo("/welcome");
  });
  return div;
}
