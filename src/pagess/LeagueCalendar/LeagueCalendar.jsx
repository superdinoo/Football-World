import React, { useEffect, useState } from "react";
import { DatePicker } from "antd";
import { useParams } from "react-router-dom";
import { apiCreate } from "../../utils/api";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BreadCrumbComponent from "../../components/BreadCrumbComponent";
import MatchTable from "../../components/MatchTable";

const { RangePicker } = DatePicker;

const LeagueCalendar = () => {
  const [matchesLeague, setMatchesLeague] = useState([]);
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
          `/competitions/${id}/matches ${datesQuery}`
        );
        setMatchesLeague(matches.data.matches);
      } catch (error) {
        console.log(error, "ошибка запроса матчей лиги");
        setErrorMessages(error);
      }
    }
    fetchMatches();
  }, [id, dates]);

  return (
    <>
      <Header />
      <BreadCrumbComponent apiEndpoint="competitions" title="Лиги" />
      <p>Матчи</p>
      <RangePicker
        onCalendarChange={(v) => setDates(v)}
        placeholder={["c", "по"]}
        onCle
      />
      <MatchTable matches={matchesLeague} errorMessages={errorMessages} />
      <Footer />
    </>
  );
};
export default LeagueCalendar;
