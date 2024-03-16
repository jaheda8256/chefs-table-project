import PropTypes from 'prop-types'



const Card = ({ card, handleWantToCook }) => {
    // console.log(card);
    return (
        <div className="container mx-auto">
            <div className="w-2/3">
                <div className="card w-96  bg-base-100 shadow-xl border-2">
                    <figure><img className="p-4" src={card.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{card.name}</h2>
                        <p>{card.description}</p>
                        <hr />
                        <h2>Ingredients:{card.ingredients.length}</h2>
                        <ul className='list-disc'>
                        <li>{card.ingredients.slice(0, 1)}</li>
                        <li>{card.ingredients.slice(1, 2)}</li>
                        <li>{card.ingredients.slice(3, 4)}</li>
                        <li>{card.ingredients.slice(5, 6)}</li>
                        <li>{card.ingredients.slice(7, 8)}</li>
                        <li>{card.ingredients.slice(3, 4)}</li>
                        </ul>
                       
                        <hr />
                        <div className="flex justify-around">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <p>{card.preparing_time}</p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                                </svg>

                            </div>
                            <p>{card.calories}</p>
                        </div>
                        <div className="card-actions ">
                            <button onClick={()=>handleWantToCook(card)} className="btn rounded-xl bg-green-500 font-bold">Want to Cook</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

Card.propTypes = {
    card:PropTypes.object.isRequired,
    handleWantToCook:PropTypes.func
    
}





























// import { useEffect,useState } from "react";


// const Card = () => {
//     const [food,setFood] = useState([])

//     useEffect(() =>{
//         fetch("./fakeData.json")
//         .then(res => res.json())
//         .then(data =>{
//             setFood(data);
//         })
//     },[])
    
//   console.log(food);
    
//     return (
//     <div>
//  <div className='text-center container mx-auto my-24'>
//     <h2 className='text-3xl font-bold'>Our Recipes</h2>
//     <p>Discover Delicious Soups, Desserts, And Much More From All Over The World At <br /> Find Dishes From Around The World And Discover Your Next Favorite Go-To Meal Today!</p>
//   </div>


// <div className='grid grid-cols-1 lg:grid-cols-3 container mx-auto'>

//   <div className=' lg:col-span-2'>

// <div className="grid grid-cols-2">

// <div className="card w-96 bg-base-100 shadow-xl">
//   <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title">sss</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>


// </div>
// </div>
//   </div>


//   {/* table */}
//   <div>
//   <div className="overflow-x-auto">
//   <table className="table">
//     {/* head */}
//     <thead>
//       <tr>
//         <th></th>
//         <th>Name</th>
//         <th>Job</th>
//         <th>Favorite Color</th>
//       </tr>
//     </thead>
//     <tbody>
//       {/* row 1 */}
//       <tr>
//         <th>1</th>
//         <td>Cy Ganderton</td>
//         <td>Quality Control Specialist</td>
//         <td>Blue</td>
//       </tr>
//       {/* row 2 */}
//       <tr>
//         <th>2</th>
//         <td>Hart Hagerty</td>
//         <td>Desktop Support Technician</td>
//         <td>Purple</td>
//       </tr>
//       {/* row 3 */}
//       <tr>
//         <th>3</th>
//         <td>Brice Swyre</td>
//         <td>Tax Accountant</td>
//         <td>Red</td>
//       </tr>
//     </tbody>
//   </table>
// </div>
//   </div>
// </div>

// </div>

//     );
// };


// export default Card;