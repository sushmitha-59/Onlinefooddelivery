import React from "react";
import Card from "./Card";


function RiceItems() {
    const vriceitems=[
        {
            id:17,
            title:"Panneer Pulao",
            price:19,
            imageUrl:"assets/paneer-pulao.jpg",
          
        },
        {
            id:18,
            title:"Mushroom Biryani",
            price:19,
            imageUrl:"assets/mushroom-biryani.jpg",
          
        },
        {
            id:19,
            title:"Curd Rice",
            price:19,
            imageUrl:"assets/curd-rice.jpg",
          
        },
        {
            id:20,
            title:"Veg Thali",
            price:19,
            imageUrl:"assets/Veg Thali.jpg",
          
        },
    ];
    const nvriceitems=[
        {
            id:21,
            title:"Chicken Biryani",
            price:19,
            imageUrl:"assets/Chicken Biryani.jpg",
          
        },
        {
            id:22,
            title:"Egg Biryani",
            price:19,
            imageUrl:"assets/Egg Biryani (1).jpg",
          
        },
        {
            id:23,
            title:"Prawn Biryani",
            price:19,
            imageUrl:"assets/Shrimp Biryani.jpg",
          
        },
        {
            id:24,
            title:"Fish Biryani",
            price:19,
            imageUrl:"assets/fish biryani.jpg",
          
        },

    ];
    return (
        <div id="body1">
            <div className="container-fluid text-center h1"id="starterscontainerfluid" style={{fontFamily: "Brush Script MT, cursive", color:"burlywood"}}>
        Rice Items
    </div>
    <div className="container-fluid text-center h1"id="starterscontainerfluid">
        <div className="row">
            <div className="col-md-6 text-center h1">
                <div className="row">
                    <div className="col-lg-12 text-center h1" style={{fontFamily: "Brush Script MT, cursive", color:"burlywood"}}>
                        <p>Veg Rice Items</p>
                    </div>
                </div>
                <div className="row" id="startersrow">
                {
                     vriceitems.map((item,index) => (
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
                        <p>Non-Veg Rice Items</p>
                    </div>
                </div>
                <div className="row" id="startersrow">
                {
                     nvriceitems.map((item,index) => (
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
export default RiceItems;
