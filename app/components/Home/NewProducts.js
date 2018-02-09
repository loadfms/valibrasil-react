import React from 'react';
import Card from './../Product/Card';

const NewProducts = () => {
    return (
        <div className="newproducts">
            <span className="newproducts--title">New Products</span>
            <div className="newproducts--list">
                <ul className="products--list">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ul>
            </div>
        </div>
    );
};

export default NewProducts;
