import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const handleAddProduct = (product) => {
        console.log('producted added',product)
    }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(pd =>
                            <Product
                            product={pd}
                            handleAddProduct = {handleAddProduct}
                            ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <h1>This is cart</h1>
                </div>
            </div>

        </div>
    );
};

export default Shop;