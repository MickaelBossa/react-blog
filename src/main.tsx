// CSS
import './index.css';

// Librairies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

// Composants
import Home from './containers/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Articles from './containers/Articles/Articles';
import Contact from './containers/Contact/Contact';

// Router
const router = createBrowserRouter([
    {
        path: '/',
        element: <Navbar />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: '/articles',
                element: <Articles />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
