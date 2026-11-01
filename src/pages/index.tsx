import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const repoUrl = 'https://github.com/anccnuer/berba';

function IconGlobe() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.9 5.9 3.9 9s-1.4 6.4-3.9 9c-2.5-2.6-3.9-5.9-3.9-9S9.5 5.6 12 3z" />
    </svg>
  );
}

function IconLua() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8 4L3 12l5 8M16 4l5 8-5 8M13 8l-1.5 8" />
    </svg>
  );
}

function IconPackage() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 8.5v7a2 2 0 0 1-1 1.73l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 15.5v-7a2 2 0 0 1 1-1.73l7-4a2 2 0 0 1 2 0l7 4a2 2 0 0 1 1 1.73z" />
      <path d="M3.3 7L12 12l8.7-5M12 22V12" />
    </svg>
  );
}

function IconZap() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );
}

function IconLayers() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

const FEATURES = [
  { icon: <IconGlobe />, title: '页面即界面', desc: 'WebView 承载 www/，排版、动效与组件生态直接复用，创意不必止步于浏览器标签页。' },
  { icon: <IconLua />, title: 'Lua 做胶水', desc: '生命周期、网络、存储、文件、权限以白名单 API 暴露，边界清晰、包体克制。' },
  { icon: <IconPackage />, title: '一条命令出包', desc: '自带 Android shell 与 aapt2，不依赖 Gradle/AGP，解压发行包即可构建。' },
  { icon: <IconZap />, title: 'dev 热调试', desc: 'berba dev 在浏览器里真实执行页面与 Lua，改完刷新即见效果。' },
  { icon: <IconLayers />, title: '纯 Go 打包', desc: '零第三方 Go 依赖；APK 合并、16KB 对齐与 v2 签名均由 Go 实现。' },
  { icon: <IconShield />, title: '产物可复现', desc: '同一密钥与环境下双次构建逐字节一致，CI 以 SHA-256 严格比对。' },
];

const EXAMPLES = [
  { name: 'hello', desc: '最小可运行项目：页面调用 Lua、设备信息、持久化计数' },
  { name: 'led-banner', desc: '演唱会应援横幅：竖屏调字号颜色，横屏全屏滚动' },
  { name: 'notify', desc: '本地通知：权限申请、通道、冷/热点击事件' },
  { name: 'task', desc: '后台定时任务：once/every/daily、ctx.done() 与超时' },
  { name: 'native-echo', desc: '原生插件：C ABI 同步与跨线程异步、构建期 ELF 校验' },
  { name: 'widget', desc: '桌面小组件：卡片数据由 Lua 计算，task 定时刷新' },
];

const CORE_CAPS = ['file', 'store', 'http', 'permission', 'ui', 'device'];
const OPT_CAPS = ['notify', 'task', 'widget', 'native'];

function HeroBanner(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            开源的 Android 轻应用构建器
          </div>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroTagline}>{siteConfig.tagline}</p>
          <p className={styles.heroSub}>
            HTML/CSS/JS 写界面，Lua 写逻辑，一条命令产出可安装的 APK——
            不需要把创意格式化成工程模板。
          </p>
          <div className={styles.heroBtns}>
            <Link className={clsx('button button--lg', styles.btnPrimary)} to="/docs/intro">
              快速开始
            </Link>
            <Link className={clsx('button button--lg', styles.btnGhost)} to="/docs/lua-api">
              Lua API
            </Link>
            <a className={clsx('button button--lg', styles.btnGhost)} href={repoUrl} rel="noopener noreferrer" target="_blank">
              GitHub
            </a>
          </div>
          <ul className={styles.heroMeta}>
            <li>Android 7.0+</li>
            <li>零第三方依赖</li>
            <li>双构建逐字节一致</li>
            <li>二次元浓度：微甜</li>
          </ul>
        </div>
        <div className={styles.heroArt}>
          <img src={useBaseUrl('/img/mascot.svg')} alt="berba 吉祥物：把网页折进 APK 的小包" width="460" />
        </div>
      </div>
    </div>
  );
}

