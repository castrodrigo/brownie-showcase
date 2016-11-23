import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Base from './components/Base';
import Index from './components/Index';
import Brownie from './components/Brownie';
import NotFound from './components/NotFound';

const routes = (
  <Route path="/" component={Base}>
    <IndexRoute component={Index}/>
    <Route path="brownie/:id" component={Brownie}/>
    <Route path="*" component={NotFound}/>
  </Route>
);

export default routes;
