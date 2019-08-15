import React from "react";
import "./App.css";
import Games from "./Components/Games";
import Header from "./Components/Header";
import Streams from "./Components/Streams";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Route exact path="/" component={Games} />
        <Route exact path="/top-streams" component={Streams} />
      </Router>
    </div>
  );
}

export default App;
