import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Teams from './pagess/Teams';
import League from './pagess/League';
import ErrorPage from './pagess/ErrorPage';
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
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
