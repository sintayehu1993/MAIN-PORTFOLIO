import React from 'react'
import "./about.css"
import myPicture from './aboutMeImag.JPG'
import SocialContact from '../../common/social-contact/index'
function About() {
    return (
        <div className="about">
           <div className="about-top">
           <div className="about-info">I am <span className="info-intro">A SOFTWARE ENGINEER WHO LOVES SOLVING PROBLEMS. </span><br /> Specializing in JavaScript,NodeJS React/Redux, PostgreSQL and HTML/CSS. 
           <br /> I'm always looking to improve my skills, whether that's adding features to my existing projects, developing new ones from scratch, or learning a new language/library/framework.</div>
           <div className="about-photo">
           <img alt="" className="my-picture" src={myPicture}></img>
           </div>
           </div>
           <SocialContact />
        </div>
    )
}

export default About
