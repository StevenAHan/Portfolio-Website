import WorkBlock from "./WorkBlock";
import bofa from "./svg/bofa.svg";
import henkel from "./svg/henkel.svg";
import nyu from "./svg/nyu.svg";


const WorkExperience = () => {
    return (
        <>
            <h1 className="title" id="work-section">Work Experience</h1>

            <WorkBlock name={"JP Morgan Chase"} title={"Software Engineer III"} dates={"August 2024 - Present"} location={"New York, NY"}
            summary={`At JP Morgan Chase, I design and maintain large-scale financial and risk management systems using React, Spring Boot, and cloud services. I partner with product, operations, and data teams to modernize transaction workflows, build resilient APIs, and deliver measurable performance and reliability improvements for internal applications.`}
            weblink={"https://www.jpmorganchase.com/"}
            />

            <WorkBlock name={"Bank Of America"} location={"Pennington, NJ"}
            positions={[
                {
                    title: "Software Engineer",
                    dates: "September 2023 - September 2025",
                    summary: `Owned retail bill payment platform improvements in Angular and Spring Boot. I led a Spring Boot 2 to 3 migration, modernized dependency management, strengthened Cucumber-based automation, and delivered an internal service visualization UI for support teams.`,
                },
                {
                    title: "Software Engineer Intern",
                    dates: "June 2023 - August 2023",
                    summary: `Developed end-to-end features for retail bill payments using Angular and Java Spring Boot. I improved test coverage, streamlined deployments, and collaborated with QA and product stakeholders to accelerate delivery.`,
                },
            ]}
            summary={`I supported retail bill payment services in Angular and Java Spring Boot, transitioning from intern to full-time engineer while driving migration, automation, and user-facing support tool improvements.`}
            weblink={"https://www.bankofamerica.com/"}
            logo={bofa}
            />

            <WorkBlock name={"Henkel"} title={"Research and Development Intern"} dates={"June 2022 - August 2022"} location={"Bridgewater, NJ"}
            summary={`Researched sustainable adhesive formulations and validated biodegradable, compostable alternatives through lab-scale testing and data analysis. I designed experiments, documented results, and supported cross-functional product development with actionable technical insights.`}
            weblink={"https://www.henkel-northamerica.com/"}
            logo={henkel}
            />
{/* 
            <WorkBlock name={"Augmented Libraries (VIP)"} title={"Backend Developer"} dates={"September 2021 - May 2022"} location={"New York, NY"}
            summary={`Built backend application infrastructure for an AR-enabled NYU library guide, using MongoDB and SQLite to support accessible iOS/Android experiences. I collaborated with a 20+ student research team to connect data services and enhance application reliability.`}
            weblink={"https://engineering.nyu.edu/research-innovation/student-research/vertically-integrated-projects/vip-teams/augmented-library"}
            logo={nyu}
            /> */}
        </>
    );
}

export default WorkExperience;