import React from "react";
import { useNavigate } from 'react-router-dom';

const GoToHomePage = props => {
  const navigate = useNavigate();

  const handleClickHomePage = () => {
    navigate('/')
  }

  return (
    <div className='location__btn'>
      <div className='location__icon'>
        <svg className='location__svg' width="10" height="24" xmlns="http://www.w3.org/2000/svg"onClick={handleClickHomePage}><path stroke="#FFF" fill="none" d="M9 24 1 12 9 0"/></svg>  
      </div>
      <button className='location__button'onClick={handleClickHomePage}>{props.label}Back to home</button>
    </div>
  )
}

export default GoToHomePage