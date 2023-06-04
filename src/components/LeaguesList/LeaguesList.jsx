import React from "react";
import LeagueCard from "../LeagueCard";
import styles from "./LeaguesListStyle.module.css";

const LeaguesList = ({ ligs }) => {
  return (
    <div className={styles.cardLeaguesWrap}>
      <div>
        <LeagueCard
          id={ligs[0].id}
          key={ligs[0].id}
          name={ligs[0].name}
          area={ligs[0].area.name}
        />
      </div>
      <div className={styles.line}>
        {ligs.slice(1, 3).map(({ id, name, area }) => {
          return (
            <LeagueCard id={ligs[0].id} key={id} name={name} area={area.name} />
          );
        })}
      </div>
      <div className={styles.line}>
        {ligs.slice(3, 4).map(({ id, name, area }) => {
          return (
            <LeagueCard id={ligs[0].id} key={id} name={name} area={area.name} />
          );
        })}
      </div>
      <div className={styles.line}>
        {ligs.slice(4, 6).map(({ id, name, area }) => {
          return (
            <LeagueCard id={ligs[0].id} key={id} name={name} area={area.name} />
          );
        })}
      </div>
    </div>
  );
};

export default LeaguesList;
