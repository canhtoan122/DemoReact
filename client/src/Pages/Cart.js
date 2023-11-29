import './Cart.css';
import React, { useState, useEffect } from 'react';

const itemListData = [
    { id: 1, name: 'Drug', quantity: 1, cost: 1000000 },
    { id: 2, name: 'Food', quantity: 1, cost: 2000000 },
    // Add more items as needed
  ];


export const Cart = () => {
    const [totalCost, setTotalCost] = useState(0);
    useEffect(() => {
        // Calculate total cost when the component mounts or itemListData changes
        const calculatedTotalCost = itemListData.reduce((acc, item) => acc + item.cost, 0);
        setTotalCost(calculatedTotalCost);
    }, [itemListData]);

    return(
        <div className="Content">
            <div className='main row'>
                <ul className="itemList col-md-7 col-2 d-flex justify-content-center align-items-center">
                    <li>ID</li>
                    <li>Name</li>
                    <li>Quantity</li>
                    <li>Cost</li>
                    
                </ul>
                {itemListData.map(item => (
                <ul key={item.id} className="item col-md-7 col-2 d-flex justify-content-center align-items-center">
                    <li>{item.id}</li>
                    <li>{item.name}</li>
                    <li>{item.quantity}</li>
                    <li>{item.cost} vnd</li>
                </ul>
                ))}
            </div>
            <h1>Total Money</h1>
            <h1>{totalCost} vnd</h1>
        </div>
    );
}