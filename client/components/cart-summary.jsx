import React from 'react';
import CartSummaryItem from './cart-summary-item';

const CartSummary = props => {

  const handleClick = () => {
    props.onClick('catalog', {});
  };

  const listItems = props.cart.map((item, index) =>
    <CartSummaryItem
      name={item.name}
      price={item.price}
      image={item.image}
      shortDescription={item.shortDescription}
      key={index}
    />
  );

  const handleCheckout = () => props.onClick('checkout', {});

  const getAverage = props => {
    const price = props.cart.filter(item => item.price);
    const average = price.reduce((total, next) => total + next.price, 0);
    return (average / 100).toFixed(2);
  };

  const emptyCart = <h4 className="empty-cart mt-3">Your shopping cart is empty</h4>;

  return (
    <div className="container">
      <div onClick={handleClick}
        className="price-color row cursor mt-3 ml-3">
        {'< Back to Catalog'}
      </div>
      <div className="row">
        <h2 className="ml-5 mt-2">My Cart</h2>
      </div>
      {props.cart.length === 0 ? emptyCart : listItems}
      <div className="row my-5">
        <h4 className="col-md-6 total-price">{`Item Total:$${getAverage(props)}`}</h4>
        <div className="col-md-6 checkout-btn">
          <button className="btn btn-primary" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
