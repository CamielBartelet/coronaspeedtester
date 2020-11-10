import React from "react";
import { Link } from "react-router-dom"; // https://reactrouter.com/web/guides/quick-start
// import Counter from "./components/Counter";
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
          <Link to="/camielproto/protoidx">Prototypes Camiel</Link>
        </li>
        <li>
          <Link to="/svenproto/protoidx">Prototypes Sven</Link>
        </li>
        <li>
          <Link to="/nigelproto/protoidx">Prototypes Nigel</Link>
        </li>
      </ol>
    </main>
  );
};

export default Home;
