import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactimg from '../../assets/contact.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
<nav className='navbar'>
    <img src={logo} alt='logo' className='logo'></img>
    <div className='desktopMenu'>
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
      <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
      <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Certifications</Link>
      <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Project</Link>
    </div>
         
    < button className='desktopMenuBtn' onClick={()=>{
      document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
    }}>
     <img src={contactimg} alt='' className='desktopMenuImg'/>Contact Me </button>
</nav>
  )
}

export default Navbar
