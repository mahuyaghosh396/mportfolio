import React from 'react'
import './skill.css';
import webDesign from '../../assets/website-design.png';
import cloudImg from '../../assets/cloud.png';
import cyberImg from '../../assets/cyber.png';



function Skill() {
  return (
   <section id='skill'>
    <span className='skillTitle'>What I interested</span>
    <span className='skillDesc'>I am passionate about web design, cloud computing, and cybersecurity. 
    With a keen eye for detail and a drive for innovation, I enjoy creating visually stunning and user-friendly websites.
     My expertise in cloud technologies allows me to build scalable and efficient solutions, 
     while my interest in cybersecurity ensures that these solutions are secure and reliable.
     I am always eager to learn and explore new advancements in these fields to deliver the best results in my projects.</span>
<div className='skillBars'>
    <div className='skillBar'>
        <img src={webDesign} alt='webDesign' className='skillBarImg'/>
        <div className='skillBarText'>
            <h2>Web Design</h2>
            <p>you can write your own content</p>
        </div>
    </div>
    <div className='skillBar'>
        <img src={cloudImg} alt='cloudImg' className='skillBarImg'/>
        <div className='skillBarText'>
            <h2>Cloud Computing</h2>
            <p>you can write your own content</p>
        </div>
    </div>
    <div className='skillBar'>
        <img src={cyberImg} alt='cyberImg' className='skillBarImg'/>
        <div className='skillBarText'>
            <h2>Cyber Security</h2>
            <p>you can write your own content</p>
        </div>
    </div>
</div>
     </section> 
     
    )
}

export default Skill
