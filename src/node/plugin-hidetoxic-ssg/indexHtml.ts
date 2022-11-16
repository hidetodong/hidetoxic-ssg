import { readFile } from 'fs/promises'
import { Plugin } from 'vite'
import { DEFAULT_HTML_PATH,CLIENT_ENTRY_PATH } from '../constants'


export function pluginIndexHtml():Plugin{
    return {
        name:'hidetoxic-ssg:index-html',
        apply:"serve",
        // 插入入口 script 标签
        transformIndexHtml(html) {
            return {
            html,
            tags: [
                {
                tag: "script",
                attrs: {
                    type: "module",
                    _src: `/@fs/${CLIENT_ENTRY_PATH}`,
                    get src() {
                        return this._src;
                    },
                    set src(value) {
                        this._src = value;
                    },
                },
                injectTo: "body",
                },
            ],
            };
        },
        configureServer(server){
            return ()=>{
                server.middlewares.use(async(req,res,next)=>{
                    let html = await readFile(DEFAULT_HTML_PATH,"utf-8")
                    try {
                        html = await server.transformIndexHtml(
                            req.url,
                            html,
                            req.originalUrl
                        )
                        res.statusCode = 200
                        res.setHeader("Content-Type","text/html")
                        res.end(html);
                    } catch (e) {
                        return next(e)
                    }
                })
            }
        }
    }
}