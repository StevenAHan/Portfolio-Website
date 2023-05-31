import "./css/header.css"
import titleImg from "./imgs/homebackground.jpg";

const Header = () => {
    return (
        <>
            {/* <img className="OpenerBackground" src={titleImg} alt="hi" /> */}
            <div className="OpenerContainer">
                <h1 className="Opener title">Hello!</h1>
                <h2 className="OpenerCaps title">I am Steven Han, a student at NYU studying for a BS in Computer Science.</h2>
            </div>
        </>
    );
}

export default Header;