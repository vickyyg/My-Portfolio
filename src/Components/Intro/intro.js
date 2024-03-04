import React from 'react'
import './intro.css'
import bg from '../../assets/bg.png'
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='textIntro'>I'm<span className='introName'>Victoria</span> <br/>Website Designer</span>
            <p className='introPara'>I am a skilled web designer with experience in creating<br />visually appealing and user friendly websites</p>
            <Link><button className='btn'>Hire here </button></Link>
        </div>
        <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro