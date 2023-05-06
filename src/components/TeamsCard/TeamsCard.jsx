import React from 'react';
import style from './TeamsCardStyle.module.css';
import { Link } from 'react-router-dom';

const TeamsCard = ({ name, crestUrl }) => {
    console.log(crestUrl)
return (
<div className={style.TeamsCard}>
<Link to ='/' className={style.TeamsCardButton}>
<h1 className={style.cards}>{name}</h1>
<img src={crestUrl} alt='img'/> 
</Link>
</div>
);
};
export default TeamsCard


