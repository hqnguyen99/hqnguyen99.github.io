import React from "react";
import NavBar from "../components/NavBar/NavBar";
import image from '../../public/static/resume.jpg'
import * as styles from '../styles/global.module.css'
import {Helmet} from 'react-helmet'
export default function Component() {
    return (
        <main>
            <div className="application">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Resume</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
            </div>
            <NavBar />
            <img src={image} className={styles.image}></img>
        </main>
    )
}