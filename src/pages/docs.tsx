import React from 'react';
import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head';

// /docs 根路径落到「简介」（docs 目录在仓库根，没有 index 文件）
export default function DocsRoot(): JSX.Element {
  const to = useBaseUrl('/docs/intro');
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0;url=${to}`} />
        <title>berba 简介 | berba</title>
      </Head>
      <Redirect to={to} />
    </>
  );
}
