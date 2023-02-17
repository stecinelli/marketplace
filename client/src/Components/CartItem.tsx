import React from 'react';

function CartItem() {
  return (
    <div className="card mb-3 m-2">
      <div className="row g-0 m-4">
        <div className="col-md-4">
          <img src="https://picsum.photos/id/5/2000/3000" className="img-fluid rounded-start" alt="random" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Product Name</h5>
            <button type="button" className="btn btn-light">-</button>
            <span className="card-text">
              <input className="form-control w-25" placeholder="Qnt" />
            </span>
            <button type="button" className="btn btn-light">+</button>
            <p className="text-md-end">$100,00</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default CartItem;
