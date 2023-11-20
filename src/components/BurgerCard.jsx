import React from "react";


const BurgerCard = ({ image, name, price }) => {
  return (
    <>
      <div className="card w-25 border-0 rounded pt-4 pb-2">
        <div className="d-flex justify-content-center image-container w-100 img-fluid">
          <img src={image} className="w-50" alt="img-fluid burger picture" />
        </div>
        <div className="fs-4 text-center ">{name}</div>
        <div className="mt-2 fs-3 text-center price fw-bold">{price}</div>
      </div>
    </>
  );
};

export default BurgerCard;
