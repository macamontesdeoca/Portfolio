import React from 'react';
import './index.scss';
import profile from '../../assets/fotoperfil.jpeg';
import cv from '../../assets/CV-2021-ARG.pdf';

const About = () =>{
    return(
        <div id= 'about' className='about_container'>
            <div className='about_title'>
                A QUICK INTRODUCTION !
            </div>
            <div className='about_content'>
                <div className='picture_container'>
                    <img src={profile} alt='Foto de perfil' className='profile_picture'/>
                    <p className='picture_container_title'>(Guess how many takes this took) </p>
                </div>
                <div className='description_container'>
                    <div className='info_title'>
                    How would I describe myself:
                    </div>
                    <p className='info'>
                    Me in 140 characters : Full Stack Web Developer &#128105;&#127997;&#8205;&#128187; | Chemical Engineer &#128105;&#127996;&#8205;&#128300;. Born and raised in La Plata, Argentina &#127462;&#127479; . Logical thinker, passionate about problem solving
                    </p>
                    <p className='info'>
                        My favorites:
                        <ul>
                            <li>Phrase : 'Life's too short to be afraid'</li>
                            <li>Music : From Coldplay to Maluma, anything in between</li>
                            <li>Food: Milanesa con puré !</li>
                            <li>Book: Harry Potter lover ⚡ </li>
                            <li>Series: Sherlock - Grey's Anatomy - Brooklyn 99</li>
                        </ul>
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
                        <span className='media_links_title'> Download my CV </span>
                        <a
                        // className='media_links_icons'
                        href={cv}
                        target="_blank"
                        rel="noreferrer"
                        download='CV Macarena Montes de Oca'
                        >
                        <i class="fas fa-file-pdf fa-lg"></i>
                        </a>

                    </div>
            </div>
        </div>
    )
}

export default About;