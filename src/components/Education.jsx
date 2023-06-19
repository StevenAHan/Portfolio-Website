import EducationBlock from "./EducationBlock.jsx";

const Education = ({toggleNYU}) => {
    return (
        <>
            <h1 className="title" id="education-section">Education:</h1>

            <EducationBlock name={"New York University"} major={"Computer Science (BS)"} dates={"September 2021 - Present"} location={"New York, NY"}
            summary={"Dean's List 2021, 2022 | Relevant Coursework: Operating Systems, Databases, Applied Internet Technologies, Computer Architecture, Object Oriented Programming, Data Structures and Algorithms, Artificial Intelligence, Discrete Math, Data Analysis"}
            weblink={"https://www.nyu.edu/"} classes={"clickable"} toggleEd={toggleNYU}
            gpa={"3.945"}
            />

            <EducationBlock name={"East Brunswick High School"} dates={"September 2017 - June 2021"} location={"East Brunswick, NJ"}
            summary={"Took 11 AP courses including computer science, math, physics, chemistry, language, history | SAT: 1550 (770 English, 780 Math); SAT II: 800 (Math II), 790 (Physics), 780 (Biology Ecological) | Clubs: Math Honor Society, Science Honor Society, Math Team, NJ Science League | Awards: Team first place Science League Biology I and Chem I, Gold Honor Roll 2018-2021, National Merit Commended Student, AP Scholar with Distinction Award, President's Award for Educational Excellence"}
            weblink={"https://www.ebnet.org/EBHS"}
            major={"High School Diploma"}
            gpa={"Weighted: 4.610 | Unweighted: 3.941"}
            />
        </>
    );
}

export default Education;