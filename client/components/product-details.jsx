import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.view.productId}`)
      .then(res => res.json())
      .then(product => this.setState({
        product: product
      }));
  }

  handleClick() {
    this.props.onClick('catalog', {});
  }

  handleAddClick() {
    this.props.addToCart(this.props.view);
  }

  render() {
    const product = this.state.product;
    if (product) {
      return (
        <div className="container details shadow-sm mb-3 mt-5">
          <div className="row">
            <div className="col-md-4 mt-3">
              <div onClick={this.handleClick}
                className="pb-5 price-color cursor">
                {'< Back to Catalog'}
              </div>
              <img className="product-img mt-2 pb-3 mr-3" src={product.image} alt={product.name} />
            </div>
            <div className="col-md-7 mt-5">
              <h2>{product.name}</h2>
              <div className="price-color">{'$' + (product.price / 100).toFixed(2)}</div>
              <hr></hr>
              <p>{product.shortDescription}</p>
              <p className="paragraph-spacing">{product.longDescription}</p>
              <div className="row add-to-cart mt-5 mb-3">
                <button className="btn btn-primary" onClick={this.handleAddClick}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div >
      );
    } else {
      return (
        null
      );
    }
  }
}
