import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CompCalendar from './pagess/CompCalendar/CompCalendar';
import ErrorPage from './pagess/ErrorPage';
import './index.css';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <CompCalendar />,
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
