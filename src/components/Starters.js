import React from "react";
import Card from "./Card";



function Starters() {
    const vstarters=[
        {
            id:1,
            title:"Mushroom Soup ",
            price:19,
            imageUrl:"assets/mushroom soup.jpg",
           
        },
        {
            id:2,
            title:"Veg Manchurian ",
            price:19,
            imageUrl:"assets/veg-manchurian.jpg",
           
        },
        {
            id:3,
            title:"Panneer 65",
            price:19,
            imageUrl:"assets/panneeer 65.jpg",
           
        },
        {
            id:4,
            title:"Gobi 65",
            price:19,
            imageUrl:"assets/gobi 65.jpg",
           
        },
    ];
    const nvstarters=[
        {
            id:5,
            title:"Chicken Lollipop",
            price:19,
            imageUrl:"assets/chicken lollipop.jpg",
           
        },
        {
            id:6,
            title:"Omlette",
            price:19,
            imageUrl:"assets/egg omlette.png",
           
        },
        {
            id:7,
            title:"Meat Balls ",
            price:19,
            imageUrl:"assets/meat ball.jpg",
           
        },
        {
            id:8,
            title:"Prawn Fry",
            price:19,
            imageUrl:"assets/chilli fried prawns.jpg",
           
        },

    ];
    return (
        

        <div id="body1">
            <div className="container-fluid text-center h1"id="starterscontainerfluid" style={{fontFamily: "Brush Script MT, cursive", color:"burlywood"}}>
        Starters
    </div>
    <div className="container-fluid text-center h1"id="starterscontainerfluid">
        <div className="row">
            <div className="col-md-6 text-center h1">
                <div className="row">
                    <div className="col-lg-12 text-center h1" style={{fontFamily: "Brush Script MT, cursive", color:"burlywood"}}>
                        <p>Veg Starters</p>
                    </div>
                </div>
                <div className="row" id="startersrow">
                    {
                     vstarters.map((item,index) => (
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
                        <p>Non-Veg Starters</p>
                    </div>
                </div>
                <div className="row" id="startersrow">
                {
                     nvstarters.map((item, index) => (
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
export default Starters;
