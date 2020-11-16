import "../styles/globals.css";
import Globalstyle from "../appBuild/style/index";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx>{Globalstyle}</style>
      <div className="wrapper">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
