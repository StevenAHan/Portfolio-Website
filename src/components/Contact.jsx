import Resume from "./files/resume_steven_han.pdf";

const Contact = () => {
    function onResumeClick() {
        window.open(Resume);
    }

    return (
        <>
            <h1 className="title" id="contact-section">Contact And Links: </h1>
            <div className="contact-container">
                <a href="https://github.com/StevenAHan" className="contact-link btn-blue-outline" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> Github</a>
                <a href="https://www.linkedin.com/in/steven-han-696b5b225/" className="contact-link btn-blue-outline" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i> LinkedIn</a>
                <a href="mailto:sahiagb@gmail.com?subject=Hello!" className="contact-link btn-blue-outline" target="_blank" rel="noreferrer"><i className="fa fa-envelope" aria-hidden="true"></i> Email</a>
                <a onClick={() => onResumeClick()} className="contact-link btn-blue-outline" target="_blank" rel="noreferrer"><i className="fa-solid fa-file"></i> Resume</a>
            </div>
        </>
    );
}

export default Contact;