import React, { Component } from 'react';
import axios from 'axios';

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: undefined
    }
  }

  componentWillMount() {
    this.loaditem();
  }

  loaditem() {
    let _this = this;
    axios.get('http://api.loadfms.com:8081/api/valibrasil/product/single/' + this.props.match.params.id)
      .then(function (response) {
        console.log(response.data.rows[0]); // ex.: { user: 'Your User'}
        _this.setState({ item: response.data.rows[0] });
      });
  }

  render() {
    if (this.state.item) {
      return (
        <div className="product">
          <div className="product--image">
            <img src={this.state.item.image} />
          </div>
          <div className="product--detail">
            <span className="product--detail__title">{this.state.item.name}</span>
            <span className="product--detail__subtitle">{this.state.item.description}</span>
          </div>
        </div>
      );
    }
    return '';
  }
}

export default Detail;