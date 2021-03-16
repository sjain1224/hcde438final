import React, { Component } from 'react';
import resumeData from '../resumeData';
import Modal from 'react-awesome-modal';

export default class Porfolio extends Component {

  state={
    modal:{}
  }

  closeModal = () => {
    this.setState({ modal:{} })
  }

  render() {
    const {modal} = this.state
    return (<section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1 style={{fontSize:24}}>Check Out Some of My Work.</h1>
          <p style={{fontSize:18, textAlign:'center'}}>Click on each picture to view the full picture and learn more!</p>
          <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio[0] && resumeData.portfolio[0].map((item, i)=>{
              return(
                <div key={i} className="columns portfolio-item">
                  <div className="item-wrap">
                    <div onClick={()=> this.setState({modal:item})} style={{cursor:'pointer'}}>
                      <img src={`${item.imgurl}`} className="item-img" alt={`${item.altText}`}/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5 style={{fontSize:16}}>{item.name}</h5>
                          <p style={{fontSize:12}}>{item.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>

      <Modal 
        visible={modal && modal.name} 
        effect="fadeInUp" 
        onClickAway={() => this.closeModal()}>
        <section style={{padding:40,textAlign:'center'}}>
          <h1 style={{fontSize:24, marginBottom:5}}>{modal.name}</h1>
          <p style={{fontSize:14}}><em>{modal.locationFull}</em></p>
          <p style={{fontSize:18,lineHeight:'20px',maxWidth:750,marginBottom:10}}>{modal.fullDescription}</p>
          <p style={{fontSize:14}}>Category: {modal.category}</p>
          <img className="modal-img" src={modal.imgurl} style={{maxHeight:500,display:'block',margin:'10px auto'}} alt={`${modal.altText}`}/>
        </section>
      </Modal>

  </section>);
  }
}
