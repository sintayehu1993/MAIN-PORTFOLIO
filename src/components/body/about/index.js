import React from 'react'
import "./about.css"
import myPicture from './aboutMeImag.JPG'
import SocialContact from '../../common/social-contact/index'
import Separator from '../../common/separator'; 
function About() {
    return (
        <div className="about">
        <Separator />
        <label className="section-title">About</label>
           <div className="about-top">
           <div className="about-info">I am a <span className="info-intro">SOFTWARE ENGINEER </span>specializing in JavaScript, NodeJS, React/Redux, PostgreSQL, HTML/CSS & more. 
           <br /> I'm always finding ways to improve my skills, whether that's adding features to my existing projects, developing new ones from scratch, or learning a new language/library/framework.</div>
           <div className="about-photo">
           <img alt="" className="my-picture" src={myPicture}></img>
           </div>
           </div>
           <SocialContact />
        </div>
    )
}

//I'm always looking to improve my skills, whether that's adding features to my existing projects, developing new ones from scratch, or learning a new language/library/framework

export default About
