import React from 'react';
import './Dev.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons"
const Dev = (props) => {
    const {name,position,location,gender,salary,img}=props.developer
    return (
        
            <div className="dev">
            <img className="profile-pic" src={img} alt="" />
            <h2><FontAwesomeIcon icon={faGithub} /> {name}</h2>
            <p>{position}</p>
            <p>{location}</p>
            <p>{ gender}</p>
            <p>$ {salary}</p>
            <button onClick={() => props.handleAdd(props.developer)} className="btn"><FontAwesomeIcon icon={faUser} />  Add your Team</button>
            
        </div>
    );
};

export default Dev;