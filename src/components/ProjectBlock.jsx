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
        { img: javascriptImg, title: "Javascript" },
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
        { img: githubImg, title: "Github" },
    ];
    
    return (
        <>
            <div className="proj-container">
                <h2 className="proj-title">{title} </h2>
                <h3 className="proj-years">{dates}</h3>
                <br />
                <h3 className="skills-used">Skills Used: </h3> {skillsUsed && skillsUsed.map((skill) => {
                    for(let skillBlock of skillBlocks) {
                        if(skillBlock.title === skill) {
                            return <img src={skillBlock.img} alt={skillBlock.title} className="proj-skill-img" />
                        }
                    }
                })}
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