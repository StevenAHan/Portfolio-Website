import Skillblock from "./Skillblock";
import javascriptImg from "./svg/js.svg";
import cplusImg from "./svg/c++.svg";
import pythonImg from "./svg/python.svg";
import javaImg from "./svg/java.svg";
import htmlImg from "./svg/html.svg";
import cssImg from "./svg/css.svg";
import cImg from "./svg/c.svg";
import csharpImg from "./svg/csharp.svg";
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

const Skills = () => {
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
      <h1 className="title">Technical Skills</h1>
      {skillBlocks.map((skill, index) => (
        <Skillblock key={index} img={skill.img} title={skill.title} />
      ))}
    </>
  );
};

export default Skills;
