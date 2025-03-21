import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Layout.css";
import { Container } from "reactstrap";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
   <>
      <Header content="WiStore Products" />

      <Container>
        <Login />
      </Container>

      <Footer content="Copyright @ 2023" />
    </>
  );
}

export default App;

