import "./css/navbar.css";

const Nav = ({aboutRef, educationRef, workRef, projRef, contactRef}) => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                <a href="" className="navbar-brand">Steven Han</a>
                </div>
                <div className="navbar-right">
                {/* <a onClick={() => aboutRef.current?.scrollIntoView({behavior: 'smooth'})} className="navbar-link">About Me</a> */}
                <a onClick={() => educationRef.current?.scrollIntoView({behavior: 'smooth'})} className="navbar-link">Education</a>
                <a onClick={() => workRef.current?.scrollIntoView({behavior: 'smooth'})} className="navbar-link">Work Experience</a>
                <a onClick={() => projRef.current?.scrollIntoView({behavior: 'smooth'})} className="navbar-link">Projects</a>
                <a onClick={() => contactRef.current?.scrollIntoView({behavior: 'smooth'})} className="navbar-link">Contact Me</a>
                </div>
            </nav>
        </>
    );
}

export default Nav;