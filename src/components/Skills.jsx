import Skillblock from "./Skillblock";
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
import githubImg from "./svg/github.svg";
import kotlinImg from "./svg/kotlin.svg";
import arduinoImg from "./svg/arduino.svg";
import sqlImg from "./svg/sql.svg";
import angularImg from "./svg/angular.svg";
import copilotImg from "./svg/copilot.svg";

const Skills = () => {
  const skillGroups = [
    {
      title: "Languages",
      skills: [
        { img: javaImg, title: "Java" },
        { img: pythonImg, title: "Python" },
        { img: javascriptImg, title: "JavaScript" },
        { img: cplusImg, title: "C++" },
        { img: sqlImg, title: "SQL" },
        { img: htmlImg, title: "HTML" },
        { img: cssImg, title: "CSS" },
        { img: cImg, title: "C" },
        { img: csharpImg, title: "C#" },
        { img: kotlinImg, title: "Kotlin" },
        { img: arduinoImg, title: "Arduino" },
      ],
    },
    {
      title: "Programs / Frameworks",
      skills: [
        { img: springImg, title: "Spring Boot" },
        { img: reactImg, title: "React" },
        { img: nodejsImg, title: "Node.js" },
        { img: mongodbImg, title: "MongoDB" },
        { img: githubImg, title: "GitHub" },
        { img: flaskImg, title: "Flask" },
        { img: mysqlImg, title: "MySQL" },
        { img: copilotImg, title: "Copilot" },
        { img: angularImg, title: "Angular" },
      ],
    },
  ];

  return (
    <>
      <h1 className="title">Technical Skills</h1>
      {skillGroups.map((group) => (
        <section key={group.title} className="skill-group">
          <h2 className="skill-group-title">{group.title}</h2>
          <div className="skill-container">
            {group.skills.map((skill) => (
              <Skillblock key={skill.title} img={skill.img} title={skill.title} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default Skills;
