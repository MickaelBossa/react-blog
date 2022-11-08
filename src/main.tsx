// CSS
import './index.css';

// Librairies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

// Composants
import Home from './containers/Home/Home';
import Layout from './hoc/Layout/Layout';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Articles from './containers/Articles/Articles';
import Contact from './containers/Contact/Contact';
import Article from './containers/Articles/Article/Article';

// Router
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
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
            {
                path: '/articles/:id',
                element: <Article />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
