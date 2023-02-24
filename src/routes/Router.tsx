import React from 'react';
import { useRoutes } from 'react-router-dom';

import HomePage from '../pages/Home';
import MemoryPage from '../pages/Memory';
import TicTacToe from '../pages/TicTacToe';
import NoMatch from '../pages/NoMatch';

const Router = (): React.ReactElement => {
    const routes = useRoutes([
        {
            path: '/',
            element: <HomePage />,
        },
        {
            path: '/memory',
            element: <MemoryPage />,
        },
        {
            path: '/tic-tac-toe',
            element: <TicTacToe />,
        },
        { path: '*', element: <NoMatch /> },
    ]);

    return <div>{routes}</div>;
};

export default Router;
