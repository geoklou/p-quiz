import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Form from "./components/pages/Form";
import Quizzes from "./components/pages/Quizzes";
import Test from "./components/pages/Test";
import Contact from "./components/pages/Contact";
import './APP.css';

const App = () =>
  <Router>
    <div>
      <Navpills />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/quizzes" component={Quizzes} />
      <Route exact path="/test" component={Test} />
      <Route exact path="/contact" component={Contact} />
    </div>
  </Router>;

export default App;