import React from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

const Card = (props) => {
  return (
    <Link to={'/produto/' + slugify(props.product.name.toLowerCase()) + '/' + props.product.id}>
      <li className="products--list__card">
        <img alt="product" src={props.product.image} />
        <span className="products--list__card__title">{props.product.name}</span>
        <Link to={'/produto/' + slugify(props.product.name.toLowerCase()) + '/' + props.product.id} className="general--button">Detalhe</Link>
      </li>
    </Link>
  );
};

export default Card;
