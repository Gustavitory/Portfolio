import React from 'react';
import './Goals.css'


const Goals=()=>{
    return(
        <div className='all'>
        <div class="container py-5">
            <div class="row text-center text-white mb-5">
                <div class="col-lg-8 mx-auto">
                    <h1 class="display-4">Mis Objetivos</h1>
                </div>
            </div>


            <div class="row">
                <div class="col-lg-7 mx-auto">
                    

                    <ul class="timeline">
                        <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                            <div class="timeline-arrow"></div>
                            <h2 class="h5 mb-0">Insertarme en el mercado laboral.</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>2021</span>
                            <p class="text-small mt-2 font-weight-light">Demostrar todo lo que se y lo que puedo llegar a aportar cuando me den la oportunidad</p>
                        </li>
                        <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                            <div class="timeline-arrow"></div>
                            <h2 class="h5 mb-0">Formarme en JAVA.</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>2021</span>
                            <p class="text-small mt-2 font-weight-light">JAVA es uno de lo lenguajes mas ámplios que existen, logrando manejarlo puedo aumentar mi calidad profesional.</p>
                            <p class="text-small mt-2 font-weight-light">Al ser un lenguaje de alta complejidad supondrá un gran desafio que afrontare con gusto.</p>
                        </li>
                        <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                            <div class="timeline-arrow"></div>
                            <h2 class="h5 mb-0">Formarme en Python.</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>2022</span>
                            <p class="text-small mt-2 font-weight-light">Python es un lenguaje de programación muy conocido y de gran utilidad,
                            es un primer paso para iniciar mis estudios en ciber seguridad, rama en la cual me especializaré a futuro</p>
                        </li>
                        <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                            <div class="timeline-arrow"></div>
                            <h2 class="h5 mb-0">Especializarme en ciber seguridad.</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>2022-2023</span>
                            <p class="text-small mt-2 font-weight-light">La ciber seguridad es un mundo que me parece muy interesante, tambien es complejo y exigente entrar en el,
                            creo que con esfuerzo, disciplina y tiempo seré un profesional de alto valor en esta carrera.</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        </div>
    )
}

export default Goals;