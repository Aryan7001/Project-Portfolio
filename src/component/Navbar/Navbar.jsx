import React, { useState } from 'react'
import { items } from '../Images/assets'
import './Navbar.css'
import { Link} from 'react-router-dom'



const Navbar = () => {

  const[menu, setMenu]= useState('Home')



  return (
    <div className='main-nav'>
      <div className='image'>
      <Link to = './'> <img src={items.Logo} alt="" /> </Link>
      </div>
       
       <ul className='list'>
       <Link  to ='./'> <li onClick={()=>setMenu('Home')} className={menu==='Home'?'active':'null'} >Home🏠</li>  </Link> 
       <Link to ='./About'> <li onClick={()=>setMenu('Project')} className={menu==='Project'?'active':'null'} >Project💼</li> </Link> 
       <Link to ='./Project'> <li onClick={()=>setMenu('About')} className={menu==='About'?'active':'null'}>About👥</li> </Link> 
       <Link to ='./Contact'> <li onClick={()=>setMenu('Contact')} className={menu==='Contact'?'active':'null'}>Contact🖥</li> </Link> 
       </ul>
 

      <button><Link to ='./Contact'>Contact Me</Link> </button>
 
    </div>
  )
}

export default Navbar
