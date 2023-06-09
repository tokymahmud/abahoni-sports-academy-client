import React from 'react';
import UseSclasses from '../../Hooks/UseSclasses';

const SelectedClasses = () => {
    const [cart] =UseSclasses();
    const total = cart.reduce((sum,item)=>item.price+sum,0)
    return (
        <div className='p-20 mt-11'>
            <div className='uppercase '>
            <h1>Total Selected classes:{cart.length}</h1>
            <h1>Total Payable:${total}</h1>
            <button className="btn btn-sm bg-orange-800">Pay</button>



            </div>
        </div>
    );
};

export default SelectedClasses;