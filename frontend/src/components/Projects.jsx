import ProjectBlock from "./ProjectBlock";

const Projects = () => {
    return (
        <> 
            <h1 className="title" id="proj-section">Personal Projects:</h1>

            <ProjectBlock title={"Love Letter Game Simulator"} dates={"May 2022 - Present"} 
                summary={"Created a card game simulator using C++, designed to be played by 2-4 players. The website is built with a ReactJS frontend using a custom Bootstrap theme and a Express with Socket.io backend, enabling multiplayer support. MongoDB is used to store game and user data."}
                weblink={"https://loveletter.herokuapp.com"}
                // gitlink={"https://github.com/StevenAHan"}
            />

            <ProjectBlock title={"Steven's Minigames"} dates={"November 2022 - May 2023"} 
                summary={"Created a website that hosted solvers I created using Python Flask. The solvers were created with C++ to be more efficient. Frontend created with HTML/CSS/JS and Bootstrap. Currently, I have created solvers for the popular 24 Game, Sudoku, and the Discord Activity Spellcast"}
                weblink={"https://stevens-minigames.herokuapp.com"}
                gitlink={"https://github.com/StevenAHan/Stevens-Minigames"}
            />

            <ProjectBlock title={"SoftSound"} dates={"June 2021 - June 2022"} 
                summary={"Created a mobile application based on Kotlin that provides a stree-free space for people by playing calming sounds. Works offline, and enables users to customize the timing and volume of the sounds."}
                // weblink={"https://stevens-minigames.herokuapp.com"}
                gitlink={"https://github.com/StevenAHan/SoftSound"}
            />
        </>
    );
}

export default Projects;