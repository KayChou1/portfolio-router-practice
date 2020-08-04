import React from 'react';
import HeadShotPicture1 from '../Assets/kaya.png';

function About(){
    return(
        <>
            <p>
            Hello, Im Kaya!
            </p>

            <p>                           
                Im a Software Engineer and Computer Programmer. Soon to be a Full Stack Developer. 
                Im always working on my Computer Programming skills to stay up to date with innovating technology.
                I have previous college experience studying Business Administration. 
                I am passionate about researching and learning new things. Technology is always innovating I am excited to be a part of it. 
                I look forward to strengthening my developing skills. </p>
        
            <img className="Headshot" src={HeadShotPicture1} alt="Headshot" ></img>
        </>
    )

}

export default About;