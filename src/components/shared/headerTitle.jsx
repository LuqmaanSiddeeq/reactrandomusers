import React from "react";

function HeaderTitle(props){
    return(
        <React.Fragment>           
            <h1 className="p-3">{props.title}</h1>
            <p className="text-danger">{props.tagline}</p>
        </React.Fragment>
    )
}

export default HeaderTitle