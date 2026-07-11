import "./css/projectBlock.css";
import link from "./imgs/link.png";
import ghlogo from "./imgs/githublogo.png";
import javascriptImg from "./svg/js.svg";
import cplusImg from "./svg/c++.svg";
import pythonImg from "./svg/python.svg";
import javaImg from "./svg/java.svg";
import htmlImg from "./svg/html.svg";
import cssImg from "./svg/css.svg";
import csharpImg from "./svg/c.svg";
import cImg from "./svg/csharp.svg";
import mongodbImg from "./svg/mongodb.svg";
import mysqlImg from "./svg/mysql.svg";
import nodejsImg from "./svg/nodejs.svg";
import reactImg from "./svg/react.svg";
import flaskImg from "./svg/flask.svg";
import springImg from "./svg/spring.svg";
import socketioImg from "./svg/socketio.svg";
import unityImg from "./svg/unity.svg";
import kotlinImg from "./svg/kotlin.svg";
import githubImg from "./svg/github.svg";



const ProjectBlock = ({title, dates, summary, weblink, gitlink, skillsUsed}) => {

    const skillBlocks = [
        { img: javascriptImg, title: "JavaScript" },
        { img: cplusImg, title: "C++" },
        { img: pythonImg, title: "Python" },
        { img: javaImg, title: "Java" },
        { img: htmlImg, title: "HTML" },
        { img: cssImg, title: "CSS" },
        { img: cImg, title: "C" },
        { img: csharpImg, title: "C#" },
        { img: kotlinImg, title: "Kotlin" },
        { img: mongodbImg, title: "MongoDB" },
        { img: mysqlImg, title: "MySQL" },
        { img: nodejsImg, title: "Node.js" },
        { img: reactImg, title: "React" },
        { img: socketioImg, title: "Socket.io" },
        { img: flaskImg, title: "Flask" },
        { img: springImg, title: "Spring Boot" },
        { img: unityImg, title: "Unity" },
        { img: githubImg, title: "GitHub" },
    ];

    const renderSkill = (skill) => {
        const matched = skillBlocks.find((skillBlock) => skillBlock.title.toLowerCase() === skill.toLowerCase());
        if (matched) {
            return <img key={skill} src={matched.img} alt={matched.title} className="proj-skill-img" />;
        }
        return null;
    };
    
    return (
        <>
            <div className="proj-container">
                <div className="proj-title-row">
                    <h2 className="proj-title">{title}</h2>
                    <span className="proj-years">{dates}</span>
                </div>
                <div className="skills-used-row">
                    <span className="skills-used">Skills Used:</span>
                    <div className="skills-icon-list">
                        {skillsUsed && skillsUsed.map((skill) => renderSkill(skill))}
                    </div>
                </div>
                <p>{summary}</p>
                <div className="links-container">
                    {weblink && <a className="link-link inner-btn" href={weblink} target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-link link-img inner-img fa-xl"></i>
                        </a>}
                    {gitlink && <a className="git-link inner-btn" href={gitlink} target="_blank" rel="noreferrer">
                        <i className="fab fa-github link-img inner-img fa-xl"></i>
                        </a>}
                </div>
            </div>
        </>
    );
}

export default ProjectBlock;