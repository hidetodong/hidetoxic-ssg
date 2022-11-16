"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/*
 * @Author: hidetodong
 * @Date: 2022-11-16 23:16:07
 * @LastEditTime: 2022-11-16 23:24:57
 * @LastEditors: hidetodong
 * @Description:
 * @FilePath: /hidetoxic-ssg/src/runtime/client-entry.tsx
 * HIDETOXIC - 版权所有
 */
const client_1 = require("react-dom/client");
const App_1 = require("./App");
function renderInBrowser() {
    const containerEl = document.getElementById("root");
    if (!containerEl) {
        throw new Error("#root element not found");
    }
    console.log(client_1.createRoot);
    (0, client_1.createRoot)(containerEl).render((0, jsx_runtime_1.jsx)(App_1.App, {}));
}
renderInBrowser();
