import React from "react";
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

import App1 from './components/app1/App1';
import App2 from './components/app2/App2';

import { FeatureProvider } from './FeatureContext';

const App = ({location}) => (
  <FeatureProvider>
    <div className="App">
        <Redirect from='/' to="/home" />
        {location.pathname !== '/home' && <Header/>}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/app1" component={App1} />
          <Route path="/app2" component={App2} />
        </Switch>
    </div>

  </FeatureProvider>
)

export default withRouter(App)