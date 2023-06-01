import "./css/projectBlock.css";
import link from "./imgs/link.png";
import ghlogo from "./imgs/githublogo.png";
import gradlink from "./imgs/gradlink.png";


const EducationBlock = ({name, major, location, dates, summary, weblink, classes, toggleNYU}) => {
    
    return (
        <>
            <div className={`proj-container ${classes}`} onClick={toggleNYU}>
                <h2 className="proj-title">{name} </h2>
                <h3 className="proj-years">{dates}</h3>
                <h3 className="proj-loc">{location}</h3>
                {major && <h2 className="proj-subtitle">{major}</h2> }
                <p>{summary}</p>
                <div className="links-container">
                    {weblink && <a className="link-link inner-btn" href={weblink} target="_blank" rel="noreferrer">
                        <img src={gradlink} alt="link" className="link-img inner-img"/></a>}
                </div>
            </div>
        </>
    );
}

export default EducationBlock;