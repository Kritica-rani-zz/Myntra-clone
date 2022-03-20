import './navbar.css'
import React from 'react'
import myntra  from '../../Assets/Myntra.jpeg'
import {CgProfile} from 'react-icons/cg'
import {BsBookmarkHeartFill} from 'react-icons/bs'
import {BsFillBagFill} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
export default function Navbar() {
  return (
      <div className='myntra-navbar-maindiv'>
          <div className='myntra-navbar-subdiv'>
 <div className='myntra-navbar-logo'><img src={myntra} alt="myntra"/>
 </div>
 <div className='myntra-navbar-blogs'>
     <div className='myntra-navbar-blogs-content'>
         <p>Men</p>
     </div>
     <div className='myntra-navbar-blogs-content'>
         <p>Women</p>
     </div>
     <div className='myntra-navbar-blogs-content'>
         <p>Kids</p>
     </div>
     <div className='myntra-navbar-blogs-content'>
         <p>Home Living</p>
     </div>
     <div className='myntra-navbar-blogs-content'>
         <p>Beauty</p>
     </div>
 </div>
 <div className='myntra-navbar-input'>
     <div className="icon">
       <  AiOutlineSearch /> 
       </div> 
     <input type = "text" placeholder='Search for products,brands and more'/>
 </div>
<div className='myntra-navbar-profiledetail'>
    <div className='myntra-navbar-profilepic'>
        <CgProfile/>
        <p>Profile</p>
    </div>
    <div className='myntra-navbar-profilepic'>
        <BsBookmarkHeartFill/>
        <p>Wishlist</p>
    </div>
    <div className='myntra-navbar-profilepic'>
        <BsFillBagFill/>
        <p>Bag</p>
    </div>
</div>
 </div>
 </div>
  )
}
