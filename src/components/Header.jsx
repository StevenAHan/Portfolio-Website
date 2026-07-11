import "./css/header.css"
import titleImg from "./imgs/white-concrete-wall.jpg";

const Header = () => {
    return (
        <div className="OpenerContainer">
            <section className="hero-panel">
                <p className="eyebrow">Software Engineer III at JP Morgan Chase</p>
                <h1 className="Opener">Hello! I am Steven Han.</h1>
                <p className="hero-copy">I build enterprise financial systems, modern web applications, and scalable backend services. My focus is on delivering resilient software and improving workflows for large-scale teams.</p>
                <div className="hero-actions center-div">
                    <a href="https://github.com/StevenAHan" className="btn-gray-outline" target="_blank" rel="noreferrer">Github</a>
                </div>
            </section>
        </div>
    );
}

export default Header;