import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }

  return (

   
    

      <select
      className='alert alert-success'
       name="Currency" 
      id="Currency"
       onChange={event=>changeCurrency(event.target.value)}>
        
        <option value="$">Doller($)</option>
      <option value="£">Pound(£)</option>
      <option value="€">Euro(€)</option>
      <option value="₹">Roppee(₹)</option>
      </select>	
     

);
{/* <div class="btn-group">
<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Action
</button>
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here</a>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">Separated link</a>
</div>
</div>  */}
};

export default Currency;