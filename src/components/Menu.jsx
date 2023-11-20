import React from "react";
import { Container } from "react-bootstrap";
import BurgerCard from "./BurgerCard";
import Product1 from "../assets/burgerP.png";


const Menu = () => {
  return (
    <section className="menu">
    <Container>
      <div className="fs-4 fw-bold text-center header">
        Explore <span className="menu-text-highlight">Menu</span>
      </div>
      <div className="mt-3 row justify-content-center">
        <div className="col-md-6 col-lg-4 mb-3">
          <BurgerCard image={Product1} name="Hamburger" price="2$" />
        </div>
        <div className="col-md-6 col-lg-4 mb-3">
          <BurgerCard image={Product1} name="Hamburger" price="2$" />
        </div>
        <div className="col-md-6 col-lg-4 mb-3">
          <BurgerCard image={Product1} name="Hamburger" price="2$" />
        </div>
        
      </div>
    </Container>
  </section>
  

  );
};

export default Menu;
