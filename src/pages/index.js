import * as React from "react"
import NavBar from '../components/NavBar/NavBar.js'
import Intro from "../components/Intro/Intro.js"
import * as styles from "../styles/global.module.css"
import {Helmet} from 'react-helmet'
// markup
const IndexPage = () => {
  return (
    <main>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>John Nguyen</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>
      <NavBar></NavBar>
      <Intro/>
    </main>
  )
}

export default IndexPage
