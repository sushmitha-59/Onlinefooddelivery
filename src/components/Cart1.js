 import React from 'react';
import {useCart} from "react-use-cart";
import {Link} from "react-router-dom";
function Cart1() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    }=useCart();
    if(isEmpty) return (
        <div><h1 className="text-center1">Your Cart is Empty</h1><img src="https://thumbs.gfycat.com/SpottedBriskDuckbillplatypus-max-1mb.gif" className="cart_img" style={{width:"15%"}}/></div>)

        return (
            <section className="py-4 container-fluid col-12 col-sm-12" id="cart1" >
                <div className="row justify-content-center col-12 col-sm-12">
                    <div className="col-12 col-sm-12">
                       
                        <table className="table table-light table-hover mx-0 col-12 col-sm-12"id="carttable">
                            <tbody>
                                {items.map((item,index)=>{
                                return(

                                    <tr key={index}>
                                        <td>
                                            <img src={item.imageUrl} id="cartimage"/>
                                        </td>
                                        <td id="carttitle"style={{margin:"-10%" ,padding:"-10%"}}>{item.title}</td>
                                        <td id="cartprice" >${item.price}</td>
                                        <td id="cartquantity">({item.quantity})
                                        <button className="btn btn-info mx-1" id="btn-"
                                        onClick={()=>updateItemQuantity(item.id,item.quantity-1)}
                                        >-</button>

                                        <button className="btn btn-info mx-1"id="btnplus"
                                        onClick={()=>updateItemQuantity(item.id,item.quantity+1)}
                                        >+</button>
                                         <button className="btn btn-danger mx-1"id="btndel"
                                        onClick={()=>removeItem(item.id)}
                                        ><i class="fa fa-trash" aria-hidden="true"style={{textAlign:"center"}}></i>
                                        </button></td>
                                        
                                    </tr>)
                                        })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-auto mx-center">
                        <h2>Total Price: $ {cartTotal}</h2>
                    </div>
                    <div className="col-auto">
                        <button
                        className="btn btn-danger mx-2"
                        onClick={()=>emptyCart()}>Clear Cart

                        </button>
                        <Link to="/previousorders" type="Submit" className="btn btn-primary mx-2 ">Buy Now</Link>

                    </div>
                </div>

            </section>
    )
}

export default Cart1;