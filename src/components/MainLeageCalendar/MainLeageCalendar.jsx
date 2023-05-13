import React , { Fragment, useState, useEffect } from 'react';
import BordsLeft from '../BordsLeft';
import TableComp from '../TableComp';
import BordsRight from '../BordsRight';
import style from './MainLeageCalendar.module.css';


const MainLeageCalendar = () => {
  return (
    <div className={style.mainleage}>
      <BordsLeft />
      <TableComp />
      <BordsRight />
    </div>
  );
};

export default MainLeageCalendar;
