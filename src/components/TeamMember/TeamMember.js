import React from 'react';
import './TeamMember.css'


const TeamMember = (props) => {
    const { name,img } = props.developer;
    return (
        <div className="members">
            <img src={img} alt="" />
            <h5>{name}</h5>
            
        </div>
    );
};

export default TeamMember;