import React from "react";

export default function ProductCard({ image, title, description, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} width="200" />
      <h2>{title}</h2>
      <p>{description}</p>
      <strong>Price: ₹{price}</strong>
    </div>
  );
}
