# ⚡ extension-vite-template

A sleek starter template to build **Chrome Extensions** using modern tools: **Vite**, **React**, and **TypeScript** — ditch plain HTML/JS setups and ship extensions the modern way.

> 🧠 Made with ❤️ by [@TuBl](https://github.com/TuBl)

---

## ✨ Features

- ✅ Powered by **[Vite](https://vitejs.dev/)** – lightning-fast bundling & HMR
- ⚛️ Write UI with **React + TypeScript**
- 📦 Supports:
  - Popup
  - Options Page
  - Background Scripts
  - Content Scripts
- 🌗 Easily extend with **TailwindCSS**, **Prettier**, or other tools
- 🧱 Ready for **Manifest V3**
- 🔥 Hot-reload support during development

---

## 🧠 Why This Template?

Chrome extensions don't have to feel like coding in 2010. This template gives you modern DX:

- Modular source structure
- Componentized UI in popup/options
- React + JSX instead of vanilla DOM
- Type-safe background/content scripts
- Fast iteration with Vite’s dev server

---

## 🗂 Project Structure

```
extension-vite-template/
├── public/               # Static assets incl. icons + manifest
├── src/
│   ├── background/       # Background script
│   ├── content/          # Content script (injected into web pages)
│   ├── popup/            # React-powered popup UI
│   └── options/          # React-powered options page
├── manifest.json         # Chrome Extension Manifest v3
├── vite.config.ts        # Vite config w/ multiple entry points
└── tsconfig.json
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/TuBl/extension-vite-template.git
cd extension-vite-template
pnpm install        # or npm/yarn
pnpm dev            # Start dev build & watch mode
```

Then:

1. Visit `chrome://extensions`
2. Enable **Developer Mode**
3. Click **Load Unpacked**
4. Select the `dist/` folder

✅ You’re up and running!

---

## 🛠 Build for Production

```bash
pnpm build
```

This will create a clean `dist/` folder ready for submission or packaging.

---

## 🧩 Vite Setup

The `vite.config.ts` uses [multiple entry points](https://vitejs.dev/guide/build.html#multi-page-app) to bundle:

- `popup/index.html`
- `options/index.html`
- `background.ts`
- `content.ts`

Each entry builds independently, and you can add more scripts or pages as needed.

---

## 🧪 Example Scripts

### Background Script

```ts
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed!');
});
```

### Content Script

```ts
console.log('Hello from content script!');
document.body.style.border = '4px solid hotpink';
```

---

## 🧰 Recommended Add-ons

- [TailwindCSS](https://tailwindcss.com/) for styling
- [@crxjs/vite-plugin](https://www.npmjs.com/package/@crxjs/vite-plugin) for Vite-native CRX packaging
- [web-ext](https://github.com/mozilla/web-ext) for auto-reloading the extension during development

---

## 🧑‍💻 Author

Built by [@TuBl](https://github.com/TuBl)

If this helped you, feel free to ⭐️ the repo!

---

## 📃 License

[MIT](LICENSE)
