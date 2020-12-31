import React from 'react';
import Skills from "./components/Skills";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contactme";
import Resume from "./components/Resume";
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Switch>         
          <Route path="/" exact component={Aboutme} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/skills/resume" exact component={Resume} />
          <Route
            path="/skills/projects/contact"
            exact
            component={Contact}
          />
          <Route component={Error} />
        </Switch>
      </Router>
     </>  
  );
};

export default App;
