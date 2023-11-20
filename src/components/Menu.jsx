import React from "react";
import { Container } from "react-bootstrap";
import BurgerCard from "./BurgerCard";
import Product1 from "../assets/burgerP.png";
const Menu = () => {
  return (
    <Container>
      <section className="menu">
        <div className="fs-4 fw-bold text-center header">
          Explore <span className="menu-text-highlight">Menu</span>
        </div>
        <div className="mt-3 d-flex justify-content-center gap-3">
          <BurgerCard image={Product1} name="Hamburger" price="2$" />
          <BurgerCard image={Product1} name="Hamburger" price="2$" />
          <BurgerCard image={Product1} name="Hamburger" price="2$" />
          <BurgerCard image={Product1} name="Hamburger" price="2$" />
        </div>
      </section>
    </Container>
  );
};

export default Menu;
