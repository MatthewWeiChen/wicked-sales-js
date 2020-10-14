import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => this.setState({
        products: this.state.products.concat(data)
      }));
  }

  handleClick(props) {
    this.props.onClick('detail', { productId: props });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const products = this.state.products;
    return (
      <div className="main container mb-3">
        <div className="d-flex row">
          {products.map((product, index) => (
            <div className="col-lg-4 card-group col-md-4 mt-5 justify-content-center card-hover" key={index}>
              <ProductListItem
                images={product.image}
                text={product.shortDescription}
                name={product.name}
                price={product.price}
                id={product.productId}
                onClick={() => this.handleClick(product.productId)} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
