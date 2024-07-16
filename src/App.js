import React, { Suspense } from "react";
import { Link, Route, Switch } from "wouter";

import SearchResults from "pages/SearchResults";
import Detail from "pages/Detail";

import { GifsContextProvider } from "context/GifsContext";

import "./App.css";
import logo from "assets/imgs/giflogo.png";

const HomePage = React.lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <Link to="/">
          <img className="App-logo" alt="giffy logo" src={logo} />
        </Link>
        <GifsContextProvider>
          <Switch>
            <Route component={HomePage} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </Switch>
        </GifsContextProvider>
      </Suspense>
    </div>
  );
}
