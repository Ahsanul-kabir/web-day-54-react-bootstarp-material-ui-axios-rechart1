import React from 'react';

const Product = (props) => {
    console.log(props);
    return (
        <div>
            <h3>{props.product.name}</h3>
        </div>
    );
};

export default Product;