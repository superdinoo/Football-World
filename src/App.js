import React from 'react';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import Leage from './pages/Leage';
import ErrorPage from './pages/ErrorPage';
import './index.css';

function App() {
    const router = createBrowserRouter([
        {
          path: '/',
          element: <Leage />,
          errorElement: <ErrorPage />
        }
    ]);
    return <RouterProvider router={router} />;
}


export default App;
