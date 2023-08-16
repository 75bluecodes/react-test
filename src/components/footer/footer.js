import React from "react";
import  ReactDOM from "react-dom/client";

const style = {
    position: 'fixed',
    bottom: '3px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'brown',
    backgroundColor: 'black',

}

function Footer(){
    return (
        <>
            <div style={style}>
                <h4 style={{padding: '1px'}}>@Copyright 2023</h4>
            </div>
        </>
    )
}

export default Footer;