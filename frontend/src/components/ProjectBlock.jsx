const ProjectBlock = ({title, dates, summary}) => {
    return (
        <>
            <h2 className="proj-title">{title}</h2>
            <h3 className="proj-years">{years}</h3>
            <p>{summary}</p>
        </>
    );
}

export default ProjectBlock;