import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Customers = React.lazy(() => import('./views/Customers'));
const Users = React.lazy(() => import('./views/Users'));
const Status = React.lazy(() => import('./views/Status'));
const Config = React.lazy(() => import('./views/Configuration'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/customers', name: 'Customers', component: Customers },
  { path: '/users', name: 'Users', component: Users },
  { path: '/status', name: 'Status', component: Status },
  { path: '/config', name: 'Status', component: Config },
];

export default routes;
