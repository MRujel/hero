import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import Appdetails from '../Components/AppDetails/Appdetails';
import Installation from '../Components/Installation/Installation';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('/app.json'),
                Component: Home

            },
            {
                path: '/apps',
                loader: () => fetch('/app.json'),
                Component: Apps
            },
            {
                path: '/appdetails/:id',
                loader: () => fetch('/app.json'),
                Component: Appdetails
            },
            {
                path: '/installation',
                Component: Installation
            },
            {
                path: '*',
                element: <ErrorPage />
            }
        ]
    },

]);