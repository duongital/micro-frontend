import { registerApplication, start } from "single-spa";
// import "./src/web-component";

registerApplication(
  "vue",
  () => import("./src/vue/vue.app.js"),
  () => location.pathname === "" || location.pathname === "/"
);

registerApplication(
  "react",
  () => import("./src/react/main.app.js"),
  () => location.pathname === "/react"
);

start();
