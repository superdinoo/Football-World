import React, { Fragment, useState, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Header from "../../components/Header";
import MainComands from "../../components/MainComands";
import Footer from "../../components/Footer";
import { apiCreate } from "./../../utils/api";
import { Pagination } from "antd";
import style from "../Teams/TeamsStyle.module.css";
import Loader from "../../components/Loader/Loader";
import { filterByField } from "../../utils/utils";
import { MAX_TEAMSCARD_PER_PAGE } from "../../utils/constant";
import { Search } from "../../components/Search/Search";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function fetchAllTeams() {
      try {
        const allTeams = await apiCreate.get("/teams");
        setTeams(allTeams.data.teams);
        setFilteredTeams(allTeams.data.teams);
      } catch (error) {
        console.log(error, "ошибка запроса команд");
      }
    }
    fetchAllTeams();
  }, []);

  const getTeams = () =>
    filteredTeams.slice(
      MAX_TEAMSCARD_PER_PAGE * page - MAX_TEAMSCARD_PER_PAGE,
      MAX_TEAMSCARD_PER_PAGE * (page - 1) + MAX_TEAMSCARD_PER_PAGE
    );

  const searchTeams = () => {
    if (!searchValue) {
      setFilteredTeams(teams);
      return;
    }

    const filteredTeamsByName = filterByField(teams, "name", searchValue);

    setFilteredTeams(filteredTeamsByName);
  };
  const resetSearch = () => {
    setFilteredTeams(teams);
    setSearchValue("");
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    searchTeams();
  };

  return (
    <div className={style.competition}>
      <Header />
      <Search
        searchValue={searchValue}
        searchEntities={searchTeams}
        resetSearch={resetSearch}
        setSearchValue={setSearchValue}
      />
      {!filteredTeams.length && teams.length ? (
        <p className={style.non}>Ничего не найдено</p>
      ) : teams.length ? (
        <Fragment>
          <MainComands teams={getTeams()} />
          <div className={style.pagination}>
            <Pagination
              current={page}
              onChange={(page) => setPage(page)}
              pageSize={MAX_TEAMSCARD_PER_PAGE}
              showSizeChanger={false}
              total={filteredTeams?.length}
            />
          </div>
          <Footer />
        </Fragment>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Teams;
