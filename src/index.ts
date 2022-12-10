import { initHeader } from "./component/header";
import { initTitle } from "./component/titel";
import { initText } from "./component/text";
import { initSubtitel } from "./component/subtitulo";
import { initButon } from "./component/button";
import { initFooter } from "./component/footer";
import { initinput } from "./component/input";
import { initSelector } from "./component/selector";
import { initRetum } from "./component/retum";

import { initRouter } from "./router";

(function main() {
  const root = document.querySelector(".root");
  initRetum();
  initHeader();
  initTitle();
  initText();
  initSubtitel();
  initSelector();
  initinput();
  initButon();
  initFooter();

  initRouter(root);
})();
