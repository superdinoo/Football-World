import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Teams from "./pagess/Teams/Teams";
import League from "./pagess/LeaguePages";
import TeamCalendar from "./pagess/TeamCalendar";
import LeagueCalendar from "./pagess/LeagueCalendar";
import Error from "./components/Error";
import "./index.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <League />,
      errorElement: <Error />,
    },
    {
      path: "/teams",
      element: <Teams />,
      errorElement: <Error />,
    },
    {
      path: `/teams/:id/matches`,
      element: <TeamCalendar />,
    },
    {
      path: `/competitions/:id/matches`,
      element: <LeagueCalendar />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
