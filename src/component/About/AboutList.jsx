import React from 'react'
import './AboutList.css'


const AboutList = ({id, img,name,desc}) => {
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
<button>Website</button>
</div>


        </div>

    </div>
  )
}

export default AboutList
