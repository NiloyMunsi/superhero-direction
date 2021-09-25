import React, { useEffect, useState } from 'react';
import Dev from '../Dev/Dev';
import './Developer.css'

const Developer = () => {
    const [developers, setDeveloper] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setDeveloper(data));
    },[])
    return (
        <div className="developers-container">
            <div className="developer-container">
            {
               developers.map(developer=> <Dev developer={developer}></Dev>)     
            }
            </div>
            <div className="cart-container">
                <h3>Added person</h3>
            </div>
        </div>
    );
};

export default Developer;