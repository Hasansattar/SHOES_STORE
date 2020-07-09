import React from 'react'
import Shoesjson from './../Shoes.json'
import { Link } from 'react-router-dom'

import  './../App.css'

const Product = () => {

    console.log(Shoesjson);
    //  console.log(Object.keys(Shoesjson))
    return (
        <div>
            <h1>welcome to Product</h1>
            <div className="productcontainer">
                {Object.keys(Shoesjson).map(keyName => {
                    const shoe = Shoesjson[keyName];
                    return (<Link key={keyName} className="Link" to={`/product/${keyName}`}>
                        <h2>{shoe.name}</h2>
                        <img src={shoe.img} height={150} alt="this is main images"/>
                    </Link>

                    )
                })}
            </div>
        </div>
    )
}
export default Product;