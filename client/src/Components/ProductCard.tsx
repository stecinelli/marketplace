import React from 'react';
import { IProductProp } from '../Types';

function ProductCard({ product: { description, title, category } }: IProductProp) {
  const cardStyle = {
    width: '18rem',
  };
  return (
    <div className="col">
      <div className="card" style={cardStyle}>
        <img src={`https://loremflickr.com/g/3000/2000/${category}`} className="card-img-top" alt="random" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="../Pages/Product" className="btn btn-primary">See more</a>
          <a href="../Pages/Cart" className="btn btn-primary m-3">Add to cart</a>
        </div>
      </div>
    </div>

  );
}

export default ProductCard;
