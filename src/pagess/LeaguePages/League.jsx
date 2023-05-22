import React, { Fragment,useEffect,useState } from 'react';import { SearchOutlined } from "@ant-design/icons";
import {Pagination} from 'antd';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { apiCreate } from '../../utils/api';
import style from './LeagueStyle.module.css';
import MainLeague from '../../components/MainLeague';

const MAX_LEAGUESLIST_PER_PAGE = 6;

const League = () => {
  const [ligs, setLigs] = useState([]);
  const [filteredLigs, setFilteredLigs] = useState([]);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function fetchAllLigs() {
      try {
        const allLigs = await apiCreate.get("/competitions");
        setLigs(allLigs.data.competitions);
        setFilteredLigs(allLigs.data.competitions);
      } catch (error) {
        console.error();
      }
    }
    fetchAllLigs();
  }, []);

  const getCompetitions = () =>
    filteredLigs.slice(
      MAX_LEAGUESLIST_PER_PAGE * page - MAX_LEAGUESLIST_PER_PAGE,
      MAX_LEAGUESLIST_PER_PAGE * (page - 1) + MAX_LEAGUESLIST_PER_PAGE
    );

  const searchLigs = () => {
    if (!searchValue) {
      setFilteredLigs(ligs);
      return;
    }

    const filteredLigsByName = ligs.filter((liga) =>
      liga.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );

    const filteredLigsByCountry = ligs.filter((liga) =>
      liga.area.name
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase())
    );
    const allFilteredLigs = [...filteredLigsByCountry, ...filteredLigsByName];

    const ids = new Set(allFilteredLigs.map(({ id }) => id));
    const uniqueLigs = allFilteredLigs.filter(({ id }) => {
      if (ids.has(id)) {
        ids.delete(id);
        return true;
      }
       return false;
    });
     
    setFilteredLigs(uniqueLigs);
  };
const resetSearch = () => {
    setFilteredLigs(ligs);
    setSearchValue("");
  };
  const allMainLigs = () => {
    return ligs.length ? (
      <Fragment>
        <MainLeague ligs={getCompetitions()} />
        <div className={style.pagination}>
          <Pagination
            current={page}
            onChange={(page) => setPage(page)}
            pageSize={MAX_LEAGUESLIST_PER_PAGE}
            showSizeChanger={false}
            total={filteredLigs?.length}
          />
        </div>
        <Footer />
      </Fragment>
    ) : (
      <p className={style.loading}>Loading...</p>
    );
  };
  return (
    <div className={style.competition}>
      <Header />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchLigs();
        }}
      >
        <div className={style.form}>
          <input
            placeholder="Поиск..."
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            className={style.serch}
          />
          <button className={style.submit}>
            <SearchOutlined />
          </button>
          <button className={style.sbros} onClick={resetSearch}>
            сбросить
          </button>
        </div>
      </form>
      {!filteredLigs.length && ligs.length ? (
        <p className={style.non}>Ничего не найдено</p>
      ) : (
        allMainLigs()
      )}
    </div>
  );
};

export default League;

