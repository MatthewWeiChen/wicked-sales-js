import React from 'react';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.returnHome = this.returnHome.bind(this);
  }

  handleClick() {
    this.props.setView('cart', {});
  }

  returnHome() {
    this.props.setView('catalog', {});
  }

  render() {
    return (
      <header className="header container-fluid ">
        <div className="row justify-content-between">
          <div className="pt-4 header-text cursor">The Grind <i className="fas fa-mug-hot fa-lg" onClick={this.returnHome}></i></div>
          <div className="pr-3">
            <i className="fas fa-shopping-cart shopping-cart fa-lg pt-4 cursor" onClick={this.handleClick}></i>
            ({`${this.props.cartItemCount})`}
          </div>

        </div>
      </header>
    );
  }
}
