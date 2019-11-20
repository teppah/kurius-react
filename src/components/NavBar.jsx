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
  <Menu
    pointing
    secondary
    fixed="top"
    style={{
      backgroundColor: "#fff",
      background:
      "#fff",
      // border: "1px solid #ddd",
      boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)"
    }}
  >
    <Container>
      <Menu.Item header>
        <Image
          size="mini"
          src="ico.png"
          style={{ maxHeight: "20px", maxWidth: "20px" }}
        />
        Kurius
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as="a" name="home" href="#home">
          Home
        </Menu.Item>
        {/* <Menu.Item as="a" name="our-team">
          Our Team
        </Menu.Item>
        <Menu.Item as="a" name="our-vision">
          Our Vision
        </Menu.Item> */}
        <Menu.Item as="a" name="events" href="#events">
          Events
        </Menu.Item>
        <Menu.Item as="a" name="partner" href="#join">
          Partner
        </Menu.Item>
        <Menu.Item as="a" name="join-us" href="#join">
          Join Us
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

export default NavBar;
