import React from 'react';
import './mobile.css';
function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi-rr-delete"></i>
      </div>
      <div className="mobile-options">
      <div className="mobile-option">
        <a href="#project">
        <i class="fi-rr-briefcase option-icon"></i>Projects
        </a>
      </div>
      <div className="mobile-option">
      <a href="#skills">
      <i class="fi-rr-laptop option-icon"></i>Skills
      </a>
    </div>
    <div className="mobile-option">
    <a href="#education">
    <i class="fi-rr-graduation-cap option-icon"></i>Education
    </a>
  </div>
  <div className="mobile-option">
  <a href="#contact">
  <i class="fi-rr-user option-icon"></i>Contact
  </a>
</div>
      
      </div>
    </div>
  );
}

export default Mobile;
