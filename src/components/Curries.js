import React from "react";
import Card from "./Card";


function Curries() {
    const vcurries=[
        {
            id:9,
            title:"Mixed Veg Curry",
            price:19,
            imageUrl:"assets/mixed-vegetable-curry.jpg",
            
        },
        {
            id:10,
            title:"Mushroom Masala",
            price:19,
            imageUrl:"assets/mushroom masala.jpg",
            
        },
        {
            id:11,
            title:"Palak Panner ",
            price:19,
            imageUrl:"assets/palak panner.jpg",
            
        },
        {
            id:12,
            title:"Chana Masala",
            price:19,
            imageUrl:"assets/easychanamasalabowlfront-1 (1).jpg",
            
        },
    ];
    const nvcurries=[
        {
            id:13,
            title:"Chicken Curry",
            price:19,
            imageUrl:"assets/chicken-curry.jpg",
            
        },
        {
            id:14,
            title:"Egg Curry",
            price:19,
            imageUrl:"assets/egg curry.jpg",
            
        },
        {
            id:15,
            title:"Fish Pulusu",
            price:19,
            imageUrl:"assets/Fish Pulusu.jpg",
            
        },
        {
            id:16,
            title:"Keema Curry",
            price:19,
            imageUrl:"assets/mutton-keema.jpg",
            
        },

    ];
    return (
        <div id="body1">
            <div className="container-fluid text-center h1"id="starterscontainerfluid" style={{fontFamily: "Brush Script MT, cursive", color:"burlywood"}}>
       Curries
    </div>
    <div className="container-fluid text-center h1"id="starterscontainerfluid">
        <div className="row">
            <div className="col-md-6 text-center h1">
                <div className="row">
                    <div className="col-lg-12 text-center h1" style={{fontFamily: "Brush Script MT, cursive", color:"burlywood"}}>
                        <p>Veg Curries</p>
                    </div>
                </div>
                <div className="row" id="startersrow">
                {
                     vcurries.map((item,index) => (
                        <div className="col-lg-6">
                            <Card 
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            item={item}
                            key={index}
                        />
                        </div>
                     ))

                    }

                </div>
                <div className="row">
                    <div className=" col-lg-12 container"id="starterscontainer">
                        <a href="/" id="startersmore">
                            See More <i className="fas fa-angle-double-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 text-center h1">
                <div className="row">
                    <div className="col-md-12 text-center h1" style={{fontFamily: "Brush Script MT, cursive", color:"burlywood"}}>
                        <p>Non-Veg Cuuries</p>
                    </div>
                </div>
                <div className="row" id="startersrow">
                {
                     nvcurries.map((item,index) => (
                        <div className="col-lg-6">
                            <Card 
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            item={item}
                            key={index}
                        />
                        </div>
                     ))

                    }
                   
                </div>
                <div className="row">
                    <div className="container"id="starterscontainer">
                        <a href="/" id="startersmore">
                            See More <i className="fas fa-angle-double-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    
        </div>
    )
}
export default Curries;
