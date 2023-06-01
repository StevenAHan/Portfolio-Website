import "./css/header.css"
import titleImg from "./imgs/homebackground.jpg";

const Header = () => {
    return (
        <>
            {/* <img className="OpenerBackground" src={titleImg} alt="hi" /> */}
            <div className="OpenerContainer">
                <h1 className="Opener title">Hello!</h1>
                <h2 className="OpenerCaps title">I am Steven Han, a student at NYU studying for a BS in Computer Science.</h2>
                <br />
                <br />
                <div className="center-div">
                    <a href="https://github.com/StevenAHan" className="btn-blue-outline mx-1 white-text" target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
        </>
    );
}

export default Header;