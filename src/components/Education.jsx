import EducationBlock from "./EducationBlock.jsx";

const Education = ({toggleNYU, toggleEBHS}) => {
    return (
        <>
            <h1 className="title" id="education-section">Education:</h1>

            <EducationBlock name={"New York University"} major={"Computer Science (BS)"} dates={"September 2021 - Present"} location={"New York, NY"}
            summary={"Relevant Coursework: Operating Systems, Databases, Applied Internet Technologies, Computer Architecture, Object Oriented Programming, Data Structures and Algorithms, Artificial Intelligence, Discrete Math, Data Analysis"}
            weblink={"https://www.nyu.edu/"} classes={"clickable"} toggleEd={toggleNYU}
            gpa={"3.945"}
            />

            <EducationBlock name={"East Brunswick High School"} dates={"September 2017 - June 2021"} location={"East Brunswick, NJ"}
            summary={"Took 11 AP courses including computer science, math, physics, chemistry, language, history | SAT: 1550 (770 English, 780 Math); SAT II: 800 (Math II), 790 (Physics), 780 (Biology Ecological)"}
            weblink={"https://www.ebnet.org/EBHS"}
            major={"High School Diploma"} classes={"clickable"}
            gpa={"Weighted: 4.610 | Unweighted: 3.941"} toggleEd={toggleEBHS}
            />
        </>
    );
}

export default Education;