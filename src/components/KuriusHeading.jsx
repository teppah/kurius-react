import React from "react";
import { Container, Header, Image, Grid, Button, Icon } from "semantic-ui-react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";


const styles = {
  container: {
    padding: "5em 5em",
    paddingBottom: "17em",
    clipPath: "polygon(0 0, 100% 0, 100% 100%, )",
    marginBottom: "-10em"
  },
  kuriusHeader: {
    fontSize: "4em",
    fontWeight: "normal",
    marginBottom: "0",
    // marginTop: "2em",
    color: "white"
  },
  inspQuote: {
    fontSize: "1.2em",
    fontWeight: "normal",
    marginTop: "1.5em",
    color: "white"
  }
};

const KuriusHeading = () => (
  <Container text style={styles.container}>
    <Grid centered verticalAlign="middle" columns={1}>
      <Grid.Column
        textAlign="center"
        verticalAlign="middle"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Image size="small" src="whitekurius.png" />
        <Header as="h1" style={styles.kuriusHeader}>
          Kurius
        </Header>
        <Typist avgTypingDelay={20}>
          <Header as="h6" style={styles.inspQuote}>
            "The happiest moment I felt, is the moment when I realized my
            ability to create." -Dr Hazem Ali
          </Header>
        </Typist>
        <Button as="a" href="https://www.facebook.com/KuriusMtl/" target="_blank" color="facebook" style={{marginBottom:"0.4em"}}>
          <Icon name="facebook" /> Facebook
        </Button>
        <Button as="a" href="https://www.instagram.com/kuriusmtl/" target="_blank" color="instagram">
          <Icon name="instagram" /> Instagram
        </Button>
      </Grid.Column>
    </Grid>
  </Container>
);

export default KuriusHeading;
