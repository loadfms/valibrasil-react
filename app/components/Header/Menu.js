import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import slugify from 'slugify';

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
    axios.get('http://api.loadfms.com:8081/api/valibrasil/category')
      .then(function (response) {
        _this.setState({ items: response.data.rows });
      });
  }

  render() {
    if (this.state.items) {
      return (
        <ul>
          {this.state.items.map((item, index) => (
            <li className={
              (document.location.href.indexOf(slugify(item.name.toLowerCase())) > -1)
              ? "active" 
              : ""}>
              <Link to={'/categoria/' + slugify(item.name.toLowerCase())}>{item.name}</Link></li>
          ))}
          <li className={
              (document.location.href.indexOf('contato') > -1)
              ? "active" 
              : ""}>
              <Link to='/contato'>Contato</Link></li>
        </ul>
      );
    }
    return '';
  }
}

export default Menu;