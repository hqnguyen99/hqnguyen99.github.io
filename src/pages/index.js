import * as React from "react"
import NavBar from '../components/NavBar/NavBar.js'
import Intro from "../components/Intro/Intro.js"
import * as styles from "../styles/global.module.css"
// markup
const IndexPage = () => {
  return (
    <main>
      <NavBar></NavBar>
      <Intro/>
    </main>
  )
}

export default IndexPage
