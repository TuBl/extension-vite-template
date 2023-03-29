import React from "react";
import { browser } from "webextension-polyfill-ts";


const App: React.FC = () => {
  const handleClick = () => {
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id!, { text: "buttonClicked" });
    });
  };

  return (
    <div>
      <h1>My Vite React Extension</h1>
      <p>Click the button to change the background color.</p>
      <button onClick={handleClick}>Change Background Color</button>
    </div>
  );
};

export default App;
