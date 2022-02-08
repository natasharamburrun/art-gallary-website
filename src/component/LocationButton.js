import React from "react";
import { useNavigate } from 'react-router-dom';

const GoToLocation = props => {
  const navigate = useNavigate();

  const handleClickLocation = () => {
    navigate('/location')
    window.scrollTo(0, 0);
  }

  return (
    <div className='homepage__hero-btn'>
      <button className='homepage__hero-button' onClick={handleClickLocation}>{props.label}Our location</button>
      <div className='homepage__hero-icon'>
        <svg className='homepage__hero-svg' width="10" height="24" xmlns="http://www.w3.org/2000/svg" onClick={handleClickLocation}>{props.label}<path stroke="#FFF" fill="none" d="m1 0 8 12-8 12"/></svg>  
      </div>
    </div>
  )
}

export default GoToLocation