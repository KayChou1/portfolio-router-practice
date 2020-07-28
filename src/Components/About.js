import React from 'react';
import HeadShotPicture from '../Assets/kaya1.jpg';
import HeadShotPicture1 from '../Assets/kaya.png';

function About(){
    return(
        <>
            <p>
                About Me!
            </p>
            <img className="Headshot" src={HeadShotPicture} alt="Headshot" ></img>
            <img className="Headshot" src={HeadShotPicture1} alt="Headshot" ></img>
        </>
    )

}

export default About;