import React from 'react';
import ProductSection from '../Components/ProductSection';

function Products() {
  const sections: Array<string> = [
    'Kids',
    'Beauty',
    'Sports',
    'Shoes',
    'Clothing',
    'Automotive',
    'Books',
    'Electronics',
    'Computers',
    'Games',
    'Movies',
    'Outdoors',
    'Health',
    'Toys',
    'Industrial',
    'Music',
    'Grocery',
    'Baby',
    'Tools',
    'Jewelry',
    'Garden',
    'Home',
  ];

  return (
    <div className="home">
      <div className="container">
        {sections.map((s) => <ProductSection sectionTitle={s} key={s} />)}
      </div>
    </div>
  );
}

export default Products;
