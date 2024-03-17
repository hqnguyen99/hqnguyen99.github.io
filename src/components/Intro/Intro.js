import React from 'react';
import Typical from 'react-typical'
import * as styles from './Intro.module.css'
import { useState } from 'react';

const Intro = () => {
    const [render, setRender] = useState(false);
    var intro= "Hi there! I'm John- Sofware Developer, Web Developer & a human being."
    const work = " Currently work as Software Developer Co-op at WorkSafe BC. "
    const study= " New Grad CS Student at SFU, Canada."
    //steps= {['Hi there!',200, "I'm John - Sofware Developer, Web Developer and CS student at SFU", 200]}
    setTimeout(function () {
        setRender(true)
    }, 5000)
    return (
        <div>
        <Typical className={styles.intro}
            steps={[intro]}
            wrapper="p" />
        {render &&<p className={styles.work}>{work}</p>}
        {render &&<p className={styles.study}>{study}</p>}
        </div>
    )
}

export default Intro;