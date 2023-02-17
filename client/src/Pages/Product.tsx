import React from 'react';
import { useParams } from 'react-router-dom';
import { useMainContext } from '../Context';

function Product() {
  const { productId } = useParams();
  const { productsList } = useMainContext();
  const product = productsList.find((p) => p.id.toString() === productId);

  return (
    <div className="home">
      <div className="container">
        {product
          && (
            <div className="row align-items-center my-5">
              <div className="col-lg-7">
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src={`https://loremflickr.com/g/3000/2000/${product.category}`}
                  alt="random"
                />
              </div>
              <div className="col-lg-5">
                <h1 className="font-weight-light">{product.title}</h1>
                <p>
                  {product.description}
                </p>
                <p>
                  {product.price}
                </p>
                <p>
                  {product.quantity}
                </p>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default Product;
