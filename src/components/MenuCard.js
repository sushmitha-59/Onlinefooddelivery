import React from 'react';
import { useCart } from "react-use-cart";

function MenuCard(props) {
    const { addItem }=useCart();

    const { title, price,  imageUrl }=props;
    return (
       
            
                    <div className="card shadow h-100 " id="menucard">
                        <img className="card-img-top card1-img-fluid " src={imageUrl}/>
                        
                            <h4 style={{fontWeight: "lighter",fontSize: "6mm"}}>
                                   {title}
                            </h4>
                            <p style={{fontWeight: "lighter",fontSize: "5mm"}}>${price}</p>
                            <button className="btn"id="btn1"onClick={()=>addItem(props.item)}>
                                Add to cart
                            </button>
                        
                        
                    </div>
               
            
    
    )
}
export default MenuCard;
