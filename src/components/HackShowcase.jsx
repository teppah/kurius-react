import React, { Component } from "react";
import { Container, Item, Grid } from "semantic-ui-react";

class HackShowcase extends Component {
  constructor(props) {
    super(props);
    const { items } = props;
    this.state = { items };
    console.log(props.style);
  }
  render() {
    return (
      <Container >
        <Item.Group>
          <Item>
            <Item.Image
              size="medium"
              src="https://react.semantic-ui.com/images/wireframe/image.png"
            />

            <Item.Content verticalAlign="middle">
              <Item.Header as="h2">Potential hack #1</Item.Header>
              {/* <Item.Meta>Description</Item.Meta> */}
              <Item.Description>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam rerum libero, odio aperiam ex debitis laboriosam
                  fugiat neque nam excepturi officiis perferendis aliquid itaque
                  eius odit consequatur deserunt impedit sint.
                </p>
              </Item.Description>
              {/* <Item.Extra>Additional Details</Item.Extra> */}
            </Item.Content>
          </Item>

          <Item>
            <Item.Image
              size="medium"
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              floated="right"
            />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h2">Potential hack #2</Item.Header>
              {/* <Item.Meta>Description</Item.Meta> */}
              <Item.Description>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita provident architecto facilis. Reiciendis corrupti
                  veniam perspiciatis perferendis, expedita accusantium nobis
                  saepe odit magni quisquam rem laboriosam iste eius ab
                  repudiandae!
                </p>
              </Item.Description>
              <Item.Extra>Coming soon</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    );
  }
}

export default HackShowcase;
