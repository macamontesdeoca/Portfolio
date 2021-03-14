import React from 'react';
import './index.scss';
import redux from '../../assets/iconredux.png';
import express from '../../assets/expressjs.png';
import postgre from '../../assets/iconpostgre.png';
import mongodb from '../../assets/mongodbicon.png';
import typescript from '../../assets/typescripticon.svg';


const Skills = () =>{
    return(
        <div id= 'skills' className='skills_container'>
            <div className='skills_title'>
                MY TECHNOLOGICAL STACK
            </div>
            <div className='skills_info'>
                <div id='ladoizq'>
                    <div className='seccion primero'>
                        <div className = 'arrow-pointer'>
                            <p className='skill_title'>FrontEnd</p>
                        </div>
                    </div>
                    <div className='seccion'>
                        <div className='arrow-pointer'>
                            <p className='skill_title'>BackEnd</p>
                        </div>
                    </div>
                    <div className='seccion'>
                        <div className='arrow-pointer'>
                        <p className='skill_title'>Database</p>
                        </div>
                    </div>
                    <div className='seccion'>
                        <div className='arrow-pointer'>
                        <p className='skill_title'>Learning..</p>
                        </div>
                    </div>
                </div>
                <div id='ladoder'>
                    <div id='frontend'className='rectangle primero'>
                        <p className='listado'>
                            <span className='next-to-icon'>HTML</span>
                            <i class="fab fa-html5 fa-lg"></i>
                            <span className='next-to-icon'>CSS</span> 
                            <i class="fab fa-css3-alt fa-lg"></i>
                            <span className='next-to-icon'>React</span>
                            <i class="fab fa-react fa-lg"></i>
                            <span className='next-to-icon'>Redux</span>
                            <img alt = 'redux icon' className='iconoredux'src={redux}></img>
                        </p>
                        </div>
                    <div id='backend'className='rectangle'>
                        <p className='listado'>
                            <span className='next-to-icon'>NodeJS</span>
                            <i class="fab fa-node-js fa-lg"></i>
                            <span className='next-to-icon'>Express</span>
                            <img alt = 'express icon' className='iconoexpress'src={express}></img>
                        </p>
                    </div>
                    <div id='database'className='rectangle'>
                        <p className='listado'>
                            <span className='next-to-icon'>PostgreSQL</span>
                            <img alt = 'postgre icon' className='iconopostgre'src={postgre}></img>
                        </p>
                    </div>
                    <div id='Aprendiendo' className='rectangle'>
                        <p className='listado'>
                            <span className='next-to-icon'>MongoDB</span>
                            <img alt = 'mongodb icon' className='iconopostgre'src={mongodb}></img>
                            <span className='next-to-icon'>Typescript</span>
                            <img alt = 'ts icon' className='iconots'src={typescript}></img>
                            <span className='next-to-icon'>Python</span>
                            <i class="fab fa-python fa-lg"></i>

                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Skills;