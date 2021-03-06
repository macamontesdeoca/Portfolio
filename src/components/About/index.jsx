import React from 'react';
import './index.scss';
import profile from '../../assets/fotoperfil.jpeg';

const About = () =>{
    return(
        <div id= 'about' className='about_container'>
            <div className='picture_container'>
                <img src={profile} alt='Foto de perfil' className='profile_picture'/>
                <p className='picture_container_title'>Guess how many takes this took </p>
            </div>
            <div className='description_container'>
                <div className='info_title'>
                Some personal insight:
                </div>
                <p className='info'>
                Me in 140 characters : Recently graduated from university (UTN FRLP, Argentina) as Chemical Engineer and having completed a bootcamp as Full Stack Developer (React, Node, Express, PostgreSQL).
                </p>
                <p className='info'>
                A bit of my road: I consider myself as an adaptable person who feels comfortable with teamwork. I feel interested in solving challenging problems where I am required to put my abilities to test and I always try to create a good working environment between me and my colleagues.
                </p>
                <p className='info'>
                My favorites : phrase, music, food, book, series, movie I am ready to begin my professional path through some job related to my fields of studies, also a combination of both engineering assets and IT knowledge as well.
                </p>
            </div>
            <div className='media_links'>
                    <span className='media_links_title'> Find me on </span>
                    <a
                    className='media_links_icons'
                    href="https://github.com/macamontesdeoca"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <i class="fab fa-github fa-lg">
                    </i>
                    </a>
                    <a
                    href="https://www.linkedin.com/in/macarena-montes-de-oca/"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <i class="fab fa-linkedin fa-lg"></i>
                    </a>
                    <a
                    className='media_links_icons'
                    href="https://api.whatsapp.com/send?phone=5492214769734&lang=en"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <i class="fab fa-whatsapp fa-lg"></i>
                    </a>

                </div>
        </div>
    )
}

export default About;