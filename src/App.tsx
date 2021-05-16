import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import Money from './views/Money';
import NoMatch from './views/NoMatch';
import {EditTag} from './views/Tags/EditTag';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/tags">
          <Tags />
        </Route>
        <Route exact path="/tags/:tag">
          <EditTag/>
        </Route>
        <Route exact path="/money">
          <Money />
        </Route>
        <Route exact path="/statistics">
          <Statistics />
        </Route>
        <Redirect exact from="/" to="/money" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
