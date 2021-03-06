import React from 'react';
import './index.scss';

const Skills = () =>{
    return(
        <div id= 'skills' className='skills_container'>
            <div className='seccion primero'>
                <div className = 'ribbon'>
                    <p className='skill_title'>FrontEnd</p>
                </div>
                <div className='lado_derecho'>
                    <p>fhskdfhskh</p>
                    <p>fhskdfhskh</p>
                    <p>fhskdfhskh</p>
                </div>
            </div>
            <div className='seccion'>
                <div className = 'ribbon'>
                    <p className='skill_title'>BackEnd</p>
                </div>
                <div className='lado_izquierdo'>
                    Hola
                </div>
            </div>
            <div className='seccion'>
                <div className = 'ribbon'>
                    <p className='skill_title'>Database</p>
                </div>
                <div className='lado_derecho'>
                    Hola
                </div>
            </div>
            <div className='seccion'>
                <div className = 'ribbon'>
                    <p className='skill_title'>Tools & Others</p>
                </div>
                <div className='lado_izquierdo'>
                    Hola
                </div>
            </div>

        </div>
    )
}

export default Skills;