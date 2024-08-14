import "./css/header.css"
import titleImg from "./imgs/white-concrete-wall.jpg";

const Header = () => {
    return (
        <>
            {/* <img className="OpenerBackground" src={titleImg} alt="hi" /> */}
            <div className="OpenerContainer">
                <h1 className="Opener title">Hello! I am Steven Han,</h1>
                <h2 className="OpenerCaps">a current full time software engineer at Bank of America. I recently graduated Summa Cum Laude from New York University with a Bachelor of Science in Computer Science and a minor in Mathematics.</h2>
                <br />
                <div className="center-div">
                    <a href="https://github.com/StevenAHan" className="btn-gray-outline white-text" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> Github</a>
                </div>
            </div>
        </>
    );
}

export default Header;