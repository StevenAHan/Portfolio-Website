import { useState } from "react";
import "./css/nyu.css";

const NYUExpanded = ({toggleNYU}) => {
    const [expandCA, setExpandCA] = useState(false);
    const [expandAL, setExpandAL] = useState(false);


    const toggleExpandCA = () => {
        setExpandCA(prev => !prev);
    }
    const toggleExpandAL = () => {
        setExpandAL(prev => !prev);
    }

    return (
        <>
            <div className="blackout" onClick={toggleNYU}>
            </div>
            <div className="NYU-container">
                <h2 className="proj-title">New York University <a className="link-link inner-btn" href="https://www.nyu.edu/" target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-graduation-cap link-img inner-img"></i>
                        </a></h2>
                <h3 className="nopad proj-years">September 2021 - Present</h3>
                <h3 className="nopad">Major: Computer Science (Bachelor of Science)</h3>
                <h3 className="nopad">Graduation Date (Expected): May 2024</h3>
                <h3 className="nopad">GPA: 3.95 / 4.00</h3>
                <h2>Activities:</h2>
                <div className="no-bullets">
                    <p onClick={toggleExpandCA} className="clickableP">Incoming Design and Analysis of Algorithms Course Assistant (September 2023 - Undefined)</p>
                    {expandCA && <>
                        <ul className="no-bullet">
                            <li></li>
                        </ul>
                    </>}
                    <p onClick={toggleExpandAL} className="clickableP">NYU Augmented Libraries VIP backend developer (September 2021 - May 2022)</p>
                    {expandAL && <>
                        <ul className="no-bullet">
                            <li>Worked with NYU-sponsered Credited project to create a mobile application that utilizes AR to enhance students' experience of our school library, Dibner</li>
                            <li>Worked in the backend subteam using MongoDB and SQLite to manage the backend of the application</li>
                        </ul>
                    </>}
                    <p>Cyberware Startup cofounder (September 2021 - May 2022)</p>
                    <p>NYU Rapid Assembly and Design Competitor (September 2021 - January 2022)</p>
                </div>
                <h2>Awards:</h2>
                <div className="no-bullets">
                    <p>2022 - 2023 Dean's List</p>
                    <p>2021-2022 Dean's List</p>
                    <p>NYU Tandon Made Competition Winner</p>
                    <p>NYU Rapid Assembly and Design Competition Finalist</p>
                </div>
            </div>
        </>
    );
}

export default NYUExpanded;