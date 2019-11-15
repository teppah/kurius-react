import React from "react";
// import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar";
import KuriusHeading from "./components/KuriusHeading";
import PhotoGallery from "./components/PhotoGallery";
import AngledGradient from "./components/AngledGradient";
import BigHeadline from "./components/BigHeadline";
import InfoCard from "./components/InfoCard";
import HackShowcase from "./components/HackShowcase";
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
      <Container style={{ marginTop: "8em", marginBottom: "8em" }}>
        <Grid centered stackable verticalAlign={"middle"}>
          <Grid.Row centered stretched>
            <Grid.Column width={8} stretched>
              <InfoCard
                title="Kurius Capsules"
                text="Specially designed for our students in mind, our Capsules gather a variety of industry specialists in a weekly workshop session. They have the unique chance to learn from the best in a tight-nit community of equally passionate students."
              />
            </Grid.Column>
            <Grid.Column width={8} stretched>
              <InfoCard
                title="Kurius Periods"
                text="Our periods allow our participants to collaborate in a fun and engaging session dedicated to coding, and work together on a big project that will be showcased at the end. "
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Container fluid style={{ marginTop: "4em", marginBottom: "4em" }}>
        <AngledGradient>
          <BigHeadline
            headline="What Is a Kurius Hack?"
            text="Our program is a 5-week long 'hack' during which participants learn to code by tackling a specific problem in a guided workshop experience. They are held twice a week: once after school (Capsule) and once during the weekend (Period)."
          />
        </AngledGradient>
      </Container>

      <Container fluid style={{ marginTop: "4em", marginBottom: "4em" }}>
        <HackShowcase />
      </Container>
    </Container>
  );
}

export default App;
