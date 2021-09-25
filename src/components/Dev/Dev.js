import React from 'react';
import './Dev.css'

const Dev = (props) => {
    console.log(props.developer)
    const {name,position,location,gender,salary,img}=props.developer
    return (
        <div className="developer">
            <h2>{name}</h2>
            <img className="profile-pic" src={img} alt="" />
        </div>
    );
};

export default Dev;