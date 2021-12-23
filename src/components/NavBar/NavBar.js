import * as React from "react"
import * as styles from './NavBar.module.css'
// styles
//links
const Name = 'John Nguyen'
const Home = {
    'text': 'Home',
    'link': '/'
}
const Resume= {
    'text': 'Resume',
    'link': '/resume'
}
const Work = {
    'text': 'Work',
    'link': '/work'
}
const Projects = {
    'text': 'Projects',
    'link': '/projects'
}
const NavBar = () => {
    return (
        <div className="flex-container">
            <div className={styles.navBar}><a>{Name}</a></div>
            <div className={styles.navBar}>
                <ul >
                    <li ><a href={Projects.link}>{Projects.text}</a></li>
                    <li ><a href={Resume.link}>{Resume.text}</a></li>
                    <li ><a href={Home.link}>{Home.text}</a></li>

                </ul>
            </div>
        </div>
    )

}
export default NavBar;