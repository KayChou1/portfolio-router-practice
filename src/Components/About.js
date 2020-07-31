import React from 'react';
import HeadShotPicture1 from '../Assets/kaya.png';

function About(){
    return(
        <>
            <p>
                About Me!
            </p>
        
            <img className="Headshot" src={HeadShotPicture1} alt="Headshot" ></img>
        </>
    )

}

export default About;