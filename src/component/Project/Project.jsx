import React from 'react'
import { Link } from 'react-router-dom'
import { items } from '../Images/assets'
import './Project.css'

const Project = () => {
  return (
    <div className='main-project'>
      <div className='projects-text'>
        <h3>Get to Know Me!</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere aliquam fugit quasi,<br /> dolores eaque sequi nemo iste voluptatum veniam vel, exercitationem tenetur <br />. Nostrum quis unde id architecto debitis, sequi magnam.</p>
      <Link to ='/Contact'> <button>Contact ME</button> </Link>
      </div>
      <div className='projects-list'>
<h1>Skills Set</h1>
<ul className='projects-icon'>
<li><img src={items.html5} alt="" />    </li>
<li><img src={items.css} alt="" /></li>
<li><img src={items.js} alt="" /></li>
<li><img src={items.atom} alt="" /></li>
<li><img src={items.github} alt="" /></li>
</ul>
</div>
      </div>
  )
}

export default Project
