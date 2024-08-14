import { useState } from "react";
import "./css/nyu.css";

const NYUExpanded = ({toggleNYU}) => {
    const [expandAL, setExpandAL] = useState(false);
    const [expandCW, setExpandCW] = useState(false);
    const [expandRAD, setExpandRAD] = useState(false);
    const [expandDB, setExpandDB] = useState(false);

    const toggleExpandAL = () => {
        setExpandAL(prev => !prev);
    }
    const toggleExpandCW = () => {
        setExpandCW(prev => !prev);
    }
    const toggleExpandRAD = () => {
        setExpandRAD(prev => !prev);
    }
    const toggleExpandDB = () => {
        setExpandDB(prev => !prev);
    }

    return (
        <>
            <div className="blackout" onClick={toggleNYU}>
            </div>
            <div className="NYU-container">
                <h2 className="proj-title">New York University <a className="link-link inner-btn" href="https://www.nyu.edu/" target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-graduation-cap link-img inner-img"></i>
                        </a></h2>
                <h3 className="nopad proj-years">September 2021 - May 2024</h3>
                <h3 className="nopad">Major: Computer Science (Bachelor of Science)</h3>
                <h3 className="nopad">Graduation Date (Expected): May 2024</h3>
                <h3 className="nopad">GPA: 3.95 / 4.00</h3>
                <h2>Activities:</h2>
                <div className="no-bullets">
                    <p onClick={toggleExpandDB} className="clickableP">Incoming Introduction to Databases Course Assistant (September 2023 - Undefined) {
                    !expandDB ? (<i className="fa-solid fa-caret-down"></i>) : (
                        <i className="fa-sharp fa-solid fa-caret-up"></i>
                    )}</p>
                    {expandDB && <>
                        <p className="subtitle">Incoming Course Assistant for the computer science class, Introduction to Databases. 
                        I will tutor and teach other students regarding this subject and will also participate in helping the professor 
                        organizing classes and labs, and other miscellaneous tasks.
                        </p>
                    </>}
                    <p onClick={toggleExpandAL} className="clickableP">NYU Augmented Libraries VIP backend developer (September 2021 - May 2022) {
                    !expandAL ? (<i className="fa-solid fa-caret-down"></i>) : (
                        <i className="fa-sharp fa-solid fa-caret-up"></i>
                    )}</p>
                    {expandAL && <>
                        <p className="subtitle">Worked with NYU-sponsered credited project to create a mobile application 
                        that utilizes AR to enhance students' experience of our school library, Dibner. Worked in the backend 
                        subteam using MongoDB and SQLite to manage the backend of the application</p>
                    </>}
                    <p onClick={toggleExpandCW} className="clickableP">Cyberware Startup cofounder (September 2021 - May 2022) {
                    !expandCW ? (<i className="fa-solid fa-caret-down"></i>) : (
                        <i className="fa-sharp fa-solid fa-caret-up"></i>
                    )}</p>
                    {expandCW && <>
                        <p className="subtitle">As a cofounder and lead software developer for the team, I developed and continue to support web-based 
                            software “Automa” based on Machine Learning to provide a user-friendly avenue for online patient diagnosis 
                            according to symptom input, leading to a quick and low-cost alternative to physician visit. We won the NYU 
                            Tandon-made Competition (2021) and received funding of $2000 for our Startup.</p>
                    </>}
                    <p onClick={toggleExpandRAD} className="clickableP">NYU Rapid Assembly and Design Competitor (September 2021 - January 2022) {
                    !expandRAD ? (<i className="fa-solid fa-caret-down"></i>) : (
                        <i className="fa-sharp fa-solid fa-caret-up"></i>
                    )}</p>
                    {expandRAD && <>
                        <p className="subtitle">Our team created a 3-D printed smart helmet to address urban cycling dangers by detecting location 
                            and direction of obstacles in blind spots as well as bike speed. All information relayed to the biker 
                            through audio and tactile cues. As the head of programming, I worked on the Arduino code and helped with the
                            wiring to ensure all components work cohesively.</p>
                    </>}
                </div>
                <h2>Awards:</h2>
                <div className="no-bullets">
                    <p>Dean's List (2023, 2022) | NYU Tandon Made Competition Winner (2021) | NYU Rapid Assembly and Design Competition Finalist (2021)</p>
                </div>
            </div>
        </>
    );
}

export default NYUExpanded;