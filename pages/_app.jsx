import "../styles/globals.css";
import Globalstyle from "../appBuild/style/index";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://apis.google.com/js/client:platform.js"></script>
      </Head>
      <style jsx>{Globalstyle}</style>
      <div className="wrapper">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
