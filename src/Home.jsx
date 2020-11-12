import React from "react";
import { Link } from "react-router-dom"; // https://reactrouter.com/web/guides/quick-start
import "./Home.css";

const Home = () => {
  return (
    <main className="Home">
      {/* <Counter /> */}

      <ol className="list">
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}
        <li>
          <Link to="/camielproto/index">Prototypes Camiel</Link>
        </li>
        <li>
          <Link to="/svenproto/index">Prototypes Sven</Link>
        </li>
        <li>
          <Link to="/nigelproto/index">Prototypes Nigel</Link>
        </li>
      </ol>
    </main>
  );
};

export default Home;
