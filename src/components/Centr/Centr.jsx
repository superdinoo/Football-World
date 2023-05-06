import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './CentrStyle.module.css';
import TeamsCard from '../TeamsCard';

const apiCreate = axios.create({
  baseURL: 'https://api.football-data.org/v2/teams',
  headers: { 'X-Auth-Token': 'dd127c2af68b49d9a207d889c5c7f97e' },
});
const Centr = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    async function fetchAllTeams() {
      try {
        const allTeams = await apiCreate.get();
        setTeams(allTeams.data.teams);
      } catch (error) {
        console.error();
      }
    }
    fetchAllTeams();
  }, []);
  return teams?.length ? (
    <div className={style.posit}>
      {teams.map(({ id, name, crestUrl }) => {
        console.log(teams);
        return <TeamsCard key={id} name={name} crestUrl={crestUrl} />;
      })}
    </div>
  ) : (
    <p className={style.loading}>Loading...</p>
  );
};
export default Centr;
