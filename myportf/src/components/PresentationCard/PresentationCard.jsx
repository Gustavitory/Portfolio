import React from 'react';
import './PresentationCard.css';
import comp from './comp.png'


const PresentationCard=()=>{
    return(
        <div>
            <div className='Presentation-cont'/>
            <div className='text'>
                <h3>Hola, soy Gustavo. Un placer conocerte.</h3>
                <p>  Soy de Maracay, Aragua, Venezuela. Inicié mi preparación en el mundo IT
                    motivado por el gran desafío que supone adentrarse en el, además de encontrar gusto
                    en poder crear cosas increíbles de la nada. Estoy capacitado para desarrollar tanto en 
                    el back-end como en el front-end en individual como grupalmente. Soy un fanático del aprendizaje y de la interacción
                     con nuevas tecnologías. Siempre me encuentro en constante evolución. Me gusta cocinar, hacer deportes y 
                     pintar en mi tiempo libre.                     
                </p>
            </div>
                <img className='png1' src={comp} alt="" />

        </div>
        
    )
}



export default PresentationCard;