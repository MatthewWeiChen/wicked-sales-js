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
        <nav className="container p-2 ml-2">
          <div className="row align-items-center d-flex header-text cursor">
            <i className="fas fa-mug-hot fa-md" onClick={this.returnHome}></i>
            <h6 className="m-0" onClick={this.returnHome}>The Grind</h6>
          </div>
          <div>
            <i className="fas fa-shopping-cart shopping-cart fa-lg cursor" onClick={this.handleClick}></i>
            ({`${this.props.cartItemCount})`}
          </div>
        </nav>
      </header>

    );
  }
}
