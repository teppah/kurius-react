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
import ContentCard from "./components/ContentCard";
import Footer from "./components/Footer";
import "semantic-ui-css/semantic.min.css";
import { Container, Segment, Grid, Button } from "semantic-ui-react";

function App() {
  return (
    <div>
      <NavBar />

      <section id="home">
        <AngledGradient>
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
        <Container fluid style={{ marginTop: "4em", marginBottom: "3em" }}>
          <div style={{ marginTop: "4em" }}></div>
          <HackShowcase />
        </Container>
      </section>

      <section id="join" style={{marginBottom: "5em"}}>
        <AngledGradient>
          <div style={{paddingBottom: "2em"}}>
            <BigHeadline
              // headline="What Is a Kurius Hack?"
              text="Interested in what we're doing?"
            />
            <Grid centered style={{ marginBottom: "3em" }} doubling>
              <Grid.Column width={6}>
                <ContentCard title="Let's partner up!">
                  <Button
                    as="a"
                    href="https://drive.google.com/file/d/1wmueIeouRvrJiZz_CmYNFoWvvBpHSrxI/view?usp=sharing"
                    color="google plus"
                  >
                    Prospectus
                  </Button>
                </ContentCard>
              </Grid.Column>
              <Grid.Column width={6}>
                <ContentCard title="Participate in a Hack!">
                  <Button as="a" href="#" target="_blank" color="linkedin">
                    Participate
                  </Button>
                </ContentCard>
              </Grid.Column>
            </Grid>
          </div>
        </AngledGradient>
      </section>

      <section id="footer">
        <Footer></Footer>
      </section>
    </div>
  );
}

export default App;
