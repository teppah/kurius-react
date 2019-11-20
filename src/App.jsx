import React from "react";
// import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar";
import KuriusHeading from "./components/KuriusHeading";
import PhotoGallery from "./components/PhotoGallery";
import AngledGradient from "./components/AngledGradient";
import BigHeadline from "./components/BigHeadline";
import MediumDescription from "./components/MediumDescription";
import InfoCard from "./components/InfoCard";
import HackShowcase from "./components/HackShowcase";
import "semantic-ui-css/semantic.min.css";
import { Container, Segment, Grid } from "semantic-ui-react";

function App() {
  return (
    <div>
      <section id="home">
        <AngledGradient>
          <NavBar />
          <KuriusHeading />
        </AngledGradient>
      </section>

      <Container fluid>
        <Grid centered style={{ marginBottom: "10em" }}>
          <Grid.Column width={12}>
            <Segment>
              <PhotoGallery />
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>

      <AngledGradient>
        <BigHeadline
          headline="Who We Are"
          text="We are a start-up non-profit organization created by students for students. Our goal is to empower youth by making tech education and resources accessible to all."
        />
      </AngledGradient>

      <div style={{ marginTop: "4em", marginBottom: "4em" }}>
        {/* <AngledGradient>
          <BigHeadline
            headline="What Is a Kurius Hack?"
            text="Our program is a 5-week long 'hack' during which participants learn to code by tackling a specific problem in a guided workshop experience. They are held twice a week: once after school (Capsule) and once during the weekend (Period)."
          />
        </AngledGradient> */}
        <MediumDescription
          headline="What Is a Kurius Hack?"
          text={
            'Our program is a 5-week long "hack" during which participants learn to code by tackling a specific problem in a guided workshop experience. They are held twice a week: once after school and once during the weekend.'
          }
        />
      </div>

      <Container style={{ marginTop: "8em", marginBottom: "8em" }}>
        <Grid centered stackable verticalAlign={"middle"}>
          <Grid.Row centered stretched>
            <Grid.Column width={8} stretched>
              <InfoCard
                title="Kurius Capsules"
                text="Our Capsules gather a variety of industry specialists in a weekly session. They have the unique chance to learn from the best in a tight-nit community of equally passionate students."
              />
            </Grid.Column>
            <Grid.Column width={8} stretched>
              <InfoCard
                title="Kurius Periods"
                text="Our periods allow our participants to collaborate in a fun and engaging session dedicated to coding during the weekends, and work together on a big project that will be showcased at the end. "
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <section id="events">
        <AngledGradient>
          <BigHeadline headline="What We Offer" />
        </AngledGradient>
        <Container fluid style={{ marginTop: "4em", marginBottom: "4em" }}>
          <div style={{ marginTop: "4em" }}></div>
          <HackShowcase />
        </Container>
      </section>
    </div>
  );
}

export default App;
