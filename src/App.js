import React from "react";
import "./App.css";
import Home from "pages/Home";
import { Link, Route, Switch } from "wouter";
import SearchResults from "pages/SearchResults";
import Detail from "pages/Detail";
import { GifsContextProvider } from "context/GifsContext";
import logo from "assets/imgs/giflogo.png";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <img className="App-logo" alt="giffy logo" src={logo} />
      </Link>
      <GifsContextProvider>
        <Switch>
          <Route component={Home} path="/" />
          <Route component={SearchResults} path="/search/:keyword" />
          <Route component={Detail} path="/gif/:id" />
        </Switch>
      </GifsContextProvider>
    </div>
  );
}

export default App;
