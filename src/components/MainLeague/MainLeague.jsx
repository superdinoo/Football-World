import React from 'react';
import BordsLeft from '../BordsLeft';
import BordsRight from '../BordsRight';
import style from './MainLeague.module.css';
import LeaguesList from '../LeaguesList';

const MainLeague = ({ligs}) => {
  return (
    <div className={style.mainleage}>
      <BordsLeft />
      <LeaguesList ligs={ligs}/>
      <BordsRight />
    </div>
  );
};

export default MainLeague;
