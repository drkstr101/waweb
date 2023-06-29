import "@watheia/theme.styles";
import { AppProps } from "next/app";
import Head from "next/head";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <article>
      <Head>
        <title>Welcome to home!</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </article>
  );
}

export default CustomApp;
