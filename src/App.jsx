import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Layout.css";
import { Container } from "reactstrap";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Success from "./components/Success.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

function App() {
  return (
    <Router>
      <Header content="WiStore Products" />

      <Container>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/success" component={Success} />
          <Route path="/error" component={ErrorPage} />
        </Switch>
      </Container>

      <Footer content="Copyright @ 2023" />
    </Router>
  );
}

export default App;


