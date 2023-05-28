import React from 'react';
import style from './LeagueCardStyle.module.css';
import { Link } from "react-router-dom";



const LeagueCard = ({ name, area, id }) => {
  const leagueLink = `/competitions/${id}/matches`;

  return (
  <Link to={leagueLink} className={style.link}>
  <div className={style.leagueCard}>
  <img src ='./img/real.jpeg' className={style.leagueCardButton}/>
  <h1 className={style.cards}>{name}</h1>
  <h2 className={style.cards}>{area}</h2>
  </div>
  </Link>
  );
  };
export default LeagueCard