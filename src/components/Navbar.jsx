import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import {styles} from '../styles';
import {navLinks} from '../constants';
import {logo, menu, close, my_logo} from '../assets';


const Navbar = () => {
  const [active,setActive] = useState("");
  const [toogle,setToogle] = useState(true);

  return (

    <nav className = {styles.paddingX + ' w-full flex items-center py-5 fixed top-0 z-20'}> {/* bg-transparent rounded-3xl*/}
      <div className="w-full flex justify-between items-center max-w-8xl mx-auto ">
        <Link
          to = "/"
          className = "flex items-center gap-2"
          onClick={() => {setActive(""); 
          window.scrollTo(0,0);
          }}>
            <img src = {my_logo} alt="logo" className="w-9 h-9 object-contain"/>
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Ievgen Voloshenko &nbsp;
            <span className="sm:block hidden"> &nbsp;| CV/ML Engineer</span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link)=>(
            <li 
              key = {link.id}
              onClick={() => setActive(link.title)}>
              <a href={"#"+link.id}  className={active===link.title ? "text-white text-[20px]":"text-secondary hover:text-white text-[18px] font-medium cursor-pointer"}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toogle ? menu : close} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={()=>setToogle(!toogle)}/>
          <div className={toogle ? 'hidden' : 'flex p-6 bg-transparent absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl' }>
            <ul className="list-non flex justify-end items-start flex-col gap-4">
              {navLinks.map((link)=>(
                <li 
                  key = {link.id} 
                  
                  onClick={() => {setActive(link.title); setToogle(!toogle);}}>
                  <a href={"#"+link.id} className={active===link.title ? "text-white text-[18px]" : "text-secondary font-poppins font-medium cursor-pointer text-[16px]" }>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar