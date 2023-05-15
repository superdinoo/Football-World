import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import League from './pagess/LeaguePages/League';
import ErrorPage from './pagess/ErrorPage';
import './index.css';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <League />,
      errorElement: <ErrorPage />,
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
