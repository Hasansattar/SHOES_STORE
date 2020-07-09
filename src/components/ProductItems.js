import React from 'react'
import { useParams } from 'react-router-dom';
import Shoesjson from './../Shoes.json'
const ProductItems = () => {


    const { id } = useParams();

    //console.log(id)
    const shoe = Shoesjson[id];
    //console.log(shoe)

    if (!shoe)
        return (<h2>
            product not found
        </h2>)
    return (
        <div>
            <h1>welcome to Product Items</h1>
            <div className="Link"  >
                <h2>{shoe.name}</h2>
                <img src={shoe.img} height={500} alt="this_is_items"/>
            </div>
        </div>
    )
}
export default ProductItems;