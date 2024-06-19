import React from 'react'
import './AboutList.css'
import { Link } from 'react-router-dom'


const AboutList = ({id, img,name,desc,url}) => {

  return (
    <div className='main-about'>
        <div className='main_list'>
        <div className='img_list'>
<img src={img} alt="" />
      </div>
<div className='project_texts'>
 <h3>{name}</h3>   
<p>{desc}</p>
</div>
<div className='button'> 
<button>Github</button>
<Link to = {url}><button>Website</button></Link>
</div>


        </div>

    </div>
  )
}

export default AboutList
