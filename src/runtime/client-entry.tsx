/*
 * @Author: hidetodong
 * @Date: 2022-11-16 23:16:07
 * @LastEditTime: 2022-11-16 23:24:57
 * @LastEditors: hidetodong
 * @Description:
 * @FilePath: /hidetoxic-ssg/src/runtime/client-entry.tsx
 * HIDETOXIC - 版权所有
 */

import { createRoot } from 'react-dom/client'
import { App } from "./App";

function renderInBrowser() {
  const containerEl = document.getElementById("root");
  if (!containerEl) {
    throw new Error("#root element not found");
  }
  console.log(createRoot)
  createRoot(containerEl).render(<App />);
}

renderInBrowser();
