import React from 'react'

import * as styles from './Project.module.css'


export default function Project({project}) {
    return (
        <div className={styles.center}>
        <a style={{ backgroundColor: project.background_color }} className={styles.linkBlock}>
            <div style={{ backgroundColor: '#dbr7f1' }} className={styles.projectDetails}>
                <img src={project.picture} className={styles.image}></img>
                <h2>{project.title}</h2>
                <p>{project.infor}</p>
                <p id={styles.tag}>{project.tag}</p>
                <a id={styles.link} href={project.link}>CHECK IT OUT!</a>
            </div>

        </a>
        </div>

    )
}