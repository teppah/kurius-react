import React from "react";
// import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar";
import KuriusHeading from "./components/KuriusHeading";
import PhotoGallery from "./components/PhotoGallery";
import AngledGradient from "./components/AngledGradient";
import "semantic-ui-css/semantic.min.css";
import { Container, Segment } from "semantic-ui-react";

function App() {
  return (
    <Container fluid>
      <AngledGradient>
        <NavBar />
        <KuriusHeading />
      </AngledGradient>
      <Container>
        <Segment>
          <PhotoGallery />
        </Segment>
      </Container>
    </Container>
  );
}



export default App;
