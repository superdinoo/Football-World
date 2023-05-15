import React from 'react';
import style from './LeagueCardStyle.module.css';


const LeagueCard = ({ name, area }) => {
  return (
  <div className={style.LeagueCard}>
  <img src ='./img/real.jpeg' className={style.LeagueCardButton}/>
  <h1 className={style.cards}>{name}</h1>
  <h2 className={style.cards}>{area}</h2>
  </div>
  );
  };
export default LeagueCard