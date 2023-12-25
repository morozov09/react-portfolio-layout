import { useParams } from 'react-router-dom';
import { ProjectsList } from '../../helpers/ProjectsList';

import img from '../../img/projects/02-big.jpg';
import GithubBtn from '../githubBtn/GithubBtn';


const ProjectPage = () => {

    const {id} = useParams();
    const project = ProjectsList[id];



    return ( 
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1"> {project.title} </h1>

                <img src={project.imgBig} alt={project.title} className="project-details__cover" />

                <div className="project-details__desc">
                    <p> {project.skills} </p>
                </div>

                { project.gitHubLink && <GithubBtn link="https:/github.com" /> }
                
                

            </div>
        </div>
    </main>
     );
}
 
export default ProjectPage;