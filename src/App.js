import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCharacter from "./pages/SingleCharacter";
import Error from "./pages/Error";
import Episodes from "./pages/Episodes";

//import components
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/episodes">
          <Episodes />
        </Route>
        <Route path="/character/:id">
          <SingleCharacter />
        </Route>
        <Route  path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
