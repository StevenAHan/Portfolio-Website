import VolunteerBlock from "./VolunteerBlock";


const VolunteerExperience = () => {
    return (
        <>
            <h1 className="title" id="vol-section">Volunteer Experience:</h1>
            
            <VolunteerBlock name={"Raritan Bay Medical Center"} title={"ER Volunteer Nurse"} dates={"November 2019 - March 2020"} location={"Perth Amboy, NJ"}
            summary={"As a medical volunteer for the Emergency Room, I assisted the staff with managing patient comfort, visiting patients, and organizing supplies."}
            weblink={"https://www.hackensackmeridianhealth.org/en/locations/raritan-bay-medical-center"}
            />

            <VolunteerBlock name={"East Brunswick Huaxia Chinese School"} title={"Lead Volunteer"} dates={"October 2019 - March 2020"} location={"East Brunswick, NJ"}
            summary={"I performed critical teaching and administrative tasks; organized materials, events and activities; and trained and supervised junior volunteers."}
            weblink={"http://www.hxeb.org/"}
            />

            <VolunteerBlock name={"East Brunswick Public Library"} title={"Reviewer and Volunteer for EBPL ARC,"} dates={"September 2018 - May 2019"} location={"East Brunswick, NJ"}
            summary={"I reviewed new literature for the library and guided it to purchase new books for its collection."}
            weblink={"http://www.ebpl.org/"}
            />

        </>
    );
}

export default VolunteerExperience;