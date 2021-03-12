import React, { Component } from 'react';
import resumeData from '../resumeData';
import profilePic from '../profilepic.jpg'

export default class About extends Component {
  render() {
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic" src={profilePic} alt="Siddhant Jain" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
                  {resumeData.aboutme}
               </p>
            </div>
         </div>
      </section>
    );
  }
}
