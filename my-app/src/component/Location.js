import React from 'react';
import Footer from './Footer';
import GoToHomePage from './HomeButton';

const Location = () => {
  return (
    <section className='location'>
      <GoToHomePage />
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

export default Location