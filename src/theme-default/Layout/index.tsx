/*
 * @Author: hidetodong
 * @Date: 2022-11-16 23:14:32
 * @LastEditTime: 2022-11-16 23:19:14
 * @LastEditors: hidetodong
 * @Description:
 * @FilePath: /hidetoxic-ssg/src/theme-default/Layout/index.tsx
 * HIDETOXIC - 版权所有
 */

import { useState } from "react";

export function Layout() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>This is Layout</h1>
      <div>
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
