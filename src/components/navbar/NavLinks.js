import React from 'react';
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"
import {BsWhatsapp, BsTelegram} from "react-icons/bs"

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
        <li onClick={handleNav} ><a href="//github.com/whoisdjam/" target='_blank' rel="noopener noreferrer" className='nav-link'><BsGithub /></a></li>
        <li onClick={handleNav} ><a href="//wa.me/+819094373585" target='_blank' rel="noopener noreferrer" className='nav-link'><BsWhatsapp /></a></li>
        <li onClick={handleNav} ><a href="//t.me/swilson7565" target='_blank' rel="noopener noreferrer" className='nav-link'><BsTelegram /></a></li>
        <li onClick={handleNav} ><a href="mailto:satoharuto961@gmail.com" className='nav-link' rel="noopener noreferrer"><BiEnvelope /></a></li>
  </ul>
  )
};

export default NavLinks;
