import React from 'react';
import style from './CentrStyle.module.css';
import TeamsCard from '../TeamsCard';


const Centr = ({teams}) => {
  return (
    <div className={style.posit}>
      {teams.map(({id,name,crestUrl}) => (
        <TeamsCard 
        key={id} 
        id={id}
        name={name} 
        crestUrl={crestUrl} />
      ))}
    </div>
  );
};
export default Centr;

