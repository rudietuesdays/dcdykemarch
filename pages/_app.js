import Head from "next/head";

import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.jpg" />
      </Head>{" "}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
