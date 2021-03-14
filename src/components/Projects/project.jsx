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
            <footer className='footer_links'>
                <a
                    className='footer_links'
                    href={info.linkgithub}
                    target="_blank"
                    rel="noreferrer"
                    >
                    <i class="fab fa-github fa-lg">
                    </i>
                </a>
                <a
                    className='footer_links'
                    href={info.linkdeploy}
                    target="_blank"
                    rel="noreferrer"
                    >
                    <i class="fas fa-external-link-alt fa-lg"></i>
                </a>
            </footer>

        </div>
    )
}

export default Project;
