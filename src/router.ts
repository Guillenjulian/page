import { initthankyou } from "./pages/thankyou";
import { initstep1 } from "./pages/step-1";
import { initPageWelcome } from "./pages/welcome";

const routes = [
  {
    path: /\/thankyou/,
    component: initthankyou,
  },
  {
    path: /\/step-1/,
    component: initstep1,
  },
  {
    path: /\//,
    component: initPageWelcome,
  },
];

export function initRouter(conteiner: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handelRoute(path);
  }
  function handelRoute(route) {
    console.log("en el HandelRoute" + route);

    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });
        if (conteiner.firstChild) {
          conteiner.firstChild.remove();
        }
        conteiner.appendChild(el);
      }
    }
  }
  if (location.pathname == "/") {
    goTo("/welcome");
  } else handelRoute(location.pathname);

  window.onpopstate = () => {
    handelRoute(location.pathname);
  };
}
