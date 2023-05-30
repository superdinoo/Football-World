import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Teams from './pagess/Teams/Teams'
import League from './pagess/LeaguePages/League';
import ErrorPage from './pagess/ErrorPage';
import TeamCalendar from './components/TeamCalendar';
import LeagueCalendar from "./pagess/LeagueCalendar";
import './index.css';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <League />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/teams',
      element: <Teams />,
      errorElement: <ErrorPage />,
    },
    {
      path: `/teams/:id/matches`,
      element: <TeamCalendar />,
    },
    {
      path: `/competitions/:id/matches`,
      element:<LeagueCalendar />
    } , 
  ]);
  return <RouterProvider router={router} />;
}

export default App;
