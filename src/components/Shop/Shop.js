import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart,setCart] =useState([]);

    const handleAddProduct = (product) => {
        console.log('producted added',product);
        const newCart = [...cart,product];
        setCart(newCart);
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
                    <h5>Order Summary: {cart.length}</h5>

                </div>
            </div>

        </div>
    );
};

export default Shop;