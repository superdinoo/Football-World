import React from 'react';
import style from './Footerstyle.module.css' ;

const Footer = () => {
    return (
    <div className={style.footer}>
    <p className={style.footerText}>Football World- уникальный сайт футбольной статистики.</p>
    <p className={style.footerText}>Компания © Football World. Все права защищены.</p>
    <p className={style.footerText}>г.Ульяновск</p>
    </div>

)

}
export default Footer