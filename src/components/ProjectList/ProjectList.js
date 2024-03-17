import React from "react";
import Project from "../Project/Project";
import HikingPortfolioImage from '../../../public/static/hiking-portfolio.png'
import MazeRunnerImage from '../../../public/static/MazeRunner.png'
import TodoImage from '../../../public/static/todo-app.png'

const MazeRunner = {
    'title': 'MAZE RUNNER',
    'picture': MazeRunnerImage,
    'infor': 'A Mouse-and-Cat webgame for fun',
    'tag': '#Java #SpringBoot',
    'link': 'https://maze-game-runner-921b462541d3.herokuapp.com/',
    'background_color': '#f5eade'
};
const HikingPortfolio = {
    'title': 'HIKING PORTFOLIO',
    'picture': HikingPortfolioImage,
    'infor': 'Platform for all hikers to share the love of walking in the wild.',
    'tag': '#Django #NoSql #GoogleMapAPI #Docker #AWS EC2',
    'link': 'http://ec2-54-234-52-36.compute-1.amazonaws.com:8080/hikers/login',
    'background_color': '#dbe7f1'
};
const Todo= {
    'title': 'Todo App',
    'picture': TodoImage,
    'infor': 'Todo App in React.',
    'tag': '#React #JS',
    'link': 'https://to-do-app-ten-tau.vercel.app/',
    'background_color': '#dea5a4'
}


export default function ProjectList() {
    return (
        <div>
            <Project project={MazeRunner} />
            <Project project={Todo} />
            <Project project={HikingPortfolio} />
        </div>
    )
}