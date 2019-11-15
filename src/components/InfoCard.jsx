import React, { Component } from "react";
import { Container, Header, Card } from "semantic-ui-react";

const styles = {
  container: {
    padding: "3em"
    // backgroundColor: "#e3e3e3"
  },
  title: {
    fontSize: "1.2em",
    marginBottom: "1.2em"
  },
  text: {
    fontSize: "1.5em"
  }
};

class InfoCard extends Component {
  constructor(props) {
    super(props);
    const { title, text } = this.props;
    this.state = { title, text };
  }

  render() {
    return (
      <Card fluid>
        <Container fluid textAlign="center" style={styles.container}>
          <Card.Content>
            <Card.Header style={styles.title}>{this.state.title}</Card.Header>
            <p style={styles.text}>{this.state.text}</p>
          </Card.Content>
        </Container>
      </Card>
    );
  }
}

export default InfoCard;
