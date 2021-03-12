import React, { Component } from 'react';
import resumeData from '../resumeData';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'

const navItems = ['home', 'portfolio', 'about', 'contact']

export default class Header extends Component {

  state={
    showMobileMenu:false,
  }

  render() {
    const {showMobileMenu} = this.state
    const navClass = showMobileMenu ? 'nav' : 'nav hider'
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <div className="mobile-btn"
              onClick={()=>this.setState({showMobileMenu:!showMobileMenu})}>
            </div>
            {/* <div className="mobile-btn" href="#" title="Hide navigation">Hide navigation</div> */}
            <ul id="nav" className={navClass}>
              <Scrollspy items={navItems} currentClassName="current">
                {navItems.map((item,i)=>{
                  return <li key={i}><AnchorLink href={`#${item}`}>{capitalize(item)}</AnchorLink></li>
                })}
              </Scrollspy>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{resumeData.name}</h1>
              <h3>I am a {resumeData.role}.&nbsp;{resumeData.roleDescription}
              </h3>
              <hr/>
            </div>
          </div>

          <p className="scrolldown">
            <AnchorLink href="#portfolio"><i className="icon-down-circle"></i></AnchorLink>
          </p>

        </header>
      </React.Fragment>
    );
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}