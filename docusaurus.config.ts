import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const repoUrl = 'https://github.com/anccnuer/berba';
const siteRepoUrl = 'https://github.com/anccnuer/berba-website';

const config: Config = {
  title: 'berba',
  tagline: '把网页装进 APK，把灵感留在掌心',
  favicon: 'img/logo.svg',

  future: {
    v4: true,
  },

  // 本地与根路径部署（http://localhost:3000/）。
  // 若用 GitHub Pages 项目页（https://anccnuer.github.io/berba-website/），把 baseUrl 改为 '/berba-website/'
  url: 'https://anccnuer.github.io',
  baseUrl: '/',

  organizationName: 'anccnuer',
  projectName: 'berba-website',

  onBrokenLinks: 'warn',

  // docs/*.md 按 GitHub 习惯书写（正文里有裸尖括号），用 CommonMark 而非 MDX
  markdown: {
    format: 'md',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  // docs/ 是从主仓 anccnuer/berba 同步来的副本：`npm run sync-docs`（默认取 ../berba/docs）
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl: `${siteRepoUrl}/edit/main/docs/`,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'berba',
      logo: {
        alt: 'berba 吉祥物',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: '文档',
        },
        {
          to: '/docs/lua-api',
          position: 'left',
          label: 'Lua API',
        },
        {
          to: '/docs/config',
          position: 'left',
          label: '配置',
        },
        {
          href: `${repoUrl}/tree/main/examples`,
          position: 'left',
          label: '示例',
        },
        {
          href: `${repoUrl}/releases`,
          position: 'right',
          label: '下载',
        },
        {
          href: repoUrl,
          position: 'right',
          className: 'navbar-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '开始',
          items: [
            {label: '简介', to: '/docs/intro'},
            {label: '构建与调试', to: '/docs/build'},
            {label: '迁移指南', to: '/docs/migration'},
            {label: '测试与验收', to: '/docs/testing'},
          ],
        },
        {
          title: 'API',
          items: [
            {label: 'Lua API 与桥协议', to: '/docs/lua-api'},
            {label: 'app.json 配置', to: '/docs/config'},
            {label: '能力清单', to: '/docs/capabilities'},
            {label: '原生插件 C ABI', to: '/docs/native-plugins'},
          ],
        },
        {
          title: '项目',
          items: [
            {label: '安全模型', to: '/docs/security'},
            {label: 'GitHub 仓库', href: repoUrl},
            {label: '发布页', href: `${repoUrl}/releases`},
            {label: '问题反馈', href: `${repoUrl}/issues`},
          ],
        },
      ],
      copyright: `把网页装进 APK，把灵感留在掌心 · © ${new Date().getFullYear()} berba · Built with Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['lua', 'bash', 'batch', 'powershell', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
