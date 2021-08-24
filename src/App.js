import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'

import App1 from './components/app1/App1'
import App2 from './components/app2/App2'



import { FeatureProvider } from './FeatureContext'

export default function App() {
  return (
    <FeatureProvider>

      <div className="App">
        <Router>
          <Header />
          {/* <Redirect from='/' to="/home"/> */}
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/app1" component={App1} />
            <Route path="/app2" component={App2} />
          </Switch>
        </Router>
      </div>

    </FeatureProvider>
  );
}
