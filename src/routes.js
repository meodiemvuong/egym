import React from 'react';
import Homepage from './pages/Homepage'
import Loginpage from './pages/Loginpage';
import Notfoundpage from './pages/Notfoundpage';
import AdminPage from './pages/AdminPage';
import TrainerPage from './pages/TrainerPage';
import CustomerPage from './pages/CustomerPage';
import EventPage from './pages/EventPage'


const routes = [
    {
        path: '/',
        element: <Homepage/>
    },
    {
        path: '/login',
        element: <Loginpage/>
    },
    {
        path: '/admin/*',
        element: <AdminPage/>
    },
    {
        path: '/trainer',
        element: <TrainerPage/>
    },
    {
        path: '/customer',
        element: <CustomerPage/>
    },
    {
        path: '/event',
        element: <EventPage/>
    },
    {
        path: '*',
        element: <Notfoundpage/>
    }

]

export default routes;