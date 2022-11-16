"use strict";
/*
 * @Author: hidetodong
 * @Date: 2022-11-16 23:02:24
 * @LastEditTime: 2022-11-16 23:34:19
 * @LastEditors: hidetodong
 * @Description:
 * @FilePath: /hidetoxic-ssg/src/node/dev.ts
 * HIDETOXIC - 版权所有
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDevServer = void 0;
const vite_1 = require("vite");
const indexHtml_1 = require("./plugin-hidetoxic-ssg/indexHtml");
const plugin_react_1 = require("@vitejs/plugin-react");
async function createDevServer(root = process.cwd()) {
    return (0, vite_1.createServer)({
        root,
        plugins: [(0, indexHtml_1.pluginIndexHtml)(), (0, plugin_react_1.default)()]
    });
}
exports.createDevServer = createDevServer;
