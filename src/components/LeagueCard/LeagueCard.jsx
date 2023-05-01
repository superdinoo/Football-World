import React from 'react';
import style from './LeagueCard.module.css';


const LeagueCard = ({ name, area }) => {
  return (
    <div className={style.leagueCard}>
      <a href='/' className={style.leagueCardButton}>
      <img src='./img/real.jpeg' alt='Наш логотип' />
      </a>
      <p>{name}</p>
      <p>{area}</p>
      </div>
  );
};

export default LeagueCard;
