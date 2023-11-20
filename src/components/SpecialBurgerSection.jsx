import React from "react";
import { Container } from "react-bootstrap";
import SpecialMenuCard from "./SpecialMenuCard";
import { RiStarSFill } from "react-icons/ri";

const SpecialBurgerSection = () => {
  return (
    <section className="special-burger">
      <Container>
        <div className="product-container mt-3 d-flex flex-wrap">
          <div className="col-lg-6 col-md-12 mb-3 special-product-container">
            <SpecialMenuCard />
          </div>
          <div className="col-lg-6 col-md-12 special-text">
            <div className="special-text-header">
              <div className="fs-1 fw-bold">Special <span className="text-red-highlight">Burger</span></div>
            </div>
            <div className="mt-2 fw-light special-text-description lh-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore commodi assumenda sequi at voluptatem vitae, delectus molestiae facilis veniam a, deleniti ab molestias magni autem culpa beatae cum impedit sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero magnam odit voluptatibus temporibus reprehenderit repudiandae accusamus deserunt sunt quam?
            </div>
            <div className="mt-2 d-flex">
              <div className="stars">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
              +

            </div>
          </div>
        </div>
      </Container>

    </section>

  );
};

export default SpecialBurgerSection;
