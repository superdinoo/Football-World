import React, { Fragment, useState, useEffect } from 'react';
import Header from '../../components/Header';
import MainComands from '../../components/MainComands';
import Footer from '../../components/Footer';
import { apiCreate } from './../../utils/api';
import { Pagination } from 'antd';
import style from '../Teams/TeamsStyle.module.css';

const MAX_TEAMSCARD_PER_PAGE = 12;

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchAllTeams() {
      try {
        const allTeams = await apiCreate.get('/teams');
        setTeams(allTeams.data.teams);
        console.log(allTeams);
      } catch (error) {
        console.error();
      }
    }
    fetchAllTeams();
  }, []);
  const getTeams = () =>
    teams.slice(
      MAX_TEAMSCARD_PER_PAGE * page - MAX_TEAMSCARD_PER_PAGE,
      MAX_TEAMSCARD_PER_PAGE * (page - 1) + MAX_TEAMSCARD_PER_PAGE
    );
      
  return (
    <React.Fragment>
      <Header />
      {teams.length ? (
        <Fragment>
          <MainComands teams={getTeams()} />
          <div className={style.pagination}>
            <Pagination
              total={teams.length}
              showSizeChanger={false}
              pageSize={MAX_TEAMSCARD_PER_PAGE}
              current={page}
              onChange={(page) => setPage(page)}
            />
          </div>
        </Fragment>
      ) : (
        <p className={style.text}>Loading...</p>
      )}
      <Footer />
    </React.Fragment>
  );
};
export default Teams;