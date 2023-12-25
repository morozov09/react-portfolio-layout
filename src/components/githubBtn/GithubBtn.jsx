import imgBlack from './gitHub-black.svg';

const GithubBtn = (props) => {
    return (
      <a href={props.link} target="_blank" rel="noreferrer" className="btn-outline">
        <img src={imgBlack} alt="" />
        GitHub repo
      </a>
    );
}
 
export default GithubBtn;