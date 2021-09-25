import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { team }  = props;
    let total = 0;
    for (const developer of team) {
        total = total + developer.salary;
    }
    return (
        <div className="cart">
            <h3>Added person :{props.team.length}</h3>
            <h4>Persons:</h4>
            <h1>total:$ { total}</h1>
        </div>
    );
};

export default Cart;