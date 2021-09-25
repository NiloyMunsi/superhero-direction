import React from 'react';
import "./Header.css"

const header = () => {
    return (
        <div className="header">
            <h1 className="title">Find Your Developer's Team Here</h1>
            <p>Hire the right developers in under 60 seconds.</p>
            <h3>If you make your favourite team's here your budget will have: <span className="budget">$500 Million</span></h3>
        </div>
    );
};

export default header;