import React from 'react';
import './style/Card.css';

function Card({ title, description, icon }) {
  return (
    <div className='card'>
      {icon && <div className='card-icon'>{icon}</div>}
      <h3 className='card-title'>{title}</h3>
      <p className='card-description'>{description}</p>
    </div>
  );
}

export default Card;
