import "./css/nyu.css";

const NYUExpanded = ({toggleNYU}) => {
    return (
        <>
            <div className="blackout" onClick={toggleNYU}>
            </div>
            <div className="NYU-container">
                <h2 className="proj-title">New York University</h2>
                <h3 className="nopad proj-years">September 2021 - Present</h3>
                <h3 className="nopad">Major: Computer Science (Bachelor of Science)</h3>
                <h3 className="nopad">Graduation Date (Expected): May 2024</h3>
                <h3 className="nopad">GPA: 3.945</h3>
                <h2>Activities:</h2>
                <ul className="no-bullets">
                    <li>Incoming Design and Analysis of Algorithms Course Assistant (September 2023 - Undefined)</li>
                    <li>NYU Augmented Libraries VIP backend developer (September 2021 - May 2022)</li>
                    <li>Cyberware Startup cofounder (September 2021 - May 2022)</li>
                    <li>NYU Rapid Assembly and Design Competitor (September 2021 - January 2022)</li>
                </ul>
                <h2>Awards:</h2>
                <ul className="no-bullets left-aligned">
                    <li>2022 - 2023 Dean's List</li>
                    <li>2021-2022 Dean's List</li>
                    <li>NYU Tandon Made Competition Winner</li>
                    <li>NYU Rapid Assembly and Design Competition Finalist</li>
                </ul>
            </div>
        </>
    );
}

export default NYUExpanded;