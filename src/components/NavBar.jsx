import React, { Component, PropTypes } from "react";
import {
  Segment,
  Menu,
  Container,
  Image,
  Dropdown,
  Header
} from "semantic-ui-react";

const NavBar = () => (
  <Menu pointing secondary>
    <Container>
      <Menu.Item header>
        <Image
          size="mini"
          src="/ico.png"
          style={{ maxHeight: "20px", maxWidth: "20px" }}
        />
        Kurius
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as="a" name="home">
          Home
        </Menu.Item>
        <Menu.Item as="a" name="our-team">
          Our Team
        </Menu.Item>
        <Menu.Item as="a" name="our-vision">
          Our Vision
        </Menu.Item>
        <Menu.Item as="a" name="events">
          Events
        </Menu.Item>
        <Menu.Item as="a" name="partner">
          Partner
        </Menu.Item>
        <Menu.Item as="a" name="join-us">
          Join Us
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

export default NavBar;
