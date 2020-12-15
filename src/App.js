import React from 'react';
import Skills from "./components/Skills";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contactme";
import Projects from "./components/Projects";
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar from '../../src/components/Navbar';
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Navbar />
          <Route path="/" exact component={Aboutme} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/skills/projects" exact component={Projects} />
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
