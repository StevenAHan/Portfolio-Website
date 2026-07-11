import ProjectBlock from "./ProjectBlock";
import loveletter from "./imgs/loveletter.png";

const Projects = () => {
    return (
        <> 
            <h1 className="title" id="proj-section">Personal Projects</h1>

            <ProjectBlock title={"Crumbless"} dates={"Dec 2023 - May 2024"} 
                summary={`Created a full-stack application with NYU Professor Arfaoui’s guidance to reduce food waste for home cooks by formulating personalized dish recipes and meal plans based on user ingredients and preferences.

Leveraged Python Flask and ReactJS to enable a flexible, expandable framework for the web application.`}
                gitlink={"https://github.com/StevenAHan/Crumbless"}
                skillsUsed={["Python", "Flask", "React"]}
            />

            <ProjectBlock title={"Energy SPECTator"} dates={"Sept 2023"} 
                summary={`This project was created for the NYU Haqathon, a Hackathon that focuses on utilizing Quantum Computing to solve a real-world problem relating to sustainability. We created a web application that utilizes quantum algorithms combined with classical techniques to help push towards the development of sustainable, renewable energy and reduce carbon emissions.

We used variational quantum eigensolvers to strongly improve eigenvalue discovery and applied spectral graph techniques to identify renewable energy hotspots and cold spots for better energy distribution.`}
                gitlink={"https://github.com/NickyDCFP/hAQathon_team_tra5h"}
                skillsUsed={["Python", "CSS", "React", "Flask", "Qiskit", "Pandas"]}
                projImg={loveletter}
            />

            <ProjectBlock title={"Love Letter Game Simulator"} dates={"May 2022 - August 2023"} 
                summary={`Created a card game simulator designed for 2-4 players. The website enables users to play Love Letter, create accounts, track statistics, and join lobbies for asynchronous multiplayer gameplay.

Built with a React frontend and Express.js/Socket.io backend, with MongoDB storing game and user data.`}
                weblink={"https://loveletter.herokuapp.com"}
                gitlink={"https://github.com/StevenAHan/Love-Letter-Emulator-Public"}
                skillsUsed={["JavaScript", "CSS", "React", "Express.js", "Socket.io", "Bootstrap", "MongoDB"]}
                projImg={loveletter}
            />

            <ProjectBlock title={"Invest.me"} dates={"January 2023 - May 2023"} 
                summary={`Developed a customizable stock pricing tool that combines quantitative and qualitative data sources, including financials, ESG scores, congressional trades, and public sentiment.

Built with Flask and HTML/CSS/JS, the app lets users personalize investment evaluations and search S&P 500 companies for tailored market insights.`}
                gitlink={"https://github.com/StevenAHan/Invest.me"}
                skillsUsed={["Python", "Flask", "HTML", "CSS", "JavaScript"]}
            />

            <ProjectBlock title={"Steven's Minigames"} dates={"November 2022 - May 2023"} 
                summary={`Created a website hosting games and algorithmic solvers. The backend uses Flask, while C++ solvers power efficient gameplay logic for the 24 Game, Sudoku, and Discord Activity Spellcast.`}
                weblink={"https://stevens-minigames.herokuapp.com"}
                gitlink={"https://github.com/StevenAHan/Stevens-Minigames"}
                skillsUsed={["Python", "Flask", "HTML", "CSS", "Bootstrap", "C++", "Heroku"]}
            />

            <ProjectBlock title={"SoftSound"} dates={"June 2021 - June 2022"} 
                summary={`Built a calming mobile sound app for offline use with customizable timers and volume controls. The app was developed in Kotlin using Android Studio.`}
                gitlink={"https://github.com/StevenAHan/SoftSound"}
                skillsUsed={["Kotlin", "Android Studio"]}
            />
        </>
    );
}

export default Projects;