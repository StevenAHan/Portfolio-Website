import ProjectBlock from "./ProjectBlock";
import loveletter from "./imgs/loveletter.png";

const Projects = () => {
    return (
        <> 
            <h1 className="title" id="proj-section">Personal Projects:</h1>

            <ProjectBlock title={"Energy SPECTator"} dates={"Sept 2023"} 
                summary={`Project was created for the NYU Haqathon, a Hackathon that focuses on utilizing Quantum Computing to 
                solve a real-world problem relating to sustainability. We created a web application that utilizes quantum algorithms 
                combined with classical techniques to help push towards the development of sustainable, 
                renewable energy and reduce carbon emissions. We will be using variational quantum eigensolvers to 
                greatly increase the efficiency of finding eigenvalues. We will then use these eigenvalues to proboabilistically 
                find cliques and thus find renewable energy hotspots and cold spots to encourage the redistribution of energy, 
                as was mentioned as a major issue during NYC Climate Week 2023.`}
                gitlink={"https://github.com/NickyDCFP/hAQathon_team_tra5h"}
                skillsUsed={["JS", "Python", "CSS", "React", "Flask", "Qiskit", "Pandas"]}
                projImg={loveletter}
            />

            <ProjectBlock title={"Love Letter Game Simulator"} dates={"May 2022 - August 2023"} 
                summary={`Created a card game simulator designed to be played by 2-4 players. The website enables users to play the 
                card game, "Love Letter." Users will create an account to track their statistics and play with others by joining their 
                lobbies. The website features real-time updates for the game and permanently keeps track of the game states, enabling 
                asyncronous playing. 
                The website is built with a ReactJS frontend using a custom Bootstrap theme and a Express.js with Socket.io backend, 
                enabling multiplayer support. MongoDB is used to store game and user data.`}
                weblink={"https://loveletter.herokuapp.com"}
                gitlink={"https://github.com/StevenAHan/Love-Letter-Emulator-Public"}
                skillsUsed={["Javascript", "CSS", "React", "Express.js", "Socket.io", "Bootstrap","MongoDB"]}
                projImg={loveletter}
            />

            <ProjectBlock title={"Invest.me"} dates={"January 2023 - May 2023"} 
                summary={`I developed with a team of 4 people a customizable stock pricing tool, which uses both quantitative and 
                qualitative data from numerous sources, including company financials, ESG scores, congressional trades, and public 
                sentiment to evaluate S&P 500 companies. Our product utilizes web scraping, data analytics, and a linear regression ML 
                model to predict stock prices. Users can personalize results by inputting their own custom information and preferences.
                Furthermore, if they wish, users can also individually search for a particular company that is in the S&P 500, and get 
                relevant data and statistics for that company. The product is built with a Python Flask backend and HTML/CSS/JS frontend.`}
                gitlink={"https://github.com/StevenAHan/Invest.me"}
                skillsUsed={["Python", "Flask", "HTML", "CSS", "Javascript"]}

            />

            <ProjectBlock title={"Steven's Minigames"} dates={"November 2022 - May 2023"} 
                summary={`Created a website that hosts games and solvers I created. The backend was created with Flask, and the solvers 
                were created with C++ to be more efficient. The frontend was created with HTML/CSS/JS and Bootstrap. Currently, I have 
                created solvers for the popular 24 Game, Sudoku, and the Discord Activity Spellcast. These solvers utilize algorithmic 
                techniques such as backtracking, recursion, and dynamic programming.`}
                weblink={"https://stevens-minigames.herokuapp.com"}
                gitlink={"https://github.com/StevenAHan/Stevens-Minigames"}
                skillsUsed={["Python", "Flask", "HTML", "CSS", "Bootstrap", "C++", "Heroku"]}
            />

            <ProjectBlock title={"SoftSound"} dates={"June 2021 - June 2022"} 
                summary={`Created a mobile application that provides a stree-free space for people by playing calming 
                sounds. Works offline, and enables users to customize the timing and volume of the sounds. The application enables users
                to customize the volume and timing of the sounds, and also features a timer that can be used to play the sounds for a
                certain period of time. The application is built with Kotlin and Android Studio.`}
                // weblink={"https://stevens-minigames.herokuapp.com"}
                gitlink={"https://github.com/StevenAHan/SoftSound"}
                skillsUsed={["Kotlin", "Android Studio"]}
            />
        </>
    );
}

export default Projects;