import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import CamielPrototypes from "./camielproto/protoidx";
import SvenPrototypes from "./camielproto/protoidx";
import NigelPrototypes from "./camielproto/protoidx";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/camielproto/protoidx" component={CamielPrototypes} />
      <Route exact path="/svenproto/protoidx" component={SvenPrototypes} />
      <Route exact path="/nigelproto/protoidx" component={NigelPrototypes} />

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
