import React from 'react'
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';
function Intro() {
  return (
   <section id="intro"> 
   <div className='introContent'>
    <span className='hello'>Hello,</span>
    <span className='introText'>I'm <span className='introName'>Mahuya</span><br></br><span className='introField'>Website Designer | Cloud enthusiast</span> </span>
    <p className='introPara'>Passion to learn new things and trying to give my best on it</p>
    <Link><button className='btn'><img src={btnImg} alt=''className='btnImg'/> Hire Me </button></Link>
   </div>
   <img src={bg} alt='Profile' className='bg'></img>
   </section>
  )
}

export default Intro
