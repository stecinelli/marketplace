import React from 'react';
import ProductCard from '../Components/ProductCard';

function ProductSection() {
  return (
    <div className="home">
      <div className="container">
        <h3 className="fw-semibold fs-3 m-3 border-bottom border-secondary">Section 1</h3>
        <div className="row gap-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
