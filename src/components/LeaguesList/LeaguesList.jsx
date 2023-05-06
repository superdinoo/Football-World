import React from 'react';
import LeagueCard from '../LeagueCard';
import styles from './Leaguestyle.module.css';

const LeaguesList = ({ ligs }) => {
  return (
    <div className={styles.cardCompetotoinsWrap}>
      <div>
        <LeagueCard
          key={ligs[0].id}
          name={ligs[0].name}
          area={ligs[0].area.name}
        />
      </div>
      <div className={styles.line}>
        {ligs.slice(1, 3).map((liga) => {
          return (
            <LeagueCard key={liga.id} name={liga.name} area={liga.area.name} />
          );
        })}
      </div>
      <div className={styles.line}>
        {ligs.slice(3, 4).map((liga) => {
          return (
            <LeagueCard key={liga.id} name={liga.name} area={liga.area.name} />
          );
        })}
      </div>
      <div className={styles.line}>
        {ligs.slice(4, 6).map((liga) => {
          return (
            <LeagueCard key={liga.id} name={liga.name} area={liga.area.name} />
          );
        })}
      </div>
    </div>
  );
};

export default LeaguesList;
