import React from "react";
import HeaderTitle from "../shared/headerTitle";
import UserList from "../users/userList";
import UserDetails from "../users/userDetails";
import About from "../infoPages/About";



function Dashboard(){
    return(
        <div>
            <HeaderTitle 
                title="Dashboard"
                tagline="Welcome to the Users App"
            />
            <UserList />
            <UserDetails />
            <About />
        </div>
    )
}

export default Dashboard