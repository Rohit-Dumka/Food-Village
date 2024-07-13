import React from 'react'
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom'
import templogo from '../utils/images/templogo.png'
const Footer = () => {
  return (
    <div className='min-h-[20rem] bg-black text-white text-center md:flex justify-around pt-16'>
        <div className='pb-16'>
            <img
                className="w-20 mb-3 m-auto"
                alt="logo"
                src={templogo}
            />
            <p className='text-lg'>© 2024 RohitFoods,<br/> All right reserved</p>
        </div>
        <div className='pb-16'>
            <h2 className='font-bold text-lg mb-3 md:mb-8'>Company</h2>
            <p className='text-lg'><Link to='/about'>About Me</Link></p>
            <p className='text-lg'> Visit my <a className='text-orange-500 hover:text-orange-700' href='https://www.linkedin.com/in/rohit-dumka/'>Linkedin Profile </a> to know more about me </p>
        </div>
        <div className='pb-16'>
            <h2 className='font-bold text-lg mb-3 md:mb-8'><Link to="/contact">Contact Us</Link></h2>
            <a className='text-lg text-orange-500 hover:text-orange-700' href='https://github.com/Rohit-Dumka'>Rohit Dumka</a>            
            <p className='text-lg'>Mobile - 1234567890</p>
            <p className='text-lg'>Uttarakhand</p>
        </div>
    </div>
  )
}

export default Footer