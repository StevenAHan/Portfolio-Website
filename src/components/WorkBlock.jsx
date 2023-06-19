

const WorkBlock = ({name, title, location, dates, summary, weblink, logo}) => {
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
                        {logo && <img src={logo} alt="nop" className="work-logo"/>}
                        </a>}
                </div>
            </div>
        </>
    );
}

export default WorkBlock;