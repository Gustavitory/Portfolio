import React from 'react';
import './Start.css'





const Start= ()=>{
    let saludo='<Gustavo Riera/>'
    return (
        <div className='StartCont'>
            <div class="bg-6">
	            <div class="glitch" data-text="<Gustavo Riera/>">{saludo}</div>
	        </div>
            <div class="bg-5">
                <h1 class="animated-shadow">Desarrollador Full Stack</h1>   
            </div>
            <p>Soy un apasionado de los retos y del aprendizaje, mi objetivo constante, la excelencia.</p>
            <img className='avatar' src='https://i.imgur.com/oJcENuQ.jpg' alt=''/>
            {/* <img className='vector' src="https://static.vecteezy.com/system/resources/previews/001/361/471/non_2x/man-and-woman-develop-a-website-free-vector.jpg" alt="" /> */}
        </div>
    )
}

export default Start;