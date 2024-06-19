import React from 'react'
import './About.css'
import { projects} from '../Images/assets'
import AboutList from './AboutList'

//this is the project page i have mistakely insert project code in About component and vice versa.

const About = (props) => {
  return (
    <div className='main-about'>
      <h1>My <span>Projects</span></h1>
   <div className='main-list'>
{projects.map((item, index)=>(
<AboutList key={index} id={item.id} name={item.name} img={item.img} desc={item.desc} url={item.url} />
))}

   </div>
    </div>
  )
}

export default About
