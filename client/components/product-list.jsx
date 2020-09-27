import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => this.setState({
        products: this.state.products.concat(data)
      }));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const products = this.state.products;
    return (
      <div className="container">
        <div className="card-deck">
          {products.map((product, index) => (
            <div className="col-4 short mt-5" key={index}>
              <ProductListItem
                images={product.image}
                text={product.shortDescription}
                name={product.name}
                price={product.price}
                key={index} />
            </div>
          ))};
        </div>
      </div>
    );
  }
}
