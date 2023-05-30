import "./css/navbar.css";

const Nav = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                <a href="" className="navbar-brand">Steven Han</a>
                </div>
                <div className="navbar-right">
                <a href="" className="navbar-link">About Me</a>
                <a href="" className="navbar-link">Education</a>
                <a href="" className="navbar-link">Work Experience</a>
                <a href="" className="navbar-link">Projects</a>
                <a href="" className="navbar-link">Contact Me</a>
                </div>
            </nav>
        </>
    );
}

export default Nav;