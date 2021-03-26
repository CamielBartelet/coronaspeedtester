import "../styles/globals.css";
import Globalstyle from "../appBuild/style/index";
import Head from "next/head";
import Layout from "../appBuild/layout";
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
        </Head>
        <style jsx>{Globalstyle}</style>
        <div className="wrapper">
            <Provider session={pageProps.session}>
                <Component {...pageProps} />
            </Provider>
        </div>
      </Layout>
    </>
  );
}

export default MyApp;
