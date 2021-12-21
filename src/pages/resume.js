import React from "react";
import NavBar from "../components/NavBar/NavBar";
import image from '../../public/static/resume.jpg'

const styles = {
    'display': 'block',
    'marginLeft': 'auto',
    'marginRight': 'auto',
    'width': '50%',
    'padding': '20px'
}

export default function Component() {
    return (
        <main>
            <NavBar />
            <img src={image} style={styles}></img>
        </main>
    )
}