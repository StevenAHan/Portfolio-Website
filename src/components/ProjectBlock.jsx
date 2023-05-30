import "./css/projectBlock.css";
import link from "./imgs/link.png";
import ghlogo from "./imgs/githublogo.png";


const ProjectBlock = ({title, dates, summary, weblink, gitlink}) => {
    return (
        <>
            <div className="proj-container">
                <h2 className="proj-title">{title} </h2>
                <h3 className="proj-years">{dates}</h3>
                <p>{summary}</p>
                <div className="links-container">
                    {weblink && <a className="link-link inner-btn" href={weblink} target="_blank" rel="noreferrer">
                        <img src={link} alt="link" className="link-img inner-img"/></a>}
                    {gitlink && <a className="git-link inner-btn" href={gitlink} target="_blank" rel="noreferrer">
                        <img src={ghlogo} alt="link" className="git-img inner-img"/></a>}
                </div>
            </div>
        </>
    );
}

export default ProjectBlock;