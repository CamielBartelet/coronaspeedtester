import "../styles/globals.css";
import Globalstyle from "../appBuild/style/index";
import Head from "next/head";
import Layout from "../appBuild/layout";
import "swiper/swiper-bundle.css";
// import '~@fullcalendar/core/main.css';
// import '~@fullcalendar/daygrid/main.css';
// import '~@fullcalendar/timegrid/main.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
            rel="stylesheet"
          />
        </Head>
        <style jsx>{Globalstyle}</style>
        <div className="wrapper">
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}

export default MyApp;
