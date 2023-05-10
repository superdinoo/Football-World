import React from 'react';
import BordsLeft from '../BordsLeft';
import BordsRight from '../BordsRight';
import style from './MainLeageCalendar.module.css';

const MainLeageCalendar = () => {
  return (
    <div className={style.mainleage}>
      <BordsLeft />
    
      <BordsRight />
    </div>
  );
};

export default MainLeageCalendar;
