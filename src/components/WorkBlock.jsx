

const WorkBlock = ({name, title, location, dates, summary, weblink, logo, positions}) => {
    return (
        <>
            <div className="proj-container">
                <div className="proj-header">
                    <div className="proj-head-left">
                        <h2 className="proj-title">{name}</h2>
                        {!positions && title && <h3 className="proj-subtitle">{title}</h3> }
                    </div>
                    <div className="proj-meta">
                        {!positions && dates && <span className="proj-years">{dates}</span>}
                        <span className="proj-loc">{location}</span>
                    </div>
                </div>
                {positions ? (
                    <div className="work-positions">
                        {positions.map((pos, index) => (
                            <div key={index} className="work-position">
                                <div className="proj-header work-position-header">
                                    <div className="proj-head-left">
                                        <h3 className="proj-subtitle">{pos.title}</h3>
                                    </div>
                                    <div className="proj-meta">
                                        <span className="proj-years">{pos.dates}</span>
                                    </div>
                                </div>
                                <p>{pos.summary}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>{summary}</p>
                )}
                {positions && summary && <p>{summary}</p>}
                <div className="links-container">
                    {weblink && <a className="link-link inner-btn" href={weblink} target="_blank" rel="noreferrer">
                        {logo && <img src={logo} alt={`${name} logo`} className="work-logo"/>}
                        <span className="link-label">Visit company site</span>
                        </a>}
                </div>
            </div>
        </>
    );
}

export default WorkBlock;