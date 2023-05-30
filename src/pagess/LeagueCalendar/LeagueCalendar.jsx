import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiCreate } from "../../utils/api";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BreadCrumbComponent from "../../components/BreadCrumbComponent";
import MatchTable from "../../components/MatchTable";

const LeagueCalendar = () => {
  const [matchesLeague, setMatchesLeague] = useState([]);
  const [errorMessages, setErrorMessages] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchMatches() {
      try {
        const matches = await apiCreate.get(`/competitions/${id}/matches`);
        setMatchesLeague(matches.data.matches);
      } catch (error) {
        console.log(error, "ошибка запроса матчей лиги");
        setErrorMessages(error);
      }
    }
    fetchMatches();
  }, [id]);

  return (
    <>
      <Header />
      <BreadCrumbComponent apiEndpoint="competitions" title="Лиги" />
      <p>Матчи</p>
      <MatchTable matches={matchesLeague} errorMessages={errorMessages} />
      <Footer />
    </>
  );
};
export default LeagueCalendar;
