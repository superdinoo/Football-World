import React from 'react';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import Teams from './pages/Teams';
import ErrorPage from './pages/ErrorPage';
import './index.css';

function App() {
    const router = createBrowserRouter([
        {
          path: '/',
          element: <Teams />,
          errorElement: <ErrorPage />
        }
    ]);
    return <RouterProvider router={router} />;
}


export default App;
