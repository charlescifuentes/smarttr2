import React from 'react';

const Customers = React.lazy(() => import('./views/Customers'));
const Users = React.lazy(() => import('./views/Users'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/customers', name: 'Customers', component: Customers },
  { path: '/users', name: 'Users', component: Users },
];

export default routes;
