import React from "react";
import { Card, Container } from "semantic-ui-react";

const ContentCard = props => {
  return (
    <Card fluid>
      <Container fluid textAlign="center" style={{ padding: "1.4em" }}>
        <Card.Content>
          <Card.Header
            style={{
              fontSize: "2em",
              marginBottom: "1.2em"
            }}
          >
            {props.title}
          </Card.Header>
          {props.children}
        </Card.Content>
      </Container>
    </Card>
  );
};

export default ContentCard;
