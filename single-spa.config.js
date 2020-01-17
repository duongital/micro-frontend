import { registerApplication, start } from "single-spa";

registerApplication(
  "vue",
  () => import("./apps/vue/vue.app.js"),
  () => location.pathname === "" || location.pathname === "/"
);

registerApplication(
  "react",
  () => import("./apps/react/main.app.js"),
  () => location.pathname === "/react"
);

start();
