import PropTypes from 'prop-types'
 import Cooking from './Cooking';

const Food = ({ wantToCook }) => {
    return (
        <div>
             <h3 className='text-center text-2xl font-bold mt-6'>Want to Cook: {wantToCook.length}</h3>
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
            wantToCook.map((wantToCook)  => <Cooking
                key={wantToCook.id}
                 wantToCook={wantToCook}

               
                ></Cooking>)
           } 

           {
          
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
    wantToCook: PropTypes.array
}