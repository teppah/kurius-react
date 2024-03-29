import React, { Component } from "react";
import { Container, Header, Responsive } from "semantic-ui-react";

class MediumDescription extends Component {
  state = {};

  constructor(props) {
    super(props);
    const { headline, text } = this.props;
    this.state = { headline, text };
  }

  render() {
    return (
      <Container textAlign="center" style={styles.container}>
        <Responsive minWidth="992">
          <Header as="h3" style={styles.header}>
            {this.state.headline}
          </Header>
          <Header as="h1" style={styles.text}>
            {this.state.text}
          </Header>
        </Responsive>
        <Responsive maxWidth="992"> 
          <Header as="h3" style={styles.headerMobile}>
            {this.state.headline}
          </Header>
          <Header as="h1" style={styles.textMobile}>
            {this.state.text}
          </Header>
        </Responsive>
      </Container>
    );
  }
}

const styles = {
  container: {
    paddingTop: "6em",
    paddingBottom: "6em",
  },
  header: {
    textTransform: "uppercase",
    marginBottom: "2em",
    fontSize: "1.4em",
    // color: "rgba(255, 255, 255, 0.8)"
    color: "grey"
  },
  text: {
    color: "black",
    fontSize: "2.3em"
  },
  headerMobile: {
    textTransform: "uppercase",
    marginBottom: "2em",
    fontSize: "0.8em",
    // color: "rgba(255, 255, 255, 0.8)"
    color: "grey"
  },
  textMobile: {
    color: "black",
    fontSize: "1.8em"
  }
};

export default MediumDescription;
