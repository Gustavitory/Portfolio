import React from 'react';
import './Navbar.css';
import log from './log.png';

//-----------------Icons-------------------------------------------------
import {BsFillPersonFill} from 'react-icons/bs'
import {RiFocus2Line} from 'react-icons/ri'
import {MdWork} from 'react-icons/md'
import {GiTechnoHeart} from 'react-icons/gi'
import {RiContactsBookFill} from 'react-icons/ri'


const NavBar=()=>{
    return (
        <div className='nav-container'>
            <nav class="navbar navbar-expand-sm navbar-light " id='navv'>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#opciones">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" id='log' href="#portada">
                <img src={log} id='logo' alt=''/>
            </a>
    
        <div class="collapse navbar-collapse" id="opciones">   
            <ul class="navbar-nav" id='options'>
                <li class="nav-item">
                    <a class="nav-link" href="#presentation"><BsFillPersonFill size='25'/> Sobre mi</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#tech"><GiTechnoHeart size='25'/> Tecnologías</a>
                </li>  
                <li class="nav-item">
                    <a class="nav-link" href="#goals"><RiFocus2Line size='25'/> Objetivos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#projects"><MdWork size='25'/> Portafolio</a>
                </li>  
                <li class="nav-itemS" >
                    <a class="nav-link" id='contact' href="mailto:ggrieraya@gmail.com"><RiContactsBookFill size='25'/>Contacto</a>
                </li>                  
            </ul>
        </div>
  </nav>            
        </div>
    )
}

export default NavBar;