function FeatureSection(): JSX.Element {
  return (
    <section className={styles.section}>
      <Heading as="h2" className={styles.sectionTitle}>为什么是 berba</Heading>
      <div className={styles.featuresGrid}>
        {FEATURES.map((f) => (
          <div className={styles.featureCard} key={f.title}>
            <span className={styles.featureIcon}>{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FlowSection(): JSX.Element {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <Heading as="h2" className={styles.sectionTitle}>三步，从页面到口袋</Heading>
      <div className={styles.flowGrid}>
        <div className={styles.flowStep}>
          <span className={styles.flowNum}>1</span>
          <h3>写页面</h3>
          <p>
            <code>www/</code> 里放 HTML/CSS/JS，任何趁手的框架都可以——壳只认静态资源。
          </p>
        </div>
        <div className={styles.flowStep}>
          <span className={styles.flowNum}>2</span>
          <h3>写逻辑</h3>
          <p>
            <code>lua/main.lua</code> 响应生命周期与事件，页面通过桥与它互调。
          </p>
        </div>
        <div className={styles.flowStep}>
          <span className={styles.flowNum}>3</span>
          <h3>出包上机</h3>
          <p>
            <code>berba build</code> 产出签名 APK，<code>berba install</code> 经 adb 装进手机。
          </p>
        </div>
      </div>
      <pre className={styles.flowCode}>
        {`berba.exe init myapp --package com.example.myapp
cd myapp
berba.exe dev --open    :: 浏览器里改页面、改 Lua，刷新即见
berba.exe build         :: dist\\myapp-1.0.0.apk
berba.exe install       :: adb 安装到已连接设备`}
      </pre>
    </section>
  );
}

function ShowcaseSection(): JSX.Element {
  return (
    <section className={styles.section}>
      <Heading as="h2" className={styles.sectionTitle}>示例即文档</Heading>
      <p className={styles.sectionLead}>
        六个可直接 <code>berba build</code> 的官方示例，覆盖从最小应用到原生插件与桌面小组件。
      </p>
      <div className={styles.showcaseGrid}>
        {EXAMPLES.map((e) => (
          <a className={styles.showcaseCard} href={`${repoUrl}/tree/main/examples/${e.name}`} key={e.name} rel="noopener noreferrer" target="_blank">
            <code className={styles.showcaseName}>{e.name}</code>
            <p>{e.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function CapabilitySection(): JSX.Element {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <Heading as="h2" className={styles.sectionTitle}>能力白名单</Heading>
      <p className={styles.sectionLead}>
        核心能力永远在线；可选能力写进 <code>app.json</code> 才存在——边界进清单，而不是运行时猜。
      </p>
      <div className={styles.capWrap}>
        {CORE_CAPS.map((c) => (
          <span className={clsx(styles.capChip, styles.capCore)} key={c}>{c}</span>
        ))}
        {OPT_CAPS.map((c) => (
          <span className={clsx(styles.capChip, styles.capOpt)} key={c}>{c}</span>
        ))}
      </div>
      <div className={styles.capHint}>
        <span className={clsx(styles.capChip, styles.capCore)}>core</span> 常驻
        <span className={styles.capSep}>·</span>
        <Link to="/docs/capabilities">机器可读的能力清单</Link>
        <span className={styles.capSep}>·</span>
        <Link to="/docs/config">capabilities 字段</Link>
      </div>
    </section>
  );
}

function CtaBanner(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.ctaBanner}>
        <h2>今晚就想把它装进手机？</h2>
        <p>下载发行包，解压即可开工——构建机只需要一个可执行文件。</p>
        <div className={styles.ctaBtns}>
          <a className={clsx('button button--lg', styles.btnInverse)} href={`${repoUrl}/releases`} rel="noopener noreferrer" target="_blank">
            下载发行包
          </a>
          <Link className={clsx('button button--lg', styles.btnInverseGhost)} to="/docs/build">
            构建与调试
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} · ${siteConfig.tagline}`}
      description="berba：用 HTML/CSS/JS 写界面，用 Lua 写逻辑，一条命令产出可安装的 Android APK。"
    >
      <HeroBanner />
      <main>
        <FeatureSection />
        <FlowSection />
        <ShowcaseSection />
        <CapabilitySection />
        <CtaBanner />
      </main>
    </Layout>
  );
}
