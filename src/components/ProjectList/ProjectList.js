import React from "react";
import Project from "../Project/Project";
import HikingPortfolioImage from '../../../public/static/hiking-portfolio.png'
import MazeRunnerImage from '../../../public/static/MazeRunner.png'

const HikingPortfolio = {
    'title': 'HIKING PORTFOLIO',
    'picture': HikingPortfolioImage,
    'infor': 'Platform for all hikers to share the love of walking in the wild.',
    'tag': '#Django #NoSql #GoogleMapAPI #Docker #AWS EC2',
    'link': 'http://ec2-54-234-52-36.compute-1.amazonaws.com:8080/hikers/login',
    'background_color': '#dbe7f1'
};
const MazeRunner = {
    'title': 'MAZE RUNNER',
    'picture': MazeRunnerImage,
    'infor': 'A Mouse-and-Cat webgame for fun',
    'tag': '#Java #SpringBoot',
    'link': 'https://nameless-shelf-08577.herokuapp.com/',
    'background_color': '#f5eade'
};

export default function ProjectList() {
    return (
        <div>
            <Project project={HikingPortfolio} />
            <Project project={MazeRunner} />
        </div>
    )
}