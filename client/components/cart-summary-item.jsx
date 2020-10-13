import React from 'react';

const CartSummaryItem = props => {
  return (
    <div className="card mb-3 mt-3">
      <div className="row no-gutters align-items-center">
        <div className="col-md-4 d-flex justify-content-center">
          <img className="img-size card-img" src={props.image} alt={props.name}></img>
        </div>
        <div className="col-md-8 d-flex flex-column justify-content-center">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="price-color card-text">{'$' + (props.price / 100).toFixed(2)}</p>
            <p className="card-text">{props.shortDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummaryItem;
