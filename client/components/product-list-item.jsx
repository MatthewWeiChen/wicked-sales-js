import React from 'react';

const ProductListItem = props => {

  return (
    <div onClick={props.onClick} className="card h-100 cursor" >
      <img src={props.images} alt={props.name} className="card-img-top img-size text-center"></img>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text price-color">{'$' + (props.price / 100).toFixed(2)}</p>
        <p className="card-text font-italic">{props.text}</p>
      </div>
    </div >
  );
};

export default ProductListItem;
