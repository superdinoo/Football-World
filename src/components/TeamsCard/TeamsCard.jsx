import React from 'react';
import style from './TeamsCardStyle.module.css';

const TeamsCard = () => {
  return (
    <div className={style.teamCard}>
      <a href='/' className={style.teamCardButton}>
        <img src='./img/real.jpeg' alt='Наш логотип' />
      </a>
      <p>Реал Мадрид</p>
      <p>Испания</p>
    </div>
  );
};
export default TeamsCard;