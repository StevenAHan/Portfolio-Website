import Resume from "./files/han_steven_resume.pdf";

const Contact = () => {
    function onResumeClick() {
        window.open(Resume);
    }

    return (
        <>
            <h1 className="title">Contact And Links: </h1>
            <a href="https://github.com/StevenAHan" className="contact-link" target="_blank" rel="noreferrer">Github</a>
            <a href="https://www.linkedin.com/in/steven-han-696b5b225/" className="contact-link" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:sahiagb@gmail.com?subject=Hello!" className="contact-link" target="_blank" rel="noreferrer">Email</a>
            <a onClick={() => onResumeClick()} className="contact-link" target="_blank" rel="noreferrer">Resume</a>

        </>
    );
}

export default Contact;