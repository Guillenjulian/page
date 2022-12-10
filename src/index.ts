import { initHeader } from "./component/header";
import { initTitle } from "./component/titel";
import { initText } from "./component/text";
import { initSubtitel } from "./component/subtitulo";
import { initButon } from "./component/button";
import { initFooter } from "./component/footer";
import { initinput } from "./component/input";

import { initRouter } from "./router";

import { initthankyou } from "./pages/thankyou";
import { initstep1 } from "./pages/step-1";
import { initPageWelcome } from "./pages/welcome";

(function main() {
  const root = document.querySelector(".root");
  const params = location.pathname;
  //console.log(params);
  initPageWelcome(params);
  //console.log(params, " este es el main");

  // if (location.pathname == "/welcome") {
  // }
  // if (location.pathname == "/step-1") {
  //   initstep1(params);
  // }
  // if (location.pathname == "/thankyou") {
  //   initthankyou(params);
  // }

  initHeader();
  initTitle();
  initText();
  initSubtitel();
  initinput();
  initButon();
  initFooter();

  initRouter(root);
})();
