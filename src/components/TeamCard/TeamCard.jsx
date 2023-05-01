import React from 'react';
import './TeamCard.css';

const TeamCard = () => {
  return (
    <div className='teamCard'>
      <a href='/' className='teamCardButton'>
        <img src='./img/real.jpeg' alt='Наш логотип' />
      </a>
      <p>Реал Мадрид</p>
      <p>Испания</p>
    </div>
  );
};
export default TeamCard;
