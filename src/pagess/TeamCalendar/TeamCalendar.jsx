import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DatePicker } from "antd";
import { apiCreate } from "../../utils/api";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MatchTable from "../../components/MatchTable";
import BreadCrumbComponent from "../../components/BreadCrumbComponent";
import style from "../../components/DataPicker/DataPicker.module.css";

const { RangePicker } = DatePicker;

const TeamCalendar = () => {
  const [matchesTeams, setMatchesTeams] = useState([]);
  const [errorMessages, setErrorMessages] = useState(null);
  const [dates, setDates] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchMatches() {
      const formattedDate =
        dates && dates.map((d) => d.toISOString().substr(0, 10));
      const datesQuery = dates
        ? `?dateFrom=${formattedDate[0]}&dateTo=${formattedDate[1]}`
        : "";
      try {
        const matches = await apiCreate.get(
          `/teams/${id}/matches${datesQuery}`
        );
        setMatchesTeams(matches.data.matches);
      } catch (error) {
        setErrorMessages(error);
        console.log(error, "ошибка запроса матчей команды");
      }
    }
    fetchMatches();
  }, [id, dates]);

  return (
    <>
      <Header />
      <BreadCrumbComponent apiEndpoint="teams" title="Команды" />
      <p>Матчи</p>
      <RangePicker
        onCalendarChange={(v) => setDates(v)}
        placeholder={["c", "по"]}
        className={style.datePicker}
        onCle
      />
      <MatchTable matches={matchesTeams} errorMessages={errorMessages} />
      <Footer />
    </>
  );
};
export default TeamCalendar;
