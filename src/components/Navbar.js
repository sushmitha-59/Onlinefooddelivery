import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-sm"
      style={{
        backgroundColor: "rgb(8, 51, 71)",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)",
      }}
    >
      <div className="container my-12%">
        <img
          src="assets\logo_jam.png"
          alt="Logo"
          className="img-fluid rounded-circle" id="logo_img"
        />
        <Link to="/" className="navbar-brand font-weight-bold text-light">
          <h4>JAM</h4>
        </Link>
        
        <Link to="/cart" className="nav-link ml-auto mx-12% mr-2" id="cart_main">
        <div id="cart">
          <i
            className="fas fa-shopping-cart"
            style={{ color: "whitesmoke" }}
          ></i>{" "}
          </div>
          	<div class="underline"></div>
        </Link>

        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapseNav1"
        >
          <span className="fas fa-bars text-light "style={{borderColor:"yellow"}}></span>
        </button>

        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav1">
          <div className="navbar-nav">
            <Link
              to="/"
              className="nav-item nav-link  text-light font-weight-light mx-12%" id="home_main"
            >
                 <div id="home">
              HOME
              </div>
              <div class="underline"></div>
            </Link>
          </div>
        </div>

        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav1">
          <div className="navbar-nav">
            <Link
              to="/menu"
              className="nav-item nav-link  text-light font-weight-light mx-12%" id="menu_main"
            >
                  <div id="menu">
              MENU
              </div>
              <div class="underline"></div>
            </Link>
          </div>
        </div>
        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav1">
          <div className="navbar-nav">
            <Link
              to="/previousorders"
              className="nav-item nav-link text-light font-weight-light mx-12%" id="previousorders_main"
            >
                  <div id="previousorders">
              PREVIOUS ORDERS
              </div>
              <div class="underline"></div>
            </Link>
          </div>
        </div>
      </div>
      {/* $('.nav-link').on('click', function() {
	$('.active-link').removeClass('active-link');
	$(this).addClass('active-link');
}); */}
 <script src="src\components\js.js" type="text/javascript"> </script>
 {/* <ScriptTag type="text/javascript" src="src\components\js.js" /> */}
    </nav>

  );
}
export default Navbar;
