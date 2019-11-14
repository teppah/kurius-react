import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

class BigHeadline extends Component {
  state = {};

  constructor(props) {
    super(props);
    const { headline, text } = this.props;
    this.state = {headline, text};
  }

  render() {
    return (
      <Container textAlign="center" style={styles.container}>
        <Header as="h3" style={styles.header}>
          {this.state.headline}
        </Header>
        <Header as="h1" style={styles.text}>
          {this.state.text}
        </Header>
      </Container>
    );
  }
}

const styles = {
  container: {
    padding: "6em"
  },
  header: {
    textTransform: "uppercase",
    marginBottom: "2em",
    fontSize: "2em",
    color: "rgba(255, 255, 255, 0.6)"
  },
  text: {
    color: "white",
    fontSize: "3em"
  }
};

export default BigHeadline;
