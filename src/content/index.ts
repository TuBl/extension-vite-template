import { runtime } from "webextension-polyfill";

runtime.onMessage.addListener((request) => {
  if (request.text === "buttonClicked") {
    document.body.style.backgroundColor = "red";
  }
});
