"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIENT_ENTRY_PATH = exports.DEFAULT_HTML_PATH = exports.PACKAGE_ROOT = void 0;
/*
 * @Author: hidetodong
 * @Date: 2022-11-16 23:11:41
 * @LastEditTime: 2022-11-16 23:37:28
 * @LastEditors: hidetodong
 * @Description:
 * @FilePath: /hidetoxic-ssg/src/node/constants/index.ts
 * HIDETOXIC - 版权所有
 */
const path_1 = require("path");
exports.PACKAGE_ROOT = (0, path_1.join)(__dirname, "..", "..", "..");
exports.DEFAULT_HTML_PATH = (0, path_1.join)(exports.PACKAGE_ROOT, "template.html");
exports.CLIENT_ENTRY_PATH = (0, path_1.join)(exports.PACKAGE_ROOT, "src", "runtime", "client-entry.tsx");
