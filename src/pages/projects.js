import * as React from "react"
import NavBar from "../components/NavBar/NavBar"
import ProjectList from "../components/ProjectList/ProjectList"
import * as styles from '../styles/global.module.css'

const Github={
    'text': 'Check my Github for more!',
    'link': 'https://github.com/hqnguyen99'
}


export default function Component() {
    return (
        <main>
            <NavBar />
            <ProjectList />
            
            <div className={styles.linkWrapper}>
            <a href={Github.link} className={`${styles.link} ${styles.effect}`}>{Github.text}</a>
            </div>
            
        </main>

    )
}