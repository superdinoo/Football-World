import React from 'react';
import style from './Footerstyle.module.css' ;

const Footer = () => {
    return (
    <div className={style.footer}>
    <p className={style.footerTextQ}>Football World- уникальный сайт футбольной статистики.</p>
    <p className={style.footerTextW}>Компания © Football World. Все права защищены.</p>
    <p className={style.footerTextE}>г.Ульяновск</p>
    </div>

)

}
export default Footer