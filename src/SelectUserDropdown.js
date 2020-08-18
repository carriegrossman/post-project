import React from "react";

const SelectUserDropdown=(props)=>{

    const userIds = props.userIds;
    const whenSelected = props.whenSelected;

    // const itemSelected = (evt) =>{
    //     console.log(evt.target.value);
    //     whenSelected(Number(evt.target.value));
    // }

    /*Same THing as below
        <select onChange={itemSelected}>
    */
    return(
        
        <select onChange={(evt)=>whenSelected(Number(evt.target.value))}>
            {userIds.map(uid=>(
                <option key={uid} value={uid}>User #{uid}</option>
            ))}
        </select>
    )
}

export default SelectUserDropdown;