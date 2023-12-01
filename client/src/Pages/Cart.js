import './Cart.css';
import React, { useState, useEffect } from 'react';

const itemListData = [
    { id: 1, name: 'Drug', quantity: 1, cost: 1000000 },
    { id: 2, name: 'Food', quantity: 1, cost: 2000000 },
    // Add more items as needed
  ];

export const Cart = () => {
    const [totalCost, setTotalCost] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // Your logic for handling the form submission goes here
        console.log('Form submitted with value:', inputValue);
    };
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
            <form onSubmit={handleSubmit}>
                <label>Test field: <input type="text" value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}/></label>
                <button type='submit'>Check</button>
            </form>
        </div>
    );
}
// import React, { useState } from 'react';

// const MyForm = () => {
//     const [formValues, setFormValues] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         message: '',
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormValues((prevValues) => ({
//             ...prevValues,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Your logic for handling the form submission goes here
//         console.log('Form submitted with values:', formValues);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 First Name:
//                 <input
//                     type="text"
//                     name="firstName"
//                     value={formValues.firstName}
//                     onChange={handleInputChange}
//                 />
//             </label>
//             <label>
//                 Last Name:
//                 <input
//                     type="text"
//                     name="lastName"
//                     value={formValues.lastName}
//                     onChange={handleInputChange}
//                 />
//             </label>
//             <label>
//                 Email:
//                 <input
//                     type="email"
//                     name="email"
//                     value={formValues.email}
//                     onChange={handleInputChange}
//                 />
//             </label>
//             <label>
//                 Message:
//                 <textarea
//                     name="message"
//                     value={formValues.message}
//                     onChange={handleInputChange}
//                 />
//             </label>
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default MyForm;
