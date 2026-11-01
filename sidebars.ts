import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// sidebars 手动排序：docs/ 里的文件由仓库维护，不依赖 front matter
const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: '开始使用',
      collapsed: false,
      items: ['intro'],
    },
    {
      type: 'category',
      label: '指南',
      collapsed: false,
      items: [
        {type: 'doc', id: 'build', label: '构建、dev 与故障排查'},
        {type: 'doc', id: 'native-plugins', label: '原生插件'},
        {type: 'doc', id: 'migration', label: '迁移指南'},
        {type: 'doc', id: 'security', label: '安全模型'},
        {type: 'doc', id: 'testing', label: '测试与验收'},
      ],
    },
    {
      type: 'category',
      label: 'API 参考',
      collapsed: false,
      items: [
        {type: 'doc', id: 'lua-api', label: 'Lua API 与桥协议'},
        {type: 'doc', id: 'config', label: 'app.json 配置'},
        {type: 'doc', id: 'capabilities', label: '能力清单（自动生成）'},
      ],
    },
  ],
};

export default sidebars;
