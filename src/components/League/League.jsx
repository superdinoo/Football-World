import React from 'react';
import './Leaguestyle.css' ;

const League = () => {
    return (
        <div className='League'>
            <div className='pole'>
                <img src="./img/pole.png" alt="Наш логотип"/> 
            </div>
            <a href="/" className="ligs-button">
                <div className='rpl'>
                    <img src="./img/rpl.jpg" alt="Наш логотип"/>
                    <p>РПЛ</p>
                    <p> Россия</p>
                </div>
                <div className='angl'>
                    <img src="./img/angl.jpg"  alt="Наш логотип"/>
                    <p>Премьер Лига</p>
                    <p> Англия</p>
                </div>
                <div className='france'>
                    <img src="./img/france.jpg"  alt="Наш логотип"/>
                    <p>Лига 1</p>
                    <p> Франция</p>
                </div>
                <div className='german'>
                    <img src="./img/german.jpg"  alt="Наш логотип"/>
                    <p>Бундеслига</p>
                    <p> Германия</p>
                </div>
                <div className='usp'>
                    <img src="./img/usp.jpg"  alt="Наш логотип"/>
                    <p>Ла-Лига</p>
                    <p> Испания</p>
                </div>
                <div className='italia'>
                    <img src="./img/italia.jpg"  alt="Наш логотип"/>
                    <p>Серия А</p>
                    <p> Италия</p>
                </div>
                </a>
                <div className='main'>
                    <div className='lef'>
                    <img src="./img/lef.jpg"  alt="Наш логотип"/>
                    </div>
                    <div className='rig'>
                    <img src="./img/rig.jpg"  alt="Наш логотип"/>  
                    </div>
                </div>
            
        </div>




        )

    }
export default League