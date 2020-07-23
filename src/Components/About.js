import React from 'react';
import HeadShotPicture from '../Assets/kaya1.jpg';

function About(){
    return(
        <>
            <p>
                About Me!
            </p>
            <img src={HeadShotPicture} alt="Headshot" ></img>
        </>
    )

}

export default About;