import React from 'react';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";

class Home extends React.Component {
  // let navigate = useNavigate();
  // function handleClick() {
  //   navigate('/location')
  // }

  render() {
    return (
      <section className='homepage'>
        <div className="homepage__hero">
          <div className="homepage__hero-image"></div>
          <div className="homepage__hero-banner">
            <h1 className='homepage__hero-heading'> Modern Art Gallery</h1>
            <p className='homepage__hero-sub-text'> The arts in the collection of the Modern Art Gallery all started 
              from a spark of inspiration. Will these pieces inspire you? Visit 
              us and find out.
            </p>
            <a href='ttt'>
              <button className='homepage__hero-button'>Our location</button>
              <div className='homepage__hero-icon'>
                <svg className='homepage__hero-svg' width="10" height="24" xmlns="http://www.w3.org/2000/svg"><path stroke="#FFF" fill="none" d="m1 0 8 12-8 12"/></svg>  
              </div>
            </a>
          </div>
        </div>
        <div className="homepage__content">
          <article className='homepage__content-first'>
            <div className="homepage__content-image1"></div>
            <h2 className='homepage__sub-heading'>Your day at the gallery</h2>
            <p> Wander through our distinct collections and find new insights about 
              our artists. Dive into the details of their creative process.</p>
            <div className="homepage__content-image2"></div>
            <div className="homepage__content-image3"></div>
          </article>
          <article className='homepage__content-second'>
            <h2 className='homepage__sub-heading'>Come &amp; be inspired</h2>  
            <p> We’re excited to welcome you to our gallery and see how our collections 
              influence you.</p>
          </article>
        </div>
        <Footer />
      </section>
      
    )
  }
}

export default Home