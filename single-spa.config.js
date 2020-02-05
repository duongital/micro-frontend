import { registerApplication, start } from "single-spa";
import "./apps/styles/index.css";

registerApplication(
  "vue",
  () => import("./apps/vue/vue.app.js"),
  () => location.pathname === "" || location.pathname === "/"
);

registerApplication(
  "react",
  () => import("./apps/react/main.app.js"),
  () => location.pathname.includes('react')
);

registerApplication(
  "angular",
  () => import("./apps/angular/angular.app.js"),
  () => location.pathname.includes('angular')
)

start();
