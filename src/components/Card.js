import React from 'react';
import { useCart } from "react-use-cart";


function Card(props) {
    const { addItem }=useCart();

    const { title, price,  imageUrl }=props;
    return (
        
            <div className="container"id="starterscontainer">
                            <img src={imageUrl} alt={title} id="imgstarters"/>
                            <div className="middle"id="startersmiddle">
                                <div className="text"id="starterstext">
                                  {title}  ${price}
                                </div>
                            </div>
                            <p><button className="btn"id="startersbtn" onClick={()=>addItem(props.item)}>Add To Cart</button></p>
                        </div> 
        
    )
}
export default Card;
