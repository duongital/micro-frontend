import { registerApplication, start } from "single-spa";

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
