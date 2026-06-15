// import React, { useState } from 'react'
 import { assets } from '..
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

    // const [visible, setVisible] = useState(false);

    return (
        <div className='flex items-center justify-between py-5 font-medium'>

            <img src={assets.logo} className='w-36' alt="" /> */}

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

                {/* <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" /> */}

                <div className='group relative'>
                    <img
                        className='w-5 cursor-pointer'
                        // src={assets.profile_icon}
                        alt=""
                    />

                    <div className='group-hover:block hidden absolute dropdown-menu'>
                        {/* Dropdown items go here */}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default NavBar