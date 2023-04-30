import React from 'react';
import './CentrStyle.css' ;

const Centr = () => {
    return (
    <div className='main'>
        <div className='leftRig'>
            <div className='lef'>
                <img src="./img/lef.jpg"  alt="Наш логотип"/>
            </div>  
            <div className='rig'>
                <img src="./img/rig.jpg"  alt="Наш логотип"/>  
            </div>
        </div>
        <div className='espan'>
            <div className='real'>
            <a href = '/'className='real-button'><img src="./img/real.jpeg" alt="Наш логотип"/></a>
            <p>Реал Мадрид</p>
            <p>Испания</p>
            </div>
            <div className='betis'>
            <a href = '/'className='betis-button'><img src="./img/betis.jpeg" alt="Наш логотип"/></a>
            <p>Бетис</p>
            <p>Испания</p>
            </div>
        </div>
        <div className='portugal'>
            <div className='benfica'>
            <a href = '/'className='benfica-button'><img src="./img/benfica.jpeg" alt="Наш логотип"/></a>
            <p>Бенфика</p>
            <p>Португалия</p>
            </div>
            <div className='porty'>
            <a href = '/'className='porty-button'><img src="./img/porty.jpg" alt="Наш логотип"/></a>
            <p>Порту</p>
            <p>Португалия</p>
            </div>
        </div>
        <div className='german'>
            <div className='bavaria'>
            <a href = '/'className='bavaria-button'><img src="./img/bavaria.jpeg" alt="Наш логотип"/></a>
            <p>Байрен Мюнхен</p>
            <p>Германия</p>
            </div>
            <div className='borys'>
            <a href = '/'className='borys-button'><img src="./img/borys.jpeg" alt="Наш логотип"/></a>
            <p>Борусия Дортмун</p>
            <p>Германия</p>
            </div>
        </div>
        <div className='france'>
            <div className='psg'>
            <a href = '/'className='psg-button'><img src="./img/psg.jpeg" alt="Наш логотип"/></a>
            <p>ПСЖ</p>
            <p>Франция</p>
            </div>
            <div className='lion'>
            <a href = '/'className='lion-button'><img src="./img/lion.jpeg" alt="Наш логотип"/></a>
            <p>Лион</p>
            <p>Франция</p>
            </div>
        </div>
        <div className='Engl'>
            <div className='manYna'>
            <a href = '/'className='manYna-button'><img src="./img/manYna.jpg" alt="Наш логотип"/></a>
            <p>Манчестер Юнайтед</p>
            <p>Англия</p>
            </div>
            <div className='westhem'>
            <a href = '/'className='westhem-button'><img src="./img/westhem.jpg" alt="Наш логотип"/></a>
            <p>Вестхэм</p>
            <p>Англия</p>
            </div>
        </div>
        <div className='italy'>
            <div className='yvent'>
            <a href = '/'className='yvent-button'><img src="./img/yvent.jpeg" alt="Наш логотип"/></a>
            <p>Ювентус</p>
            <p>Италия</p>
            </div>
            <div className='inter'>
            <a href = '/'className='inter-button'><img src="./img/inter.jpeg" alt="Наш логотип"/></a>
            <p>Интер</p>
            <p>Италия</p>
            </div>
        </div>



    </div>

        )
    }
export default Centr 