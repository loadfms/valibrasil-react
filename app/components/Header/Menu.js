import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  componentWillMount() {
    this.loadmenu();
  }

  loadmenu() {
    let _this = this;
    axios.get('https://apimagiccatalog.herokuapp.com/api/valibrasil/category')
      .then(function (response) {
        _this.setState({ items: response.data.rows });
      });
  }

  render() {
    console.log(this.state.items);
    if (this.state.items) {
      return (
        <ul>
          {this.state.items.map((item, index) => (
            <li><Link to={'/' + item.name}>{item.name}</Link></li>
          ))}
        </ul>
      );
    }
    return '';
  }
}

export default Menu;