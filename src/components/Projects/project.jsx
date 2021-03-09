import './index.scss';


const Project = ({info}) => {
    return (
        <div className='project_card'>
            <img className='card_imagen' src={info.image} alt='Foto del proyecto'/>
            <div className='card_title'>
            {info.title}
            </div>
            <p className='card_description'> 
                {info.description}
            </p>
            <footer>
                Repositorio {info.linkgithub} Ver demo {info.linkdeploy}
            </footer>

        </div>
    )
}

export default Project;
