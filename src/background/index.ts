import { browser } from "webextension-polyfill-ts";

browser.action.onClicked.addListener((tab) => {
  browser.tabs.sendMessage(tab.id!, { text: "buttonClicked" });
});
