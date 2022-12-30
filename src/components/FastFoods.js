import React from "react";
import Card from "./Card";


function FastFoods() {
    const vfastfoods=[
        {
            id:33,
            title:"Mushroom Burger",
            price:19,
            imageUrl:"assets/veg-burger.jpg",
        
        },
        {
            id:34,
            title:"Panneer Pizza",
            price:19,
            imageUrl:"assets/Pizza.jpg",
        
        },
        {
            id:35,
            title:"Veg Noodles",
            price:19,
            imageUrl:"assets/veg noodles.jpg",
        
        },
        {
            id:36,
            title:"French Fries",
            price:19,
            imageUrl:"assets/French Fries.jpg",
        
        },
    ];
    const nvfastfoods=[
        {
            id:37,
            title:"Chicken Kebab",
            price:19,
            imageUrl:"assets/chicken leg piece (1).jpg",
        
        },
        {
            id:38,
            title:"Egg Noodles",
            price:19,
            imageUrl:"assets/egg noodles.jpg",
        
        },
        {
            id:39,
            title:"Fish Sandwich",
            price:19,
            imageUrl:"assets/fish sandwich.jpg",
        
        },
        {
            id:40,
            title:"Mutton Burger",
            price:19,
            imageUrl:"assets/mutton burger.jpg",
        
        },

    ];
    return (
        <div id="body1">
            <div className="container-fluid text-center h1"id="starterscontainerfluid" style={{fontFamily: "Brush Script MT, cursive", color:"burlywood"}}>
                Fast Foods
    </div>
    <div className="container-fluid text-center h1"id="starterscontainerfluid">
        <div className="row">
            <div className="col-md-6 text-center h1">
                <div className="row">
                    <div className="col-lg-12 text-center h1" style={{fontFamily: "Brush Script MT, cursive", color:"burlywood"}}>
                        <p>Veg Fast Foods</p>
                    </div>
                </div>
                <div className="row" id="startersrow">
                {
                     vfastfoods.map((item,index) => (
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
                        <p>Non-Veg Fast Foods</p>
                    </div>
                </div>
                <div className="row" id="startersrow">
                {
                     nvfastfoods.map((item,index) => (
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
export default FastFoods;
