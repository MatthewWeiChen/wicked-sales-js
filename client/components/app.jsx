import React from 'react';
import Header from './header';
import ProductDetails from './product-details';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  render() {
    return (
      <>
        <Header />
        {this.state.view.name === 'catalog'
          ? <ProductList onClick={this.setView} />
          : <ProductDetails view={this.state.view.params}
            onClick={this.setView} />}
      </>
    );
  }
}
