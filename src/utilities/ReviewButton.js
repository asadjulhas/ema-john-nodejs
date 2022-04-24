import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ReviewButton = () => {
  let navigate = useNavigate();
  const reviewOrder = () => {
    navigate('/order')
  }
  return (
    <div>
       <button onClick={reviewOrder} className='review_order'>Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
    </div>
  );
};

export default ReviewButton;