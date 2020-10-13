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
          <h4>Disclaimer: This is a demo site. No real purchases will be made. Please do not use personal information when checking out.</h4>
          <h2 className="mt-4">My Cart</h2>
        </div>
        <div className="row d-flex justify-content-center">
          <h4 className="mt-4 price-color">{`Order Total:$${average}`}</h4>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input value={this.state.name}
                  onChange={this.handleChange}
                  type="text"
                  size="100"
                  name="name"
                  className="form-control"
                  required>
                </input>
              </div>
              <div className="form-group">
                <label className="mt-1">Credit Card</label>
                <input
                  value={this.state.creditCard}
                  onChange={this.handleChange}
                  className="mt-1 form-control"
                  type="text"
                  size="100"
                  name="creditCard"
                  required>
                </input>
              </div>
              <div className="form-group">
                <label className="mt-1">Shipping Address</label>
                <textarea
                  value={this.state.shippingAddress}
                  onChange={this.handleChange}
                  className="mt-1 address form-control"
                  rows="6"
                  cols="100"
                  name="shippingAddress" required>
                </textarea>
              </div>
              <div className="row justify-content-between">
                <div onClick={this.handleClick}
                  className="price-color cursor mt-4">
                  {'< Continue Shopping'}
                </div>
                <button className="btn btn-primary mt-4" type="submit" value="Place Order">Place Order</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

}
//
