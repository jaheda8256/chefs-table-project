import PropTypes from 'prop-types'
 import Cooking from './Cooking';
import { useState } from 'react';


const Food = ({ wantToFood,setWantToFood }) => {

    const [current, setCurrent] = useState([]);
  

    const handleRemoveCook = (i) =>{
        console.log(wantToFood);
       setCurrent([...current, i])
        const removeCook = wantToFood.filter((item) => item.id !== i.id);
        setWantToFood(removeCook);
        console.log(removeCook, i);
       
    }
    


    return (
        <div>
             <h3 className='text-center text-2xl font-bold mt-6'>Want to Cook: {wantToFood.length}</h3>
            <hr className='mt-2'/>
            <div className='flex justify-around text-lg font-medium'>

           <p></p>  
          <p>Name</p>
          <p>Time</p>
          <p>Calories</p>
          <p></p>
          
         </div>
         <hr />

           {
            wantToFood.map((wantToFood)  => <Cooking
                key={wantToFood.id}
                 wantToFood={wantToFood}
                 handleRemoveCook={handleRemoveCook}
                ></Cooking>)
           } 

          

       <h3 className='text-center text-2xl font-bold mt-6'>Currently Cooking: </h3>
           <hr className='mt-2'/>
            <div className='flex justify-around text-lg font-medium'>

           <p></p>    
          <p>Name</p>
          <p>Time</p>
          <p>Calories</p>
          <p></p>
          
          
         </div>       
        </div>


        
    );
};

export default Food;

Food.propTypes = {
    wantToFood: PropTypes.array,
    handleRemoveCook:PropTypes.func
}