import "./css/header.css"
import titleImg from "./imgs/homebackground.jpg";

const Header = () => {
    return (
        <>
            {/* <img className="OpenerBackground" src={titleImg} alt="hi" /> */}
            <div className="OpenerContainer">
                <h1 className="Opener title">Hello! I am Steven Han</h1>
                <h2 className="OpenerCaps title">A student at NYU studying for a BS in Computer Science. I am currently a software engineer intern at Bank of America.</h2>
                <br />
                <div className="center-div">
                    <a href="https://github.com/StevenAHan" className="btn-blue-outline mx-1 white-text" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> Github</a>
                </div>
            </div>
        </>
    );
}

export default Header;