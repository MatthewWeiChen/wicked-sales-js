import React from 'react';
import Header from './header';
import ProductDetails from './product-details';
import ProductList from './product-list';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';
import Modal from './modal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      view: {
        name: 'catalog',
        params: {}
      },
      open: true
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.modalDisclaimer = this.modalDisclaimer.bind(this);
    this.changeModal = this.changeModal.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  modalDisclaimer() {
    if (this.state.open) return 'show d-block';
  }

  changeModal() {
    this.setState({ open: false });
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems() {
    fetch('/api/cart')
      .then(response => response.json())
      .then(data => this.setState({ cart: data }));
  }

  addToCart(product) {
    const init = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    };
    fetch('/api/cart', init)
      .then(res => res.json())
      .then(data => this.setState({ cart: this.state.cart.concat(data) }));
  }

  placeOrder(order) {
    const init = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    };
    fetch('/api/orders', init)
      .then(result => {
        this.setState({
          view: {
            name: 'catalog',
            params: {}
          }
        });
      })
      .then(result => {
        this.setState({
          cart: []
        });
      });
  }

  renderSwitch(state) {
    switch (state) {
      case 'catalog':
        return <ProductList onClick={this.setView} />;
      case 'detail':
        return <ProductDetails view={this.state.view.params}
          onClick={this.setView} addToCart={this.addToCart} />;
      case 'cart':
        return <CartSummary cart={this.state.cart} onClick={this.setView} />;
      case 'checkout':
        return <CheckoutForm cart={this.state.cart} onClick={this.setView} order={this.placeOrder} />;
    }
  }

  render() {
    const modal = this.modalDisclaimer();
    return (
      <div className="container-fluid">
        <Header cartItemCount={this.state.cart.length} setView={this.setView} />
        <Modal modalSwitch={modal} changeModal={this.changeModal} />
        { this.renderSwitch(this.state.view.name)}
      </div>
    );
  }
}
