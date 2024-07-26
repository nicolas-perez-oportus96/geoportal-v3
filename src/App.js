import React from "react";
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

import App1 from './components/app1/App1';
import App2 from './components/app2/App2';
import WebMapServicePage from './components/wms/Page';

import { FeatureProvider } from './FeatureContext';

const App = ({ location }) => (
  <FeatureProvider>
    <div className="App">
      {location.pathname !== '/' && <Header />}
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/app1" component={App1} />
        <Route path="/app2" component={App2} />
        <Route path="/servicios" component={WebMapServicePage} />
      </Switch>
    </div>

  </FeatureProvider>
)

export default withRouter(App)