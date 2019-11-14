import React from "react";
// import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar";
import KuriusHeading from "./components/KuriusHeading";
import PhotoGallery from "./components/PhotoGallery";
import AngledGradient from "./components/AngledGradient";
import BigHeadline from "./components/BigHeadline";
import "semantic-ui-css/semantic.min.css";
import { Container, Segment, Grid } from "semantic-ui-react";

function App() {
  return (
    <Container fluid>
      <AngledGradient>
        <NavBar />
        <KuriusHeading />
      </AngledGradient>
      <Grid centered style={{ marginBottom: "10em" }}>
        <Grid.Column width={12}>
          <Segment>
            <PhotoGallery />
          </Segment>
        </Grid.Column>
      </Grid>
      <AngledGradient>
        <BigHeadline
          headline="Who We Are"
          text="We are a start-up non-profit organization created by students for students. Our goal is to empower youth by making tech education and resources accessible to all."
        />
      </AngledGradient>
      <Grid cetered>
        <Grid.Column>
          
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default App;
