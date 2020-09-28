import React from 'react';

const ProductListItem = props => {

  return (
    <div onClick={props.onClick} className="card card-width h-100 shadow-sm cursor" >
      <img src={props.images} className="card-img-top img-size text-center"></img>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="price-color">{'$' + (props.price / 100).toFixed(2)}</p>
        <p className="card-text">{props.text}</p>
      </div>
    </div >
  );

};

export default ProductListItem;
