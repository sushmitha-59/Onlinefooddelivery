import React from "react";
import Card from "./Card";


function Beverages() {
    const softdrinks=[
        {
            id:41,
            title:"Coca Cola",
            price:19,
            imageUrl:"assets/Coca Cola.jpg",
            
        },
        {
            id:42,
            title:"Rose Milk",
            price:19,
            imageUrl:"assets/Rose Milk.jpg",
            
        },
        {
            id:43,
            title:"Lemon juice",
            price:19,
            imageUrl:"assets/Lemon juice.jpg",
            
        },
        {
            id:44,
            title:"Coconut smoothie",
            price:19,
            imageUrl:"assets/Coconut smoothie.jpg",
            
        },
    ];
    const harddrinks=[
        {
            id:45,
            title:"Carlsberg",
            price:19,
            imageUrl:"assets/carlsberg.jpg",
            
        },
        {
            id:46,
            title:"King Fisher",
            price:19,
            imageUrl:"assets/King Fisher.jpg",
            
        },
        {
            id:47,
            title:"McDowells",
            price:19,
            imageUrl:"assets/McDowells-No.1.jpg",
            
        },
        {
            id:48,
            title:"Mojito",
            price:19,
            imageUrl:"assets/Mojito.jpg",
            
        },

    ];
    return (
        <div id="body1">
            <div className="container-fluid text-center h1"id="starterscontainerfluid" style={{fontFamily: "Brush Script MT, cursive", color:"burlywood"}}>
                Beverages
    </div>
    <div className="container-fluid text-center h1"id="starterscontainerfluid">
        <div className="row">
            <div className="col-md-6 text-center h1">
                <div className="row">
                    <div className="col-lg-12 text-center h1" style={{fontFamily: "Brush Script MT, cursive", color:"burlywood"}}>
                        <p>Soft Drinks</p>
                    </div>
                </div>
                <div className="row" id="startersrow">
                {
                     softdrinks.map((item,index) => (
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
                        <p>Hard Drinks</p>
                    </div>
                </div>
                <div className="row" id="startersrow">
                {
                     harddrinks.map((item,index) => (
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
export default Beverages;
