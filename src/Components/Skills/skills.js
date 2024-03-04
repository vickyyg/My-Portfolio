import React from 'react'
import './skills.css'
import app from '../../assets/app.png';
import web from '../../assets/web.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and keen eye for detail. I am proficient in HTML, CSS and Javascript.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={app} alt='appDesing' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Website Desing</h2>
                    <p>thgfgggjgfgfnfbf</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={web} alt='webDesing' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App Desing</h2>
                    <p>bffdbfnfnfnffnfn</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Skills;