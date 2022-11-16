"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/*
 * @Author: hidetodong
 * @Date: 2022-11-16 23:14:32
 * @LastEditTime: 2022-11-16 23:19:14
 * @LastEditors: hidetodong
 * @Description:
 * @FilePath: /hidetoxic-ssg/src/theme-default/Layout/index.tsx
 * HIDETOXIC - 版权所有
 */
const react_1 = require("react");
function Layout() {
    const [count, setCount] = (0, react_1.useState)(0);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "This is Layout" }), (0, jsx_runtime_1.jsxs)("div", { children: [count, (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                            setCount(count + 1);
                        }, children: "Add" })] })] }));
}
exports.Layout = Layout;
