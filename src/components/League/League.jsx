import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LeagueCard from '../LeagueCard';
import style from './Leaguestyle.module.css';

const apiCreate = axios.create({
  baseURL: 'https://api.football-data.org/v2/competitions',
  headers: { 'X-Auth-Token': '57cfaf485b6645c69da1e555276e4bd8' },
});
const League = () => {
  const [ligs, setLigs] = useState([]);

  useEffect(() => {
    async function fetchAllLigs() {
      try {
        const allLigs = await apiCreate.get();
        setLigs(allLigs.data.competitions);
      } catch (error) {
        console.error();
      }

    }

    fetchAllLigs();
  }, []);

  return ligs?.length ? (
    <div className={style.league}>
      {ligs.map(({id,name,area}) => {
        return (
          <LeagueCard
            key={id}
            name={name}
            area={area.name}
          />
        );
      })}
    </div>
  ) : (
    <p className={style.text}>Loading...</p>
  );
  }
export default League;
