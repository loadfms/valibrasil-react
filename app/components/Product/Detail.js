import React from 'react';

const Card = (props) => {
  return (
    <div className="product">
      <div className="product--image">
        <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/select/macbook-select-space-gray-201706?wid=452&hei=420&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1505775431709" />
      </div>
      <div className="product--detail">
        <span className="product--detail__title">Macbook Air</span>
        <span className="product--detail__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum sed felis ut pretium. Cras hendrerit a elit in vehicula. Vivamus non feugiat nisi. Vivamus at ultricies nisi.</span>
      </div>
    </div>
  );
};

export default Card;
