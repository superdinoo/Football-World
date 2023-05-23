import React from 'react';
import style from './TeamsCardStyle.module.css';
import { Link } from 'react-router-dom';

const TeamsCard = ({ name, crestUrl , id}) => {
  const teamLink= `/teams/${id}/matches`;
  return (
    <div className={style.TeamsCard}>
      <Link to={teamLink} className={style.TeamsCardButton}>
      <p className={style.cards}>{name}</p>
      <img src={crestUrl} alt='img' widht="60px" height="70px"/>
      </Link>
    </div>
  );
};
export default TeamsCard