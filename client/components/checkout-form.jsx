import React from 'react';

export default class CheckoutForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.getAverage = this.getAverage.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getAverage(props) {
    const price = this.props.cart.filter(item => item.price);
    const average = price.reduce((total, next) => total + next.price, 0);
    return (average / 100).toFixed(2);
  }

  handleClick() {
    this.props.onClick('catalog', {});
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.order(this.state);
  }

  render() {
    const average = this.getAverage();
    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <h2 className="mt-4">My Cart</h2>
        </div>
        <div className="row d-flex justify-content-center">
          <h4 className="mt-4 price-color">{`Order Total:${average}`}</h4>
        </div>
        <div className="row d-flex justify-content-center">
          <form onSubmit={this.handleSubmit}>
            <div>Name</div>
            <input value={this.state.name}
              onChange={this.handleChange}
              type="text"
              size="100"
              name="name" required>
            </input>
            <div className="mt-3">Credit Card</div>
            <input
              value={this.state.creditCard}
              onChange={this.handleChange}
              className="mt-2"
              type="text"
              size="100"
              name="creditCard" required>
            </input>
            <div className="mt-3">Shipping Address</div>
            <textarea
              value={this.state.shippingAddress}
              onChange={this.handleChange}
              className="mt-2 address"
              rows="6"
              cols="100"
              name="shippingAddress" required>
            </textarea>
            <div className="row justify-content-between">
              <div onClick={this.handleClick}
                className="price-color cursor mt-5">
                {'< Continue Shopping'}
              </div>
              <button className="btn btn-primary mt-5" type="submit">Place Order</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

}
//
