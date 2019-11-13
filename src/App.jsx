import React from "react";
// import logo from './logo.svg';
// import './App.css';
import NavBar from "./components/NavBar";
import KuriusHeading from "./components/KuriusHeading";
import "semantic-ui-css/semantic.min.css";
import { Container, Segment } from "semantic-ui-react";

function App() {
  return (
    <Container fluid>
      <NavBar />
      <KuriusHeading />
      <Container>
        
      </Container>
    </Container>
  );
}

export default App;
