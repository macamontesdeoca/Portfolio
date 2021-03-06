import './index.scss';


const Project = ({info}) => {
    return (
        <div className='project_card'>
            <div className='project_card_title'>
            {info.title}
            </div>
            <div className='prueba_imagen'>
                <img src={info.image} alt='Foto del proyecto'/>
            </div>
            <p className='project_card_description'> 
                {info.description}
            </p>
            <footer className='project_card_footer'>
                {info.linkgithub} {info.linkdeploy}
            </footer>

        </div>
    )
}

export default Project;
