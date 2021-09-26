import React from 'react';
import TeamMember from '../TeamMember/TeamMember';
import './Cart.css'

const Cart = (props) => {
    const { team }  = props;
    let total = 0;
    for (const developer of team) {
        total = total + developer.salary;
    }
    return (
        <div>
            <div className="cart">
            <h3>Added person :{props.team.length}</h3>
            <h1>Total:$ { total}</h1>
        </div>
            <div className="team-cart">
                <h3>My Team</h3>
                <hr />
            {
                team.map(developer=><TeamMember developer={developer}></TeamMember>)    
            }
        </div>
        </div>
    );
};

export default Cart;