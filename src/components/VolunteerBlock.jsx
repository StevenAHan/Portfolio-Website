
const VolunteerBlock = ({name, title, location, dates, summary, weblink}) => {
    return (
        <>
            <div className="proj-container">
                <h2 className="proj-title">{name} </h2>
                <h3 className="proj-years">{dates}</h3>
                <h3 className="proj-loc">{location}</h3>
                {title && <h2 className="proj-subtitle">{title}</h2> }
                <p>{summary}</p>
                <div className="links-container">
                    {weblink && <a className="link-link inner-btn" href={weblink} target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-handshake-angle link-img inner-img fa-xl"></i>
                        </a>}
                </div>
            </div>
        </>
    );
}

export default VolunteerBlock;