import PropTypes from 'prop-types'
const Cooking = ({ wantToFood, handleRemoveCook}) => {
    console.log(wantToFood);
  const { name, preparing_time, calories } = wantToFood;
  return (
    <div>
       <div className="">
        <table className="table rounded-none space-x-4 bg-gray-200">

          <div className='flex justify-between'>

            <tr >
              <td></td> 
              <td>{name}</td>
              <td>{preparing_time}</td>
              <td>{calories}</td>
            </tr>
          
            <button onClick={()=> handleRemoveCook(wantToFood)} className='btn bg-green-500 my-auto flex justify-end'>Preparing</button>
          </div>

        </table>
      </div> 

    </div>
  );
};

export default Cooking;

Cooking.propTypes = {

  wantToFood: PropTypes.object,
  name: PropTypes.object,
  preparing_time: PropTypes.object,
  calories: PropTypes.object,
  handlePreparing:PropTypes.func,
  handleRemoveCook:PropTypes.func
}