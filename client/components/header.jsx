import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header container-fluid ">
        <div className="row justify-content-between">
          <div className="pt-3 header-text">$Wicked Sales</div>
          <div>{`${this.props.cartItemCount} items`}
            <i className="fas fa-shopping-cart shopping-cart fa-lg pt-3 pr-3"></i>
          </div>

        </div>
      </header>
    );
  }
}
