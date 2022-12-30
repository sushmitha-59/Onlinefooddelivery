import React from 'react';
import {Link} from "react-router-dom";
import MenuCard from "./MenuCard"
import MenuCard1 from "./MenuCard1"



function Menu() {
    const offers=[
        {
            id:57,
            title:"Mutton Dum Biryani with Beer",
            oldprice:19,
            price:15,
            imageUrl:"assets/Beer+Image.jpg",
        },
        {
            id:58,
            title:"Fish Burger+French Fries with Coke",
            oldprice:19,
            price:15,
            imageUrl:"assets/Burger+FrenchFries+Cola (1).jpg",
        },
        {
            id:59,
            title:"Veg Noodles+Chicken Manchuria",
            oldprice:19,
            price:15,
            imageUrl:"assets/Veg Noodles+Chicken Manchuria (1).jpg",
        },
    
    ]
    const toppicks=[
        {
            id:60,
            title:"Fish Pulusu",
            price:19,
           
            imageUrl:"assets/Fish Pulusu.jpg",
        },
        {
            id:61,
            title:"Veg Thali",
            price:19,
           
            imageUrl:"assets/Veg Thali.jpg",
        },
        {
            id:62,
            title:"Mutton Burger",
            price:19,
            imageUrl:"assets/mutton burger.jpg",
        },
    
    ]
    return (
        <div id="body1">
        <div className="container text-center h1" style={{fontFamily: "Brush Script MT, cursive", color: "burlywood",paddingTop:"3%"}}>
          Menu
        </div>
  
    <div className="container">
        <div className="row">
         <Link to="/starters" className="col-md-3 bts" id="menubtn">
           
                Starters
          
            </Link>
            
            <Link to="/curries" className="col-md-3 bts" id="menubtn">
                 
                Curries
          
            </Link>
            <Link to="/riceitems" className="col-md-3 bts" id="menubtn">
             
                Rice Items
      
            </Link>
            <Link to="/tandooris" className="col-md-3 bts" id="menubtn">
            
         
                Tandooris
       
            </Link>
        </div>
        <div className="row ">

        
            <Link to="/fastfoods" className="col-md-4" id="menubtn">
            
            Fast Foods
       
            </Link>
            
       
            <Link to="/beverages" className="col-md-4 bts" id="menubtn">
     
            
                Beverages
      
            </Link>
            <Link to="/refreshments" className="col-md-4 bts" id="menubtn">
       
                Refreshments
           
            </Link>
        </div>        
    </div>
    <div className="container text-center h1">
    <h1 className="font-weight-light mt-5 py-3" style={{fontFamily:"Brush Script MT, cursive" ,color: "burlywood"}}>Combo Offer <i className="fas fa-bullhorn"></i></h1>
        <div className="container text-center">
            <div className="row my-5">
            {
                     offers.map((item,index) => (
                        <div className="col-12 col-lg-4">
                            <MenuCard1
                            title={item.title}
                            oldprice={item.oldprice}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            item={item}
                            key={index}
                        />
                        </div>
                     ))

                    }
        </div>
       </div> 
   </div>
   <div className="container text-center h1">
    <div className="container text-center">
        <h1 className="font-weight-light" style={{fontFamily:"Brush Script MT, cursive",color: "burlywood",marginTop:"6%",paddingBottom:"6%"}}>Top Picks For You <i className="fas fa-bullhorn"></i></h1>
        <div className="row"style={{marginBottom:"-12.5%",paddingBottom:"10%"}}>
        {
                     toppicks.map((item,index) => (
                        <div className="col-12 col-lg-4">
                            <MenuCard 
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
    
</div>
</div>
   
           
           
    

 </div>       
    )
}
export default Menu;
