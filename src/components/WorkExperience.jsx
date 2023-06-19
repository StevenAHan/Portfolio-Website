import WorkBlock from "./WorkBlock";


const WorkExperience = () => {
    return (
        <>
            <h1 className="title" id="work-section">Work Experience:</h1>
            
            <WorkBlock name={"Bank Of America"} title={"Software Engineer Intern"} dates={"June 2023 - Present"} location={"Pennington, NJ"}
            summary={"I worked primarily in Java to help manage payment services relating to Bank of America. I gained experience in Spring Boot and SQL, and worked in a cooperative Agile team environment. I worked in creating documentation, unit testing, and application creation."}
            weblink={"https://www.bankofamerica.com/"}
            />

            <WorkBlock name={"Henkel"} title={"Research and Development Intern"} dates={"June 2022 - August 2022"} location={"Bridgewater, NJ"}
            summary={"I investigated sustainable adhesive alternatives that are biodegradable and compostable with a leading global company, gaining research skills in a world-class industrial environment. I was in charge of designing, formulating, and testing products using scientific instruments and proprietary software. I also analyzed and processed data in Henkel's internal databases."}
            weblink={"https://www.henkel-northamerica.com/"}
            />

            <WorkBlock name={"Augmented Libraries (Vertically Integrated Projects)"} title={"Backend Developer"} dates={"September 2021 - May 2022"} location={"New York, NY"}
            summary={"As a backend developer for the NYU Augmented Libraries VIP, I helped develop an intuitive and access-friendly IOS/Android-based AR application for NYU's Dibner Library with a team of 20+. I was a part of the backend subteam and established backend databasing infrastructure using MongoDB and SQLite."}
            weblink={"https://engineering.nyu.edu/research-innovation/student-research/vertically-integrated-projects/vip-teams/augmented-library"}
            />
        </>
    );
}

export default WorkExperience;