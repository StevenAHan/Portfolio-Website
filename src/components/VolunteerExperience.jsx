import { useState } from "react";
import VolunteerBlock from "./VolunteerBlock";


const VolunteerExperience = () => {
    const [expandVol, setExpandVol] = useState(false);

    const toggleExpandVol = () => {
        setExpandVol(prev => !prev);
    }

    return (
        <>
            <h1 className="title clickableP" id="vol-section" onClick={toggleExpandVol}>Volunteer Experience and Miscellaneous Activities: {
                    !expandVol ? (<i className="fa-solid fa-caret-down"></i>) : (
                        <i className="fa-sharp fa-solid fa-caret-up"></i>
                    )}</h1>
            {expandVol && (
            <>
                <VolunteerBlock name={"CyberWare"} title={"Cofounder"} dates={"September 2021 - May 2022"} location={"New York, NY"}
                    summary={`As a cofounder and lead software developer for the team, I developed and continue to support web-based 
                    software “Automa” based on Machine Learning to provide a user-friendly avenue for online patient diagnosis 
                    according to symptom input, leading to a quick and low-cost alternative to physician visit. We won the NYU 
                    Tandon-made Competition (2021) and received funding of $2000 for our Startup.`}
                />

                <VolunteerBlock name={"NYU Rapid Assembly and Design Competition"} title={"Head of Programming"} dates={"September 2021 - January 2022"} location={"New York, NY"}
                    summary={`Worked in a team of four to create a "smart" helmet for NYU's RAD competition. The smart 
                    helmet was a 3-D printed smart helmet to address urban cycling dangers by detecting location and direction of obstacles 
                    in blind spots as well as bike speed. 
                    All information relayed to the biker through audio and tactile cues. As the head of programming, 
                    I took care of all of the Arduino code and worked with developing and testing the software and wiring to ensure 
                    that the helmet works properly.`}
                    weblink={"https://manual.eg.poly.edu/index.php/Rapid_Assembly_and_Design_Challenge_(RAD)"}
                />

                <VolunteerBlock name={"Raritan Bay Medical Center"} title={"ER Volunteer Nurse"} dates={"November 2019 - March 2020"} location={"Perth Amboy, NJ"}
                summary={`As a medical volunteer for the Emergency Room, I assisted the staff with managing patient comfort, 
                visiting patients, and organizing supplies.`}
                weblink={"https://www.hackensackmeridianhealth.org/en/locations/raritan-bay-medical-center"}
                />

                <VolunteerBlock name={"East Brunswick Huaxia Chinese School"} title={"Lead Volunteer"} dates={"October 2019 - March 2020"} location={"East Brunswick, NJ"}
                summary={`As a lead volunteer, I performed critical teaching and administrative tasks, such as organizing materials, 
                events and activities, and training and supervising junior volunteers.`}
                weblink={"http://www.hxeb.org/"}
                />

                <VolunteerBlock name={"East Brunswick Public Library"} title={"Reviewer and Volunteer for EBPL ARC"} dates={"September 2018 - May 2019"} location={"East Brunswick, NJ"}
                summary={`I volunteered by reviewing new literature and guiding the library to purchase new books for its collection.`}
                weblink={"http://www.ebpl.org/"}
                />
            </>)}
        </>
    );
}

export default VolunteerExperience;