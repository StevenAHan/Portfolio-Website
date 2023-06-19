import "./css/projectBlock.css";
import link from "./imgs/link.png";
import ghlogo from "./imgs/githublogo.png";


const ProjectBlock = ({title, dates, summary, weblink, gitlink, projImg}) => {
    return (
        <>
            <div className="proj-container">
                {/* <div className ="project-container"> */}
                    <h2 className="proj-title">{title} </h2>
                    <h3 className="proj-years">{dates}</h3>
                    <p>{summary}</p>
                    <div className="links-container">
                    </div>
                    {weblink && <a href={link} className="proj-link btn-blue-outline" target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-link"></i> Link</a>}
                    {gitlink && <a href={gitlink} className="proj-link btn-blue-outline" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i> Github</a>}
                {/* </div> */}
                {/* <img src={projImg} alt="projImg" className="projImg"/> */}
            </div>
        </>
    );
}

export default ProjectBlock;