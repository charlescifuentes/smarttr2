import React from 'react';

const Customers = React.lazy(() => import('./views/Customers'));
const CustomerUpdate = React.lazy(() => import('./views/Customers/CustomerUpdate'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/customers', name: 'Customers', component: Customers },
  { path: '/customers/customerupdate', name: 'Customersupdate', component: CustomerUpdate },
];

export default routes;
