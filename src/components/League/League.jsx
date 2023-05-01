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
        console.log(allLigs);
        setLigs(allLigs.data.competitions);
      } catch (error) {
        console.log(error);
      }

    }

    fetchAllLigs();
  }, []);

  return ligs?.length ? (
    <div className={style.league}>
      {ligs.map((liga) => {
        return (
          <LeagueCard
            key={liga.id}
            name={liga.name}
            area={liga.area.name}
          />
        );
      })}
    </div>
  ) : (
    <p style={{ color: 'black' }}>Loading...</p>
  );
  }
export default League;
