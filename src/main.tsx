// CSS
import './index.css';

// Librairies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import routes from './config/routes';

// Composants
import Home from './containers/Home/Home';
import Layout from './hoc/Layout/Layout';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Articles from './containers/Articles/Articles';
import Contact from './containers/Contact/Contact';
import Article from './containers/Articles/Article/Article';
import AddArticle from './containers/Admin/AddArticle/AddArticle';

// Router
const router = createBrowserRouter([
    {
        path: routes.HOME,
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: routes.ARTICLES,
                element: <Articles />,
            },
            {
                path: routes.CONTACT,
                element: <Contact />,
                children: [
                    {
                        path: 'email',
                        element: <p>mymail@gmail.com</p>,
                    },
                    {
                        path: 'phone',
                        element: <p>06.00.00.00.00</p>,
                    },
                ],
            },
            {
                path: `${routes.ARTICLES}/:id`,
                element: <Article />,
            },
            {
                path: routes.ADDARTICLE,
                element: <AddArticle />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
