import React from "react";
import "./App.scss";
import { createBrowserHistory } from "history";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./views/Dashboard/dashboard.component";
import NotFound from "./views/NotFound/not-found.component";

const hist = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={hist}>
        <Switch>
          <Route path="/" render={(props) => <Dashboard {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
