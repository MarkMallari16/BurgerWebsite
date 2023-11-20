import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BurgerLogo from "../assets/Logo2.png";
import { Button } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";

const NavBarSite = () => {
  return (
    <div className="NavBarSection mt-2 p-2">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={BurgerLogo} alt="burger" className="image-logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            class="navbar-toggler "
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex align-items-center ms-auto gap-3">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Menu</Nav.Link>
              <Nav.Link href="#specials">Specials</Nav.Link>
              <Nav.Link href="#orderNow">
                <Button className=" cta-btn">
                  Order Now <FaArrowRightLong />
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarSite;
