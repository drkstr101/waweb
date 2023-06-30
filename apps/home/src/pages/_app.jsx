import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import { Router, useRouter } from "next/router";

import { Layout } from "@home/components/Layout";
import { useMobileNavigationStore } from "@home/components/MobileNavigation";
import * as mdxComponents from "@home/components/mdx";

import "@watheia/theme.styles";
import "focus-visible";

function onRouteChange() {
  useMobileNavigationStore.getState().close();
}

Router.events.on("routeChangeStart", onRouteChange);
Router.events.on("hashChangeStart", onRouteChange);

export default function App({ Component, pageProps }) {
  const router = useRouter();

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
