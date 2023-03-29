import { browser } from "webextension-polyfill-ts";

browser.runtime.onMessage.addListener((request) => {
  if (request.text === "buttonClicked") {
    document.body.style.backgroundColor = "red";
  }
});
