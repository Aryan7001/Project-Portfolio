import React from 'react'
import './Header.css'
import { items } from '../Images/assets'



const Header = () => {

const handleDownloadbutton=()=>{
const fileURL= process.env.PUBLIC_URL + '/Aryan CV.pdf'
window.open(fileURL)
}

  return (
  <div className='main-header'>
<div className='left-header'>
 <div className='left-main'>
  <h2>I'M Aryan <span>Thapa</span></h2>
<p>Hello I'M a Passionate frontend developer with expertise in crafting <br /> <span> responsive and user-friendly web interfaces. </span></p>

<div className='btn'>
<button onClick={handleDownloadbutton}>Download CV</button>
</div>    

</div>

</div>

<div className='right-header'>
<img src={items.background} alt=''/>
</div>
  </div>
    
  )
}


export default Header



 