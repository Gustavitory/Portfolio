import React from 'react';
import './Goals.css'


const Goals=()=>{
    let leng="C#"
    let frame=".net"
    return(
        <div className='all'>
        <div class="container py-5">
            <div class="row text-center text-white mb-5">
                <div class="col-lg-8 mx-auto">
                    <h1 class="display-4">Mis Objetivos Actuales</h1>
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
                            <h2 class="h5 mb-0">Continuar formandome profesionalmente.</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>2021</span>
                            <p class="text-small mt-2 font-weight-light">Las tecnologías estan en constante desarrollo, por ende yo tampoco puedo dejar de formarme.</p>
                            <p class="text-small mt-2 font-weight-light">Manejar Typescript, React native y next.js son algunos de mis planes a futuro.</p>
                        </li>
                        <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                            <div class="timeline-arrow"></div>
                            <h2 class="h5 mb-0">Formarme en {leng}.</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>2022</span>
                            <p class="text-small mt-2 font-weight-light">{leng} es un lenguaje de programación muy conocido y de gran utilidad,
                            es un primer paso para iniciar mis estudios en las tecnologías {frame} </p>
                        </li>
                        <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                            <div class="timeline-arrow"></div>
                            <h2 class="h5 mb-0">Especializarme en diseño web.</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>2022-2023</span>
                            <p class="text-small mt-2 font-weight-light">El diseño web seguirá evolucionando, cambiando y mi meta es llegar a ser alguien de reconocimiento
                                internacional en este gran área de trabajo que disfruto mucho.</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        </div>
    )
}

export default Goals;
