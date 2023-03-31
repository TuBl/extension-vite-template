import React from "react";
import { tabs as browserTabs } from "webextension-polyfill";

const App: React.FC = () => {
  const handleClick = () => {
    browserTabs.query({ active: true, currentWindow: true }).then((tabs) => {
      browserTabs.sendMessage(tabs[0].id!, { text: "buttonClicked" });
    });
  };

  return (
    <div>
      <h1>My Vite React Extension</h1>
      <p>Click the button to change the background color.</p>
      <button onClick={handleClick}>Change Background Color 2</button>
    </div>
  );
};

export default App;

