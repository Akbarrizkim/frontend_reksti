import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Routes from "./Rute/rute";
import Pages from "./Pages/pages-common";
import React, {Component} from 'react';
import { NavigationBar } from './Components/NavigationBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path={Routes.home}>
              <Pages.LandingPage/>
            </Route> 
            {/*<Route path={Routes.pemesanan2}>
              <Pages.LandingPage/>
            </Route>  */}
            <Route path={Routes.pembayaran}>
              <Pages.Pembayaran/>
            </Route>
            <Route path={Routes.orderhistory}>
              <Pages.OrderHistory/>
            </Route>
            <Route path={Routes.account}>
              <Pages.Account/>
            </Route>  
            <Route path={Routes.menu}>
              <Pages.Menu/>
            </Route>  
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
