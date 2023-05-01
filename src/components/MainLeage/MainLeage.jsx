import React from 'react';
import style from './MainLeage.module.css';
import BordsLeft from '../BordsLeft';
import BordsRight from '../BordsRight';
import League from '../League';


const MainLeage = () => {
    return (
        <div className={style.mainleage}>
        <BordsLeft />
        <League />
        <BordsRight />
         
        </div>
        )

    }
export default MainLeage