import React from 'react';
import './TechSkills.css';
import css from './css.png';
import express from './express.png';
import github from './github.png';
import html from './html.png';
import js from './js.png';
import node from './node.png';
import postgre from './postgre.png';
import react from './React.png';
import redux from './Redux.png';
import sass from './Sass.png';
import sequelize from './Sequelize.png';

const TechSkills=()=>{
    return(
        <div className='TechSkills'>
            <div className='sub'>
                <h2>Estas son mis skills tecnológicas</h2>
                <p>Empleando las siguientes tecnologías puedo hacer frente a cualquier desafío que se me 
                    presente obteniendo resultados positivos.
                </p>
            </div>
            <div className='content-all'>
                <div className='content-carousel'>
                    <figure>
                        <img src={js} alt=""/>
                            {/* <h5>JavaScript</h5> */}
                    </figure>
                    <figure>
                        <img src={html} alt=""/>
                            {/* <h5>HTML</h5> */}
                    </figure>
                    <figure>
                        <img src={css} alt=""/>
                            {/* <h5>CSS</h5> */}
                    </figure>
                    <figure>
                        <img src={react} alt=""/>
                            {/* <h5>React</h5> */}
                    </figure>
                    <figure>
                        <img src={redux} alt=""/>
                            {/* <h5>Redux</h5> */}
                    </figure>
                    <figure>
                        <img src={sass} alt=""/>
                            {/* <h5>Sass</h5> */}
                    </figure>
                    <figure>
                        <img src={node} alt=""/>
                            {/* <h5>Node.js</h5> */}
                    </figure>
                    <figure>
                        <img src={github} alt=""/>
                            {/* <h5>Github</h5> */}
                    </figure>
                    <figure>
                        <img src={express} alt=""/>
                            {/* <h5>Express</h5> */}
                    </figure>
                    <figure>
                        <img src={postgre} alt=""/>
                            {/* <h5>PostgreSQL</h5> */}
                    </figure>
                    <figure>
                        <img src={sequelize} alt=""/>
                            {/* <h5>Sequelize</h5> */}
                    </figure>
                </div>
            </div>
        </div>
    )
}


export default TechSkills;