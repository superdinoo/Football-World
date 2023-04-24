import React from 'react';
import './Headerstyle.css' ;

const Header = () => {
    return (
        <div className='header'>
            <div className='headerWrap'>
            <div className='headerMain'>
            <div className='img'>
                <img src="./img/logo.png" alt="Наш логотип"/>  
        </div>
            <a href="/" className="header-button">
            <br/>
            Лиги
            </a>
        <a href="/" className="header-button">
            <br/>
            Команды
            </a>
        </div>
<div className='social'>
        <a href = "https://vk.com/super_dinoo" ><img src="./img/vk.png" alt='вк'className = "icone"/></a>
		<a href = "https://t.me/super_dinoo" ><img src="./img/tg.png" alt="телеграмм" className ="icone"/></a>
		<a href= "https://www.instagram.com/mr.serzh_73" ><img src="./img/inst.png" alt="инст" className ="icone"/></a>
</div>
</div>
<div className='headerWrap'>
<form className='form'>
<input
type="text"
name="text"
className="serch"
placeholder="Поиск здесь!"
/>
<button
type="submit"
name="submit"
className="submit"
>Поиск</button>
</form>
<a href='/'><img src='./img/men.png' alt='вход' className='men'/></a>
</div>
</div>


)

}
export default Header