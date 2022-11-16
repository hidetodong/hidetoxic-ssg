/*
 * @Author: hidetodong
 * @Date: 2022-11-16 23:11:41
 * @LastEditTime: 2022-11-16 23:37:28
 * @LastEditors: hidetodong
 * @Description: 
 * @FilePath: /hidetoxic-ssg/src/node/constants/index.ts
 * HIDETOXIC - 版权所有
 */
import { join } from "path";

export const PACKAGE_ROOT = join(__dirname, "..", "..", "..");

export const DEFAULT_HTML_PATH = join(PACKAGE_ROOT, "template.html");

export const CLIENT_ENTRY_PATH = join(
    PACKAGE_ROOT,
    "src",
    "runtime",
    "client-entry.tsx"
  );