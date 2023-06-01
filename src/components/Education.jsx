import EducationBlock from "./EducationBlock.jsx";

const Education = ({toggleNYU}) => {
    return (
        <>
            <h1 className="title" id="education-section">Education:</h1>

            <EducationBlock name={"New York University"} major={"Computer Science (BS)"} dates={"September 2021 - Present"} location={"New York, NY"}
            summary={"Dean's List 2021, 2022 | Relevant Coursework: Operating Systems, Databases, Applied Internet Technologies, Computer Architecture, Object Oriented Programming, Data Structures and Algorithms, Artificial Intelligence, Discrete Math, Data Analysis"}
            weblink={"https://www.nyu.edu/"} classes={"clickable"} toggleNYU={toggleNYU}
            />

            <EducationBlock name={"East Brunswick High School"} dates={"September 2017 - June 2021"} location={"East Brunswick, NJ"}
            summary={"High School Diploma | Weighted GPA: 4.610 | Unweighted GPA: 3.941 | 11 AP courses including computer science, math, physics, chemistry, language, history | SAT: 1550 (770 English, 780 Math); SAT II: 800 (Math II), 790 (Physics), 780 (Biology Ecological)"}
            weblink={"https://www.ebnet.org/EBHS"}
            />
        </>
    );
}

export default Education;