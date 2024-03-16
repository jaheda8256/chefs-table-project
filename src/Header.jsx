
import cooking from './assets/images/cooking.jpg'
const Header = () => {
    return (
        <>
        <div>
        <div className="navbar bg-base-100 container mx-auto">
<div className="navbar-start">
<div className="dropdown">
  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </div>
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Home</a></li>
    <li><a>Search</a></li>
    <li><a>About</a></li>
    <li><a>Search</a></li>
  </ul>
</div>
<a className="btn btn-ghost text-3xl font-bold">Recipe Calories</a>
</div>
<div className="navbar-center hidden lg:flex">
<ul className="menu menu-horizontal px-1">
<li><a>Home</a></li>
 <li><a>Search</a></li>
 <li><a>About</a></li>
 <li><a>Search</a></li>
</ul>
</div>
<div className="navbar-end flex gap-3 ">


<a className="btn rounded-3xl px-16 ml"> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg></span>Search</a>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 bg-green-400 rounded-full">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

</div>
</div> 
    </div>

{/* banner section */}
<section className="container mx-auto my-24">
<div>
<div className="hero min-h-screen rounded-2xl" style={{backgroundImage: `url(${cooking})`}}>
  <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking <br />class tailored for you!</h1>
      <p className="mb-5">Discover Delicious Soups, Desserts, And Much More From All Over The World At <br /> Find Dishes From Around The World And Discover Your Next Favorite Go-To Meal Today!!!!</p>
      <button className="btn btn-primary">Get Started</button>
      <button className="btn bg-transparent ml-6 text-white rounded-full">Get Started</button>
    </div>
  </div>
</div>

</div>
</section>
</>
    );

};

export default Header;