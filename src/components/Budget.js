
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,dispatch ,currency} = useContext(AppContext);

    const setCost= (val) =>{
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span> Budget: {currency} 
            {  
            <input
                        // required='required'
                        type='number'
                        id='buget'
                        name='buget'
                        value={budget}
                        step="10"
                        style={{ marginLeft: '7px' , size: 7}}
                        onChange={(event) => setCost(event.target.value)}
                        >
                        </input>}</span>
          
        </div>
    );
};
export default Budget;