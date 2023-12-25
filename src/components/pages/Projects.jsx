import {ProjectsList} from '../../helpers/ProjectsList';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
    return (
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">

            {ProjectsList.map((props) => {
              return (
                <ProjectCard
                  key={props.id}  
                  title={props.title}
                  img={props.img}
                  alt={props.title}
                  index={props.id}
                />
              );
            })}

          </ul>
        </div>
      </main>
    );
}
 
export default Projects;