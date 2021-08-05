import React from 'react';
import './Projects.css';
import {AiOutlineGithub} from 'react-icons/ai';
import {GoLinkExternal} from 'react-icons/go';
import {AiFillLinkedin} from 'react-icons/ai';
import {ImWhatsapp} from 'react-icons/im';


const Projects=()=>{
    return(
        <div className='projectsCont'>
            <h2>Portafolio</h2>
        <div className='projects'>            
            <div className='pi'>
                <div className='cards'>
                    <h3>Videogames App</h3>
                    <p>Aplicacion Realizada con React, Redux, CSS, express, postreSQL y Sequelize</p>
                    <div className='links'>
                        <a class="dc" target="_blank" rel="noopener noreferrer" href="https://github.com/Gustavitory/PI-Videogames-FT13"><AiOutlineGithub size='30'/></a>
                    </div>
                </div>
            </div>
            <div className='pg'>
                <div className='cards'>
                    <h3>El gramófono</h3>
                    <p>Ecommerce creado con React, Redux, CSS, express, postgreSQL, Sequelize, MaterialUI,react-icons,
                         etc...
                    </p>
                    <div className='links'>
                        <a class="dc" target="_blank" rel="noopener noreferrer" href="https://github.com/Gustavitory/PG-Henry-Ecommerce-Front">Front <AiOutlineGithub size='30'/></a>
                        <a class="dc" target="_blank" rel="noopener noreferrer" href="https://github.com/Gustavitory/PG-Henry-Ecommerce-Front">Back <AiOutlineGithub size='30'/></a>
                        <a class="dc" target="_blank" rel="noopener noreferrer" href="https://elgramofono.tk/"><GoLinkExternal size='30'/></a>
                    </div>
                </div>
            </div>
        </div>
        <nav className='social'>
            <a class='icon' target="_blank" rel="noopener noreferrer" href="https://github.com/Gustavitory"><AiOutlineGithub size='50'/></a>
            <a class='icon' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gustavo-riera-fullstackdev/"><AiFillLinkedin size='50'/></a>
            <a class='icon' target="_blank" rel="noopener noreferrer" href="https://wa.me/584243467694"><ImWhatsapp size='50'/></a>
        </nav>
        </div>
    )
}
export default Projects;