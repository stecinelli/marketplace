import React from 'react';

function ProductCard() {
  const cardStyle = {
    width: '18rem',
  };
  return (
    <div className="col">
      <div className="card" style={cardStyle}>
        <img src="https://picsum.photos/id/2/3000/2000" className="card-img-top" alt="random" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <a href="../Pages/Product" className="btn btn-primary">See more</a>
          <a href="../Pages/Cart" className="btn btn-primary m-3">Add to cart</a>
        </div>
      </div>
    </div>

  );
}

export default ProductCard;
