import React from "react";

const ProductCard = ({ product }) => {
  const { title, price, description, image } = product;
  return (
    <div className="product-card">
      <img src={image} alt={title}></img>
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="price">${price}</p>
    </div>
  );
};

export default ProductCard;
