import Navigo from "navigo";
import { Error } from "../Error";

const routerNav = new Navigo("/", { linksSelector: "a" });
const app = document.querySelector("#app");

const render = (app, html) => {
  app.innerHTML = html;
};

export const router = (pathList, defaultLayout) => {
  if (pathList.length) {
    pathList.forEach(function (item) {
      routerNav.on(item.path, (data) => {
        let html;
        if (defaultLayout) {
          html = defaultLayout();
          const pattern = /\{.*\}/g;
          html = html.replace(pattern, item.component(data));
        } else {
          html = item.component(data);
        }
        render(app, html);
      });
    });
  }
  routerNav.notFound(() => {
    render(app, Error());
  });
  routerNav.resolve();
};

window.navigate = (path) => {
  routerNav.navigate(path);
};
