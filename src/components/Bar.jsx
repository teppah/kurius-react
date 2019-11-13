import React from "react";
import {
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Container
} from "semantic-ui-react";

const Bar = () => {
  let visible = true;

  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        onHide={() => {
          visible = false;
        }}
        vertical
        visible={visible}
        width="thin"
      >
        <Menu.Item as="a">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="gamepad" />
          Games
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="camera" />
          Channels
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          {/* <Image src='/images/wireframe/paragraph.png' /> */}
          <Container fluid textAlign="center" text>
            <Header as="h1">Very Cool Header</Header>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, commodi quasi ut pariatur ab distinctio omnis optio minima laborum vero accusamus quidem exercitationem minus quaerat, ducimus ea. Accusantium, accusamus aperiam voluptatibus nemo natus quaerat optio aliquam perferendis ipsam laborum facere.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum ratione dolorum deleniti dolores, quod corporis expedita ipsa quia labore culpa? Reprehenderit, quia eum. Neque quis quia, nostrum eveniet voluptates delectus! Nam temporibus voluptatem unde, aspernatur quaerat nihil adipisci illo debitis natus ullam beatae obcaecati, corrupti quos qui sint odio alias rem suscipit recusandae aliquam? Atque aliquid magnam dolores officiis fugiat exercitationem quod delectus debitis non in a, nemo aspernatur placeat alias voluptatem, quia est, tempore ab sint. Maxime recusandae asperiores a excepturi porro expedita, natus ullam possimus cumque debitis magni. Repudiandae harum consectetur dicta quo perferendis aut fugit maiores accusamus!</p>
          </Container>
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default Bar;
