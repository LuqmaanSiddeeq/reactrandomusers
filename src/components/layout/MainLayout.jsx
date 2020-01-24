import React from "react";
import Header from './header';
import Body from './body';
import { BrowserRouter } from "react-router-dom";

function MainLayout(){
    return(
        <div>
        <BrowserRouter>
            <Header />
            <Body />
        </BrowserRouter>
        </div>
    )
}

export default MainLayout