import React, { useState, useEffect } from 'react';
import './index.scss';
import { NavHashLink } from "react-router-hash-link";

const Nav = ({change}) => {
    const [show, setShow] = useState(false);

    const handleClick = () =>{
        setShow(true)
    }
    const scrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      };
    const disappear = () => {
        setShow(false)
    }
    var limit = false;
    if(change>40){
        limit=true;
    }
    useEffect(() => {
        setShow(true)
    },[limit])


    return(
        <div className={`container ${change > 40 ? 'container2' : null}`}>
            <div className = 'container__logo'>
            {show && change > 40 ? 
            <NavHashLink smooth to = '#home' onClick = {disappear}>&#123; Maca Montes de Oca &#125;</NavHashLink>
            : null}
            </div> 
            <div className='container__links'>
                <NavHashLink smooth to = '#about' onClick = {handleClick}>About</NavHashLink>
                <NavHashLink smooth to = '#projects' onClick = {handleClick}>Projects</NavHashLink>
                <NavHashLink smooth to = '#skills' onClick = {handleClick}>Skills</NavHashLink>
                <NavHashLink smooth to = '#contact' onClick = {scrollToBottom}>Contact</NavHashLink>
            </div>
        </div>
    )
}
export default Nav;