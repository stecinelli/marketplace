import React from 'react';
import ProductCard from './ProductCard';
import { ISectionTitle } from '../Types';
import { useMainContext } from '../Context';

function ProductSection({ sectionTitle }: ISectionTitle) {
  const { productsList } = useMainContext();
  return (
    <div>
      <h3 className="fw-semibold fs-3 m-3 border-bottom border-secondary">{sectionTitle}</h3>
      <div className="row gap-3">
        {productsList
          .filter((p) => p.category === sectionTitle)
          .map((p) => <ProductCard product={p} key={p.id} />)}
      </div>
    </div>
  );
}

export default ProductSection;
