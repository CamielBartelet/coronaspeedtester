import React from "react";
import { Link } from "next/link"; // https://reactrouter.com/web/guides/quick-start
import HomeStyle from "./HomeStyle";

const Home = () => {
  return (
    <>
      <style jsx>{HomeStyle}</style>
      <main className="Home">
        {/* <Counter /> */}
        <div className="projectTitle">
          <h1>Corona Speedtester App</h1>
        </div>
        <ol className="list">
          <li>
            <Link href="/camielindex">Prototypes Camiel</Link>
          </li>
          <li>
            <Link href="/svenindex">Prototypes Sven</Link>
          </li>
          <li>
            <Link href="/nigelindex">Prototypes Nigel</Link>
          </li>
        </ol>
      </main>
    </>
  );
};

export default Home;
