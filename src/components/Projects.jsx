import ProjectBlock from "./ProjectBlock";
import loveletter from "./imgs/loveletter.png";

const Projects = () => {
    return (
        <> 
            <h1 className="title" id="proj-section">Personal Projects:</h1>

            <ProjectBlock title={"Love Letter Game Simulator"} dates={"May 2022 - Present"} 
                summary={"Created a card game simulator designed to be played by 2-4 players. The website is built with a ReactJS frontend using a custom Bootstrap theme and a Express.js with Socket.io backend, enabling multiplayer support. MongoDB is used to store game and user data."}
                weblink={"https://loveletter.herokuapp.com"}
                gitlink={"https://github.com/StevenAHan/Love-Letter-Emulator-Public"}
                skillsUsed={["Javascript", "CSS", "React", "Express.js", "Socket.io", "Bootstrap","MongoDB"]}
                projImg={loveletter}
            />

            <ProjectBlock title={"Invest.me"} dates={"January 2023 - May 2023"} 
                summary={"I developed with a team of 4 people a customizable stock pricing tool, which uses both quantitative and qualitative data from numerous sources, including company financials, ESG scores, congressional trades, and public sentiment to evaluate S&P 500 companies. Our product utilizes web scraping, data analytics, and a linear regression ML model to predict stock prices Users can personalize results by inputting their own custom information and preferences."}
                gitlink={"https://github.com/StevenAHan/Invest.me"}
                skillsUsed={["Python", "Flask", "HTML", "CSS", "Javascript"]}

            />

            <ProjectBlock title={"Steven's Minigames"} dates={"November 2022 - May 2023"} 
                summary={"Created a website that hosted solvers I created using Python Flask. The solvers were created with C++ to be more efficient. Frontend created with HTML/CSS/JS and Bootstrap. Currently, I have created solvers for the popular 24 Game, Sudoku, and the Discord Activity Spellcast"}
                weblink={"https://stevens-minigames.herokuapp.com"}
                gitlink={"https://github.com/StevenAHan/Stevens-Minigames"}
                skillsUsed={["Python", "Flask", "HTML", "CSS", "Bootstrap", "C++", "Heroku"]}
            />

            <ProjectBlock title={"SoftSound"} dates={"June 2021 - June 2022"} 
                summary={"Created a mobile application based on Kotlin that provides a stree-free space for people by playing calming sounds. Works offline, and enables users to customize the timing and volume of the sounds."}
                // weblink={"https://stevens-minigames.herokuapp.com"}
                gitlink={"https://github.com/StevenAHan/SoftSound"}
                skillsUsed={["Kotlin", "Android Studio"]}
            />
        </>
    );
}

export default Projects;