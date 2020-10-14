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
      <header className="row navbar header d-flex justify-content-between">
        <nav className="container p-1">
          <div className="row align-items-center ml-1 d-flex header-text cursor">
            <i className="fas fa-mug-hot fa-md" onClick={this.returnHome}></i>
            <h6 className="m-0" onClick={this.returnHome}>The Grind</h6>
          </div>
          <div>
            <i className="fas fa-shopping-cart shopping-cart fa-lg cursor m-0" onClick={this.handleClick}></i>
            <span className="cursor" onClick={this.handleClick}>({`${this.props.cartItemCount})`}</span>
          </div>
        </nav>
      </header>

    );
  }
}
