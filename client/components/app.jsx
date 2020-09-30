import React from 'react';
import Header from './header';
import ProductDetails from './product-details';
import ProductList from './product-list';
import CartSummary from './cart-summary';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
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

  renderSwitch(state) {
    switch (state) {
      case 'catalog':
        return <ProductList onClick={this.setView} />;
      case 'detail':
        return <ProductDetails view={this.state.view.params}
          onClick={this.setView} addToCart={this.addToCart} />;
      case 'cart':
        return <CartSummary cart={this.state.cart} onClick={this.setView} />;
    }
  }

  render() {
    return (
      <>
        <Header cartItemCount={this.state.cart.length} setView={this.setView} />
        { this.renderSwitch(this.state.view.name)}
      </>
    );
  }
}
