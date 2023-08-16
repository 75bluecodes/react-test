import React from "react";
// import  ReactDOM from "react-dom/client";
import "./home.css"

function ContainerLeft(){
    return (
        <>
            <div className="containerleft">
            <h2>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente adipisci iste quo voluptatibus quas suscipit quibusdam voluptate? Sapiente tempore cum quia, tenetur vitae officiis et harum ducimus cupiditate optio?
              </h2> 
              <a className="btn" href="#">View More</a>
            </div>
        </>
    )
}

function ContainerRight(){
    return (
        <>
        <div className="containerright">
        <img src={require('../../images/bluesketch.jpg')} className="img"></img>
        </div>
        </>
    )
}

function HomeWrapper(){
    return (
        <>
        <div className="wrapper">
            <ContainerLeft />
            <ContainerRight />
        </div>
        </>
    )
}

export default HomeWrapper;