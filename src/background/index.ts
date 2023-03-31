import { action, tabs } from "webextension-polyfill";

action.onClicked.addListener((tab) => {
  tabs.sendMessage(tab.id!, { text: "buttonClicked" });
});
