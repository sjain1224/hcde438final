import React, { Component } from 'react';
import resumeData from '../resumeData';

export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead" style={{color:'white'}}>
                Looking for some awesome pictures from your next event or new photos to decorate your place? Contact me!
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in:&nbsp;<a target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/in/${resumeData.linkedinId}`}>{resumeData.linkedinId}</a>
                </h4>
                <h4>Email:&nbsp;<a target="_blank" rel="noopener noreferrer" href={`mailto:${resumeData.email}`}>{resumeData.email}</a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
