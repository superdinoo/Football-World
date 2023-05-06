import React, { Fragment, useState, useEffect, useMemo, memo } from 'react';
import Header from '../../components/Header';
import MainLeage from '../../components/MainLeage/MainLeage';
import Footer from '../../components/Footer';
import { apiCreate } from './../../utils/api';
import { Pagination } from 'antd';
import style from './LeagueStyle.module.css';

const MAX_LEAGUE_PER_PAGE = 6;

const League = () => {
  const [ligs, setLigs] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchAllLigs() {
      try {
        const allLigs = await apiCreate.get('/competitions');
        setLigs(allLigs.data.competitions);
      } catch (error) {
        console.error();
      }
    }
    fetchAllLigs();
  }, []);
  console.log('YA TUTA');

  const getCompetitions = () =>
    ligs.slice(
      MAX_LEAGUE_PER_PAGE * page - MAX_LEAGUE_PER_PAGE,
      MAX_LEAGUE_PER_PAGE * (page - 1) + MAX_LEAGUE_PER_PAGE
    );

  return (
    <React.Fragment>
      <Header />
      {ligs.length ? (
        <Fragment>
          <MainLeage ligs={getCompetitions()} />
          <div className={style.pagination}>
            <Pagination
              total={ligs.length}
              showSizeChanger={false}
              pageSize={MAX_LEAGUE_PER_PAGE}
              current={page}
              onChange={(page) => setPage(page)}
            />
            ;
          </div>
        </Fragment>
      ) : (
        <p className={style.text}>Loading...</p>
      )}
      <Footer />
    </React.Fragment>
  );
};
export default memo(League);
