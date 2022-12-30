import React from "react";
import Card from "./Card";


function Refreshments() {
    const icecreams=[
        {
            id:49,
            title:"Chocolate Icecream",
            price:19,
            imageUrl:"assets/Chocolate ice cream.jpg",
            
        },
        {
            id:50,
            title:"Vannila Icecream",
            price:19,
            imageUrl:"assets/Vannila Ice cream.jpg",
            
        },
        {
            id:51,
            title:"Strawberry Icecream",
            price:19,
            imageUrl:"assets/Strawberry Ice cream (1).jpg",
            
        },
        {
            id:52,
            title:"Butterscotch Icecream",
            price:19,
            imageUrl:"assets/Butter-scotch-ice-cream.jpg",
            
        },
    ];
    const pastries=[
        {
            id:53,
            title:"Blue Berry Cake",
            price:19,
            imageUrl:"assets/blue berry cake.jpg",
            
        },
        {
            id:54,
            title:"Mango Cake",
            price:19,
            imageUrl:"assets/Mango cake.jpg",
            
        },
        {
            id:55,
            title:"Red Velvet",
            price:19,
            imageUrl:"assets/Red velvet.jpg",
            
        },
        {
            id:56,
            title:"Chocolate Cake",
            price:19,
            imageUrl:"assets/Chocolate Cake.jpg",
            
        },

    ];
    return (
        <div id="body1">
            <div className="container-fluid text-center h1"id="starterscontainerfluid" style={{fontFamily: "Brush Script MT, cursive", color:"burlywood"}}>
                Refreshments
    </div>
    <div className="container-fluid text-center h1"id="starterscontainerfluid">
        <div className="row">
            <div className="col-md-6 text-center h1">
                <div className="row">
                    <div className="col-lg-12 text-center h1" style={{fontFamily: "Brush Script MT, cursive", color:"burlywood"}}>
                        <p>Ice Creams</p>
                    </div>
                </div>
                <div className="row" id="startersrow">
                {
                     icecreams.map((item,index) => (
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
                        <p>Pastries</p>
                    </div>
                </div>
                <div className="row" id="startersrow">
                {
                     pastries.map((item,index) => (
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
export default Refreshments;
