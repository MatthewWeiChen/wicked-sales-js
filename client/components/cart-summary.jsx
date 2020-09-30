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

  const emptyCart = () => <h4 className="empty-cart">Your shopping cart is empty</h4>;

  return (
    <>
      <div onClick={handleClick}
        className="price-color cursor mt-3 ml-3">
        {'< Back to Catalog'}
      </div>
      <h2 className="ml-5 mt-2">My Cart</h2>
      <div>
        {!props.cart ? { emptyCart } : listItems}
      </div>
      <div className="row d-flex justify-content-between">
        <h3 className="ml-5 mt-3">{`Item Total:${getAverage(props)}`}</h3>
        <button className="btn btn-primary checkout-button" onClick={handleCheckout}>Checkout</button>
      </div>
    </>
  );
};

export default CartSummary;
