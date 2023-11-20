import Button from "react-bootstrap/Button";
import React from "react";
import { Container } from "react-bootstrap";
import HeroImage3 from "../assets/HeroImage3.png";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="mt-5 HeroSection text-sm-start text-center">
      <Container>
        <div className="row align-items-center">
          <div className="col-lg-6  hero-content">
            <div className=" hero-header">
              Discover Flavorful <span className="text-orange-highlight">Delights</span> at <span className="text-red-highlight">PrimeBites!</span>
            </div>
            <div className="fw-light hero-sub-header">
              At PrimeBites, we take pride in crafting more than just burgers
              we're creating moments of delight. Explore our menu and savor the
              joy of personalized, flavorful bites tailored to elevate your
              dining experience.
            </div>
            <div className="mt-3 button-container">
              <Button className="cta-btn btn  text-white">Order Now <FaArrowRightLong />
              </Button>
            </div>
          </div>
          <div className="col-lg-6  hero-image mt-sm-0 mt-5">
            <img src={HeroImage3} alt="burger" className=" img-fluid" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
