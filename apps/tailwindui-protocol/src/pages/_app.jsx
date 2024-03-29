import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import { Router, useRouter } from "next/router";

import { Layout } from "@protocol/components/Layout";
import * as mdxComponents from "@protocol/components/mdx";
import { useMobileNavigationStore } from "@protocol/components/MobileNavigation";

import "@watheia/waweb.theme.styles";
import "focus-visible";

function onRouteChange() {
  useMobileNavigationStore.getState().close();
}

Router.events.on("routeChangeStart", onRouteChange);
Router.events.on("hashChangeStart", onRouteChange);

export default function App({ Component, pageProps }) {
  let router = useRouter();

  return (
    <>
      <Head>
        {router.pathname === "/" ? (
          <title>Protocol API Reference</title>
        ) : (
          <title>{`${pageProps.title} - Protocol API Reference`}</title>
        )}
        <meta name="description" content={pageProps.description} />
      </Head>
      <MDXProvider components={mdxComponents}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </>
  );
}
