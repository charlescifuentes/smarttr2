import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Customers = React.lazy(() => import('./views/Customers'));
const Users = React.lazy(() => import('./views/Users'));
const Status = React.lazy(() => import('./views/Status'));
const Workshops = React.lazy(() => import('./views/Workshops'));
const Config = React.lazy(() => import('./views/Configuration'));
const Roles = React.lazy(() => import('./views/Roles'));
const Techservices = React.lazy(() => import('./views/Techservices'));
const TsReport = React.lazy(() => import('./views/Reports/TsReport'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/customers', name: 'Customers', component: Customers },
  { path: '/users', name: 'Users', component: Users },
  { path: '/status', name: 'Status', component: Status },
  { path: '/workshops', name: 'WorkShops', component: Workshops },
  { path: '/config', name: 'Status', component: Config },
  { path: '/roles', name: 'Roles', component: Roles },
  { path: '/techservices', name: 'Techservices', component: Techservices },
  { path: '/tsreport', name: 'Techservices Report', component: TsReport },
];

export default routes;
