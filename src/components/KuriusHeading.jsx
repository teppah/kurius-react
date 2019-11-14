import React from "react";
import { Container, Header, Button, Icon } from "semantic-ui-react";

const KuriusHeading = () => (
  <Container text textAlign="center" style={styles.container}>
    <Header as="h1" content="Kurius" style={styles.kuriusHeader}>
      Kurius
    </Header>
    <Header as="h2" style={styles.inspQuote}>
      "The happiest moment I felt, is the moment when I realized my ability to
      create." -Dr Hazem Ali
    </Header>
  </Container>
);

const styles = {
  container: {
    // padding: "5em 5em",
    paddingBottom: "17em",
    clipPath: "polygon(0 0, 100% 0, 100% 100%, )",
    marginBottom: "-10em"
  },
  kuriusHeader: {
    fontSize: "4em",
    fontWeight: "normal",
    marginBottom: "0",
    marginTop: "2em",
    color: "white"
  },
  inspQuote: {
    fontSize: "1.7em",
    fontWeight: "normal",
    marginTop: "1.5em",
    color: "white"
  }
};

export default KuriusHeading;
