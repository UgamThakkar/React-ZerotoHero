import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/image/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>My Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/96485b36-053e-459b-a463-894e9e8041d3.png"/>
            <h3>{props.resname}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.5 Stars</h4>
            <h4>33 minutes</h4>
        </div>
    );
};

const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resname="Boston Pizza" cuisine="Pizza Fries Beer"/>
                <RestaurantCard resname="BarBurrito" cuisine="Burritos"/>
            </div>

        </div>
    );
};


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />); 