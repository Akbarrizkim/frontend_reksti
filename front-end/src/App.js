import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Routes from "./Rute/rute";
import Pages from "./Pages/pages-common";
import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path={Routes.home}>
              <Pages.LandingPage/>
            </Route>
            {/* <Route path={Routes.pemesanan1}>
              <Pages.LandingPage/>
            </Route> 
            <Route path={Routes.pemesanan2}>
              <Pages.LandingPage/>
            </Route> 
            <Route path={Routes.pembayaran}>
              <Pages.LandingPage/>
            </Route>   */}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
