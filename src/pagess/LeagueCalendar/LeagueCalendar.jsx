import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiCreate } from "../../utils/api";
import Header from "../../components/Header";
import LeagueTable from "../../components/LeagueTable";
import Footer from "../../components/Footer";
import BreadCrumbLeague from "../../components/BreadCrumbLeague";

const LeagueCalendar = () => {
  const [matchesLeague, setMatchesLeague] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function fetchMatches() {
      try {
        const matches = await apiCreate.get(`/competitions/${id}/matches`);
        setMatchesLeague(matches.data.matches);
      } catch (error) {
        console.error();
        console.log('Ошибка');
      }
    }
    fetchMatches();
  }, [id]);

  return (
    <React.Fragment>
      <Header />
      <BreadCrumbLeague />
      <p>Матчи</p>
      <LeagueTable matchesLeague={matchesLeague} />
      <Footer />
    </React.Fragment>
  );
};
export default LeagueCalendar;