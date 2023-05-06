import React from 'react';
import style from './Headerstyle.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.headerWrap}>
        <div className={style.headerMain}>
          <div className={style.img}>
            <img src='./img/logo.png' alt='Наш логотип' />
          </div>
          <Link to='/' className={style.headerButton}>
            Лиги
          </Link>
          <Link to='/teams' className={style.headerButton}>
            Команды
          </Link>
        </div>
        <div className={style.social}>
          <a href='https://vk.com/super_dinoo'>
            <img src='./img/vk.png' alt='вк' className={style.icone} />
          </a>
          <a href='https://t.me/super_dinoo'>
            <img src='./img/tg.png' alt='телеграмм' className={style.icone} />
          </a>
          <a href='https://www.instagram.com/mr.serzh_73'>
            <img src='./img/inst.png' alt='инст' className={style.icone} />
          </a>
        </div>
      </div>
      <div className={style.headerWrap}>
        <form className={style.form}>
          <input
            type='text'
            name='text'
            className={style.serch}
            placeholder='Поиск Здесь!'
          />
          <button type='submit' name='submit' className={style.submit}>
            Поиск
          </button>
        </form>
        <a href='/'>
          <img src='./img/men.png' alt='вход' className='men' />
        </a>
      </div>
    </div>
  );
};
export default Header;
