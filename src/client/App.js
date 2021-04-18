import React from "react";
import "./App.css";
import FindTriangleName from "./components/TestComponent/FindTriangleName.js";
import Home from "./components/TestComponent/Home.js";
import Header from "./components/TestComponent/Header";
import Footer from "./components/TestComponent/Footer";
import TrianglesContent from "./components/TestComponent/TriangleContent";
import About from "./components/TestComponent/About";
import HowItWorks from "./components/TestComponent/HowItWorks";
import Contact from "./components/TestComponent/Contact";
import FrequentlyAskedQuestions from "./components/TestComponent/FrequentlyAskedQuestions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//This is the App component which imports all my components here and connect eachother.
//Imports some Hooks like Router, Route, Switch from react library by installing 'react-router-dom' .
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/triangle">
          <FindTriangleName />
        </Route>

        <Route exact path="/triangleContent">
          <TrianglesContent />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/howitworks">
          <HowItWorks />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/frequentlyaskedquestions">
          <FrequentlyAskedQuestions />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
