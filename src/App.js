import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Teams from './pagess/Teams/Teams'
import League from './pagess/LeaguePages/League';
import ErrorPage from './pagess/ErrorPage';
import TeamCalendar from './components/TeamCalendar';
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
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
