// import Create from "./Create";
import React from "react";
import Notfound from "./404";
import Create from "./Create";
import CartDetails from "./cartDetails";
import FarmContent from "./farmcontent";
import Navbar from "./navbar";
import Testknowledge from "./new";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// console.log(process.env.API_SECRET, 'from app top');
function App() {
  console.log(process.env.REACT_APP_API_KEY, 'from app function');
  return (
    <Router>
      <div className="App container-fluid">
        <header className="App-header">
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/">
            <Testknowledge />
          </Route>
          <Route path="/About">
            <FarmContent />
          </Route>
          <Route path = "/cart/:id/:id">
              <CartDetails/>
          </Route>
          <Route path = "/Create">
            <Create/>
          </Route>
          <Route path="*">
            <Notfound/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
