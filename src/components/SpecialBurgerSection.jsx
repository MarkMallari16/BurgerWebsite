import React from "react";
import { Container } from "react-bootstrap";

const SpecialBurgerSection = () => {
  return (
    <Container>
      <section className="special-burger">
        <div className="fs-4 fw-bold text-center header">
            Special <span className="menu-text-highlight">Menu</span>
        </div>
      </section>
    </Container>
  );
};

export default SpecialBurgerSection;
