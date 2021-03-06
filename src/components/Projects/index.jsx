import React from 'react';
import './index.scss';
import Project from './project.jsx';
import projects from '../../data/projects';

const Projects = () =>{
    // const prueba = [1,2,3,4,5,6]
    return(
        <div id= 'projects' className='projects_container'>
            <div className='projects_title'>
                These are some the projects that I've worked in :
            </div>
            <div className='cards_container'>
                {projects.map((item,index) =>
            <Project className='project_card' info={item}/>
                )}
            {/* <Project className='project_card'/>
            <Project className='project_card'/>
            <Project className='project_card'/>
            <Project className='project_card'/>
            <Project className='project_card'/> */}
            </div>

        </div>
    )
}

export default Projects;