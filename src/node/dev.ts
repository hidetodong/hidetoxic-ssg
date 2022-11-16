/*
 * @Author: hidetodong
 * @Date: 2022-11-16 23:02:24
 * @LastEditTime: 2022-11-16 23:34:19
 * @LastEditors: hidetodong
 * @Description: 
 * @FilePath: /hidetoxic-ssg/src/node/dev.ts
 * HIDETOXIC - 版权所有
 */

import { createServer as createViteDevServer } from 'vite'
import { pluginIndexHtml } from './plugin-hidetoxic-ssg/indexHtml'
import pluginReact from '@vitejs/plugin-react'
export async function createDevServer(root = process.cwd()){
    return createViteDevServer({ 
        root,
        plugins:[pluginIndexHtml(),pluginReact()]
     })
}

