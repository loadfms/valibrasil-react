import React from 'react';

const Card = () => {
  return (
    <li className="products--list__card">
      <img alt="product" src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/select/macbook-select-space-gray-201706?wid=452&hei=420&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1505775431709" />
      <span className="products--list__card__title">Macbook Air</span>
      <button className="general--button">Detalhe</button>
    </li>
  );
};

export default Card;
