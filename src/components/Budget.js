
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{  
            <input
                        // required='required'
                        type='number'
                        id='bu'
                        // value={2000}
                        step="10"
                        style={{ marginLeft: '7px' , size: 7}}
                        // onChange={(event) => setCost(event.target.value)}
                        >
                        </input>}</span>
          
        </div>
    );
};
export default Budget;