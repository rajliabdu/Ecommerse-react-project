import React, { useContext, useState } from 'react'
 import logo from '../assets/logo.png';
import search_icon from '../assets/search_icon.png';
import { Link, NavLink ,useNavigate} from 'react-router-dom'
import profile_icon from '../assets/profile_icon.png'
import cart_icon from "../assets/cart_icon.png";
import { ProductContext } from '../context/ProductContex';

const NavBar = () => {

   
    const [visible, setVisible] = useState(false);
  const   {setShowSearch,getCartCount}= useContext(ProductContext)
    
 const navigate = useNavigate();

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  }; 
  
  return (
        <div className='flex items-center justify-between py-5 font-medium'>

               <Link to = '/'><img src={logo} className='w-36' alt="" /></Link>  

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

            </ul>

            <div className='flex items-center gap-6'>

              <Link to ='/collection'><img onClick={()=>setShowSearch(true)} src={search_icon} className='w-5 cursor-pointer' alt="" /></Link>

                
                <div className="group relative">
  <img
    src={profile_icon}
    className="w-5 cursor-pointer"
    alt=""
    onClick={() => {
      if (!currentUser) {
        navigate("/login");
      }
    }}
  />

  {currentUser && (
    <div className="group-hover:block hidden absolute right-0 pt-4">
      <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow">

        <p
          onClick={() => navigate("/profile")}
          className="cursor-pointer hover:text-black"
        >
          My Profile
        </p>

        <p
          onClick={() => navigate("/orders")}
          className="cursor-pointer hover:text-black"
        >
          Orders
        </p>

        <p
          onClick={() => {
            localStorage.removeItem("currentUser");
            navigate("/login");
          }}
          className="cursor-pointer hover:text-red-600"
        >
          Logout
        </p>

      </div>
    </div>
  )}
</div>
                  <Link to = '/cart' className='relative'>
                            
                                  <img src={cart_icon} className='w-5 min-w-5' alt="" />
                   <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()} 
                </p>
                  </Link>
                </div>

            </div>

       
    )
}

export default NavBar