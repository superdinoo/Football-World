import React from 'react';
import style from './CentrStyle.module.css';
import TeamsCard from '../TeamsCard';


const Centr = ({teams}) => {
  return (
    <div className={style.posit}>
      {teams.map(team => (
        <TeamsCard 
        key={team.id} 
        name={team.name} 
        crestUrl={team.crestUrl} />
      ))}
    </div>
  );
};
export default Centr;

