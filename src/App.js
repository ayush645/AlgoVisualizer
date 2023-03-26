import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './homeComponents/home';
import Seive from './primeComponents/seive';
import Sort from './sortComponents/sort';


function App() {
  useEffect(() => {
    // console.log(window.innerHeight,"  ",window.innerWidth);
  }, []);

  return (
    <Router basename="/">
      <Switch>
        <Route path="/prime" component={Seive} />
        <Route path="/sort" component={Sort} />
       
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
