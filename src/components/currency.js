import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const currency = () => {
  const {dispatch } = useContext(AppContext);

    const changecurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (

    <div className='alert alert-secondary'>
    <span>Budget: £{  
  <div className='alert alert-secondary'> currency {
      <select name="currency" id="currency" onChange={event=>changecurrency(event.target.value)}>
        <option value="$">Doller($)</option>
      <option value="£">Pound(£)</option>
      <option value="€">Euro(€)</option>
      <option value="₹">Roppee(₹)</option>
      </select>	
      }	
    </div>
    }
                </span>
  
</div>
);
        
};

export default currency;