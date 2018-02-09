import React from 'react';
import Menu from './Menu';
import Slider from './Slider';
import Info from './Info';

const Top = () => {
    return (
        <div className="header">
            <div className="row header--info">
                <Info />
            </div>
            <div className="row header--logo">
                <img src="https://ld-magento.template-help.com/magento_62000/pub/media/theme_options/default/logo_2.png" />
            </div>
            <div className="row header--menu">
                <Menu />
            </div>
            <div className="row header--slider">
                <Slider />
            </div>
        </div>
    );
};

export default Top;