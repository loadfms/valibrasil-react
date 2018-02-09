import React from 'react';
import Menu from './Menu';
import Info from './Info';

const Top = () => {
  return (
    <div className="header">
      <div className="header--info">
        <Info />
      </div>
      <div className="header--logo">
        <img alt="logo" src="https://ld-magento.template-help.com/magento_62000/pub/media/theme_options/default/logo_2.png" />
      </div>
      <div className="header--menu">
        <Menu />
      </div>
    </div>
  );
};

export default Top;
