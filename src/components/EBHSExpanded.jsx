import { useState } from "react";
import "./css/nyu.css";

const EBHSExpanded = ({toggleEd}) => {
    return (
        <>
            <div className="blackout" onClick={toggleEd}>
            </div>
            <div className="NYU-container">
                <h2 className="proj-title">East Brunswick High School <a className="link-link inner-btn" href="https://www.ebnet.org/EBHS" target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-graduation-cap link-img inner-img"></i>
                        </a></h2>
                <h3 className="nopad proj-years">September 2017 - June 2021</h3>
                <h3 className="nopad">Obtained High School Diploma</h3>
                <h3 className="nopad">Weighted GPA: 4.610 | Unweighted GPA: 3.941 / 4.00</h3>
                <h2>Activities:</h2>
                <div className="no-bullets">
                    <p>NJ Science League (2017 - 2020)</p>
                    <p>Math Honor Society (2019-2020)</p>
                    <p>Science Honor Society (2019-2020)</p>
                    <p>Math Team (2017-2019)</p>
                </div>
                <h2>Awards:</h2>
                <div className="no-bullets">
                    <p>Gold Honor Roll (2018-2021)</p>
                    <p>AP Scholar with Distinction Award (2020, 2021)</p>
                    <p>President's Award for Educational Excellence (2021)</p>
                    <p>Team 1st Place in Biology I and Chemistry I (2017 - 2019)</p>
                    <p>National Merit Commended Student (2019)</p>
                </div>
            </div>
        </>
    );
}

export default EBHSExpanded;