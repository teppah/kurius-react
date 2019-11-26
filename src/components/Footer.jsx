import React from "react";
import {
  List,
  Segment,
  Container,
  Grid,
  Header,
  Button,
  Icon
} from "semantic-ui-react";

const Footer = props => {
  return (
    <div>
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row centered>
              <Grid.Column width={6}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a" href="https://www.facebook.com/KuriusMtl/" target="_blank">
                    <Button color="facebook">
                      <Icon name="facebook" /> Facebook
                    </Button>
                  </List.Item>
                  <List.Item as="a" href="https://www.instagram.com/kuriusmtl/" target="_blank">
                    <Button color="instagram">
                      <Icon name="instagram" /> Instagram
                    </Button>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={6}>
                <Header as="h4" inverted>
                  Kurius
                </Header>
                <p>
                  By students, for students.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
};

export default Footer;
