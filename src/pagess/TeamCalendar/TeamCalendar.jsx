import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiCreate } from "../../utils/api";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MatchTable from "../../components/MatchTable";
import BreadCrumbComponent from "../../components/BreadCrumbComponent";

const TeamCalendar = () => {
  const [matchesTeams, setMatchesTeams] = useState([]);
  const [errorMessages, setErrorMessages] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchMatches() {
      try {
        const matches = await apiCreate.get(`/teams/${id}/matches`);
        setMatchesTeams(matches.data.matches);
      } catch (error) {
        setErrorMessages(error);
        console.log(error, "ошибка запроса матчей команды");
      }
    }
    fetchMatches();
  }, [id]);

  return (
    <>
      <Header />
      <BreadCrumbComponent apiEndpoint="teams" title="Команды" />
      <p>Матчи</p>
      <MatchTable matches={matchesTeams} errorMessages={errorMessages} />
      <Footer />
    </>
  );
};
export default TeamCalendar;
