import { AppProps } from "next/app";
import Head from "next/head";

// theme styles
import "@watheia/theme.styles";

// local styles
import "./styles.css";

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
