import "./css/header.css"
import titleImg from "./imgs/white-concrete-wall.jpg";

const Header = () => {
    return (
        <>
            {/* <img className="OpenerBackground" src={titleImg} alt="hi" /> */}
            <div className="OpenerContainer">
                <h1 className="Opener title">Hello! I am Steven Han,</h1>
                <h2 className="OpenerCaps">a student at NYU studying for a BS in Computer Science. I was a Bank of America Software Engineer Intern this summer and am currently a Course Assistant for the NYU Class: Introduction to Databases.</h2>
                <br />
                <div className="center-div">
                    <a href="https://github.com/StevenAHan" className="btn-gray-outline white-text" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> Github</a>
                </div>
            </div>
        </>
    );
}

export default Header;