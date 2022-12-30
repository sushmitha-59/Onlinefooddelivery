import React from "react";
import Card from "./Card";


function Tandooris() {
    const vtandooris=[
        {
            id:25,
            title:"Babycorn Tikka",
            price:19,
            imageUrl:"assets/babycorn tikka.jpg",
            
        },
        {
            id:26,
            title:"Aloo Tikka",
            price:19,
            imageUrl:"assets/aloo tikka (1).jpg",
            
        },
        {
            id:27,
            title:"Cauliflower Tikka.",
            price:19,
            imageUrl:"assets/cauliflower tikka.jpg",
            
        },
        {
            id:28,
            title:"Paneer Tikka",
            price:19,
            imageUrl:"assets/Paneer-Tikka-Tawa.jpg",
            
        },
    ];
    const nvtandooris=[
        {
            id:29,
            title:"Chicken Tikka",
            price:19,
            imageUrl:"assets/chicken tikka.jpg",
            
        },
        {
            id:30,
            title:"Crab Tandoori",
            price:19,
            imageUrl:"assets/Crab Tandoori.jpg",
            
        },
        {
            id:31,
            title:"Fish Tikka",
            price:19,
            imageUrl:"assets/fish tikka.jpg",
            
        },
        {
            id:32,
            title:"Prawns Tikka",
            price:19,
            imageUrl:"assets/prawns tikka (1).jpg",
            
        },

    ];
    return (
        <div id="body1">
            <div className="container-fluid text-center h1"id="starterscontainerfluid" style={{fontFamily: "Brush Script MT, cursive", color:"burlywood"}}>
       Tandooris n Tikkas
    </div>
    <div className="container-fluid text-center h1"id="starterscontainerfluid">
        <div className="row">
            <div className="col-md-6 text-center h1">
                <div className="row">
                    <div className="col-lg-12 text-center h1" style={{fontFamily: "Brush Script MT, cursive", color:"burlywood"}}>
                        <p>Veg Tandooris</p>
                    </div>
                </div>
                <div className="row" id="startersrow">
                {
                     vtandooris.map((item,index) => (
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
                        <p>Non-Veg Tandooris</p>
                    </div>
                </div>
                <div className="row" id="startersrow">
                {
                     nvtandooris.map((item,index) => (
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
export default Tandooris;
