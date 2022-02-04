import React from 'react';
import GoToLocation from './LocationButton';


  const Home = () => {

    return (
      <section className='homepage'>
        <div className="homepage__hero">
          <div className="homepage__hero-image"></div>
          <div className="homepage__hero-banner">
            <div className='homepage__hero-title'>
              <h1 className='homepage__hero-heading'> Modern Art Gallery</h1>
            </div>
            <div className='homepage__hero-text-button'>
              <p className='homepage__hero-sub-text'> The arts in the collection of the Modern Art Gallery all started 
                from a spark of inspiration. Will these pieces inspire you? Visit 
                us and find out.
              </p>
              <GoToLocation />
            </div>
          </div>
        </div>
        <div className="homepage__content">
          <article className="homepage__block1">
            <div className="homepage__content-image1"></div>
            <div className='homepage__content-info1'>
              <h2 className='homepage__content-sub-heading'>Your day at the gallery</h2>
              <p className='homepage__content-text'> Wander through our distinct collections and find new insights about 
                our artists. Dive into the details of their creative process.</p>
            </div>
          </article>
          <article className="homepage__block2">
            <div className="homepage__content-image2"></div>
            <div className="homepage__content-image3"></div>
            <div className='homepage__content-info2'>
              <h2 className='homepage__content-sub-heading'>Come &amp; be inspired</h2>  
              <p className='homepage__content-text'> We’re excited to welcome you to our gallery and see how our collections 
                influence you.</p>
            </div>
          </article>
          </div>
          <footer>
            <div className="homepage__footer">
              <h3 className='homepage__footer-heading'>Modern Art Gallery</h3>
              <p> The Modern Art Gallery is free to all visitors and open seven days a week 
                from 8am to 9pm. Find us at 99 King Street, Newport, USA.
              </p>
            </div>
          </footer>
      </section>
    )
  }

export default Home