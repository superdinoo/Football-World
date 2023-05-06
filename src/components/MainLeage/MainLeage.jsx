import React from 'react';

import LeaguesList from '../LeaguesList';
import BordsLeft from '../BordsLeft';
import BordsRight from '../BordsRight';
import style from './MainLeage.module.css';

const MainLeage = ({ ligs }) => {
  return (
    <div className={style.mainleage}>
      <BordsLeft />
      <LeaguesList ligs={ligs} />
      <BordsRight />
    </div>
  );
};

export default MainLeage;
