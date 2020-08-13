import React from "react";

//

const UserButton = (props) => { 


    return(<button onClick={()=>props.whenClicked(props.user)} >Limit To User {props.user}</button>)
}

export default UserButton;