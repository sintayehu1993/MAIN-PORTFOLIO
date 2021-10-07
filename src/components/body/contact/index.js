import React from 'react'
import  "./contact.css"
import Separator from '../../common/separator'; 
import SocialContact from '../../common/social-contact'
function Contact() {
    return (
        <div>
        <Separator />
        <div className="contact">
            <label className="section-title">Contact</label>
            <div className= "contact-container">
            <div className="contact-left">
            <SocialContact />
            </div>
            <div className="download">
                <a download href={require('../../../assets/icons/Resume.pdf').default}> 
            <i class='fi-rr-cloud-download download-icon' />
                    Download Resume
                </a>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Contact
