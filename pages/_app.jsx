import "../styles/globals.css";
import Globalstyle from "../appBuild/style/index";
import Head from "next/head";
import Layout from "../appBuild/layout";
import "swiper/swiper-bundle.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head></Head>
        <style jsx>{Globalstyle}</style>
        <div className="wrapper">
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}

export default MyApp;
