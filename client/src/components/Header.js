import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
import { useDispatch, useSelector } from 'react-redux'
import {  FaShoppingCart } from 'react-icons/fa';
import logo from "../utils/images/logo.png"
import { FaBars, FaAngleDown } from 'react-icons/fa'
import { FaXmark } from "react-icons/fa6";
import City from './City'
import { addItem } from '../utils/cartSlice'

const Header = () => {

    const [userStatus, setUserStatus] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);

    const cartItem = useSelector((store) => store.cart.items)
    const userCity = useSelector(store => store.user.cityName)
    // console.log(cartItem)

    const dispatch = useDispatch();

    const [cityVisibility, setCityVisibility] = useState(false)
    const [isMenuOpen, setMenuOpen] = useState(window.innerWidth > "1020"); //true

    const handleResize = ()=>{
        if(window.innerWidth > "1024"){
            setMenuOpen(true)
        }
    }

    const updateCart = async() =>{
        //update cart from local storage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const data = JSON.parse(localStorage.getItem(key))
            // console.log(data)
            dispatch(addItem(data))
        }
    }

    useEffect(()=>{
        updateCart();

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)

    }, [])
    return (
        <div className="header fixed z-50 top-0 left-0 right-0 flex justify-between shadow-md h-16 xs:h-24 "
            style={{ backgroundColor: 'rgb(163, 1, 55)' }}
        >
            <div className="ml-1 logo-container flex items-center">
                <Link to='/'>
                <img
                    className="w-24"
                    alt="logo"
                    src={logo}
                />
                </Link>

                <div className='flex items-center p-4 xs:text-xl hover:text-grey-200 cursor-pointer text-white bg-transparent' onClick={()=> setCityVisibility(prev => !prev)}>
                    <span className='pr-2'>{userCity}</span>
                    <span className='text-black'><FaAngleDown /></span>
                </div>
            </div>

            <div className="flex items-center">
            <button className="lg:hidden text-black  focus:outline-none ml-4 mr-14 border rounded-lg" onClick={() => setMenuOpen(prev => !prev)}>{isMenuOpen ? <FaXmark className='w-8 h-8' /> : <FaBars className='w-8 h-8' />}</button>
                <ul className={`fixed lg:flex lg:static m-8 mr-2 p-4 rounded-lg right-0 top-8 xs:top-16 bg-white transform ${isMenuOpen  ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out`}>
                    <li className='px-4 flex mb-4 lg:mb-0'>
                        {/* <div className='flex'><span className='ml-2'>Search</span> <span><FaSearch className='w-5 h-5 mt-1 ml-1' /></span> </div> */}
                    </li>
                    <li className='px-4 mb-4 lg:mb-0 hover:bg-red-400 rounded-lg p-2'>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
                    <li className='px-4 mb-4 lg:mb-0 hover:bg-red-400 rounded-lg p-2'><Link to='/about'>About</Link></li>
                    <li className='px-4 relative mb-4 lg:mb-0 hover:bg-red-400 rounded-lg p-2'><Link to='/cart'>
                        <div className='flex'><span>Cart</span> <span><FaShoppingCart className='h-8 w-8 text-green-600' /></span></div>
                        <span className='absolute top-0 left-14 text-gray-50 font-bold'>{cartItem.length}</span></Link>
                    </li>
                    <li className='relative w-20 hover:bg-red-400 rounded-lg p-2'>
                        <button className='login-btn min-w-[4rem] mb-8 lg:mb-0'
                            onClick={()=>{
                                userStatus === "Login" ? setUserStatus("Logout") : setUserStatus("Login");
                            }}
                        >{userStatus}</button>
                        <p className='absolute left-0 top-8'>{ userStatus === "Login" ? "" : "User : Rohit"}</p>
                    </li>
                    
                </ul>
            </div>
            <div className={`transition-transform transform duration-500 ease-in-out ${cityVisibility ? 'translate-x-0' : '-translate-x-full'} bg-slate-100 p-4 absolute top-0 left-0`}>
                <City handleVisible={setCityVisibility} X={FaXmark}/>
            </div>
        </div>
    )
}

export default Header
