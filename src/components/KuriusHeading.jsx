import React from "react";
import { Container, Header, Button, Icon } from "semantic-ui-react";

const KuriusHeading = () => (
  <Container text textAlign="center">
    <Header
      as="h1"
      content="Kurius"
      style={{
        fontSize: "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: "3em"
      }}
    >Kurius</Header>
    <Header
      as="h2"
      style={{
        fontSize: "1.7em",
        fontWeight: "normal",
        marginTop: "1.5em"
      }}
    >"The happiest moment I felt, is the moment when I realized my ability to create." -Dr Hazem Ali</Header>
  </Container>
);

const styles = {
  
}

export default KuriusHeading;
