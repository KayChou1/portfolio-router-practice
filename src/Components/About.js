import React from 'react';
import HeadShotPicture1 from '../Assets/kaya.png';

function About(){
    return(
        <>
            <p>
                About Me!
            </p>

            <p>I am currently a student studying Software Engineering and Computer Programming aspiring to be a Full Stack Developer. 
                I have previous college experience studying Business Administration. 
                I am passionate about researching and learning new things. Technology is always innovating I am excited to be a part of it. 
                I look forward to strengthening my developing skills. </p>
        
            <img className="Headshot" src={HeadShotPicture1} alt="Headshot" ></img>
        </>
    )

}

export default About;