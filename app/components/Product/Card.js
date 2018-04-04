import React from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

const Card = (props) => {
  return (
    <Link to={'/produto/' + slugify(props.product.name.toLowerCase()) + '/' + props.product.id}>
      <li className="products--list__card">
        <img alt="product" src={props.product.image} />
        <div className="products--list__card__info">
          <span className="products--list__card__info__title">{props.product.name}</span>
        </div>
        <Link to={'/produto/' + slugify(props.product.name.toLowerCase()) + '/' + props.product.id} className="general--button products--list__card__button"><i class="fas fa-search-plus"></i> Detalhe</Link>        
      </li>
    </Link>
  );
};

export default Card;
