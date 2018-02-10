import React, { Component } from 'react';
import Card from './../Product/Card';
import axios from 'axios';

class NewProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }


  componentWillMount() {
    this.loadproducts();
  }

  loadproducts() {
    let _this = this;
    axios.get('https://apimagiccatalog.herokuapp.com/api/valibrasil/product/cover')
      .then(function (response) {
        console.log(response.data.rows); // ex.: { user: 'Your User'}
        _this.setState({ products: response.data.rows });
      });
  }

  render() {
    return (
      <div className="newproducts">
        <span className="newproducts--title">New Products</span>
        <div className="newproducts--list">
          <ul className="products--list">
            {this.state.products.map((item, index) => (
              <Card product={item} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default NewProducts;