import React from 'react';
import Footer from './Footer';

class Location extends React.Component {

  render() {
    return (
      <section className='location'>
        <a href='fwf'>
          <div className='location__icon'>
            <svg className='location__svg' width="10" height="24" xmlns="http://www.w3.org/2000/svg"><path stroke="#FFF" fill="none" d="M9 24 1 12 9 0"/></svg>  
          </div>
          <button className='location__button'>Back to home</button>
        </a>
        <div class="location__image"></div>
        <div className="location__content">
          <article className='location__content-first'>
            <h2 className='location__sub-heading'>Our Location</h2>  
            <div className='location__address'>
              <h3 className='location__street'>99 King Street</h3>
              <p>Newport<br/> 
              RI 02840<br/> 
              United States of America</p>
              <p>  Our newly opened gallery is located near the Edward King House on 99 King 
                  Street, the Modern Art Gallery is free to all visitors and open seven days 
                  a week from 8am to 9pm.</p>
            </div>
          </article>
        </div> 
        <Footer />
      </section>
      
    )
  }
}

export default Location