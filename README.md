# berba 官网

[berba](https://github.com/anccnuer/berba) 的官方网站，基于 [Docusaurus 3](https://docusaurus.io/)。

- 主页：二次元化 Hero（渐变粉紫 + 吉祥物）、特性、工作流、示例、能力白名单
- 文档：`docs/` —— **从主仓同步的只读副本**（真源是 [anccnuer/berba/docs](https://github.com/anccnuer/berba/tree/main/docs)）
- API：Lua API、`app.json` 配置、能力清单（`capabilities.md` 由主仓规格自动生成）
- 站点源码：`src/`（主页与主题）、`sidebars.ts`（导航结构）

## 本地开发

```bash
npm ci
npm start          # http://localhost:3000/
```

## 构建与预览

```bash
npm run build      # 产物在 build/
npm run serve      # 本地预览构建产物
```

## 更新文档

文档不在本仓修改。两仓并列摆放时：

```bash
npm run sync-docs                    # 默认从 ../berba/docs 同步
bash scripts/sync-docs.sh /path/to/berba/docs
```

同步后 `git diff docs/` 审查并提交。

## 部署

配置默认根路径（`baseUrl: '/'`）：适合 Vercel/Netlify 或自定义域名。
GitHub Pages 项目页（`https://anccnuer.github.io/berba-website/`）需把
`docusaurus.config.ts` 的 `baseUrl` 改为 `'/berba-website/'`，再用官方 Pages workflow：
https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions

## 许可

站点内容随 [berba](https://github.com/anccnuer/berba) 主仓许可；第三方组件见 [NOTICE](NOTICE)。
