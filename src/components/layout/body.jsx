import React from "react";
import Dashboard from "../dashboard/dashboard";
import UserList from "../users/userList";
import UserDetails from "../users/userDetails";
import About from "../infoPages/About";
import { Route } from "react-router-dom";


function Body(){
    return(
        <div className="container-fluid">
            <Route exact path="/" component={Dashboard} />
            <Route path="/user/:id" component={UserDetails} />  
            <Route exact path="/user" component={UserList} />              
            <Route path="/about" component={About} />
        </div>
    )
}

export default Body