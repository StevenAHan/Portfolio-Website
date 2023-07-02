import WorkBlock from "./WorkBlock";
import bofa from "./svg/bofa.svg";
import henkel from "./svg/henkel.svg";
import nyu from "./svg/nyu.svg";


const WorkExperience = () => {
    return (
        <>
            <h1 className="title" id="work-section">Work Experience:</h1>
            
            <WorkBlock name={"Bank Of America"} title={"Software Engineer Intern"} dates={"June 2023 - Present"} location={"Pennington, NJ"}
            summary={`I work primarily in Java Spring Boot to help create, test, and maintain the retail bill payment services for 
            Bank of America. I work in a cooperative Agile team environment utilizing tools like Jira and Bitbucket to create 
            documentation, test with J-unit testing, and work directly with application creation.`}
            weblink={"https://www.bankofamerica.com/"}
            logo={bofa}
            />

            <WorkBlock name={"Henkel"} title={"Research and Development Intern"} dates={"June 2022 - August 2022"} location={"Bridgewater, NJ"}
            summary={`I investigated sustainable adhesive alternatives that are biodegradable and compostable with a leading global 
            company, gaining research skills in a world-class industrial environment. I was in charge of designing, formulating, and 
            testing products using scientific instruments and proprietary software. I also analyzed and processed data in Henkel's 
            internal databases.`}
            weblink={"https://www.henkel-northamerica.com/"}
            logo={henkel}
            />

            <WorkBlock name={"Augmented Libraries (VIP)"} title={"Backend Developer"} dates={"September 2021 - May 2022"} location={"New York, NY"}
            summary={`As a backend developer for the NYU Augmented Libraries Vertically Integrated Project (VIP), I helped develop 
            an intuitive and access-friendly IOS/Android-based AR application for NYU's Dibner Library with a team of 20+. I was a 
            part of the backend subteam and established backend databasing infrastructure using MongoDB and SQLite.`}
            weblink={"https://engineering.nyu.edu/research-innovation/student-research/vertically-integrated-projects/vip-teams/augmented-library"}
            logo={nyu}
            />
        </>
    );
}

export default WorkExperience;