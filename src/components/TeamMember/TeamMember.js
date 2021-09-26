import React from 'react';
import './TeamMember.css'


const TeamMember = (props) => {
    const { name } = props.developer;
    return (
        <div className="members">
            <h5>{name}</h5>
        </div>
    );
};

export default TeamMember;