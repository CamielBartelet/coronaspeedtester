import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import CamielPrototypes from "./camielproto/index";
import SvenPrototypes from "./svenproto/index";
import NigelPrototypes from "./nigelproto/index";
import Users from "./models/users";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/camielproto/index" component={CamielPrototypes} />
      <Route exact path="/svenproto/index" component={SvenPrototypes} />
      <Route exact path="/nigelproto/index" component={NigelPrototypes} />

      {/* catch all */}
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
