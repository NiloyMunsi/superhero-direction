import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Dev from '../Dev/Dev';
import './Developer.css'

const Developer = () => {
    const [developers, setDeveloper] = useState([]);
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setDeveloper(data));
    }, [])
    const handleAdd = (developer) => {
        const newTeam = [...team, developer];
        setTeam(newTeam);
    }

    return (
        <div className="developers-container">
            <div className="developer-container">
            {
                    developers.map(developer => <Dev
                        key={developer.name}
                        developer={developer}
                    handleAdd={handleAdd}>
                        
                        </Dev>)
            }
            </div>
            <div className="cart-container">
                <Cart team={team}></Cart>
            </div>
        </div>
    );
};

export default Developer;