import React from 'react';
import Menu from './Menu';
import Info from './Info';
import img from '../../assets/images/logo-valibrasil.png';

const Top = () => {
  return (
    <div className="header" >
      <div className="header--info">
        <Info />
      </div>
      <div className="header--logo">
        <img alt="logo" src={img} />
      </div>
      <div className="header--menu">
        <Menu />
      </div>
    </div >
  );
};

export default Top;
