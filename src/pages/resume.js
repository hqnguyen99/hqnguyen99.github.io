import React from "react";
import NavBar from "../components/NavBar/NavBar";
import image from '../../public/static/resume.jpg'
import * as styles from '../styles/global.module.css'

export default function Component() {
    return (
        <main>
            <NavBar />
            <img src={image} className={styles.image}></img>
        </main>
    )
}