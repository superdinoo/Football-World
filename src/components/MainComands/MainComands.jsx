import React from 'react';
import style from './MainComands.module.css';
import BordsLeft from '../BordsLeft';
import BordsRight from '../BordsRight';
import Centr from '../Centr';

const MainComands = () => {
    return (
        <div className={style.mainleage}>
        <BordsLeft />
        <Centr />
        <BordsRight />
         
        </div>
        )

    }
export default MainComands