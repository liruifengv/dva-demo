import React, {Suspense} from 'react';
import { Router, Switch, Redirect } from 'dva/router';
import { renderRoutes } from 'react-router-config'
import { Skeleton } from 'antd'
import BasicLayout from './pages/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import Posts from './pages/Posts/Posts'
import Test from './pages/Test/index'
import List from './pages/Test/childPage/List'
import Detail from './pages/Test/childPage/Detail'

const toRedirect = () => {
  return (
    <Redirect to='/Home' />
  )
}

const toNotFound = () => {
  return (
    <Redirect to='/404' />
  )
}

const routes = [
  { path: '/',
    component: BasicLayout,
    routes: [
      { 
        path: '/',
        exact: true,
        render: toRedirect,
      },
      { path: '/home', component: Home },
      { path: '/products', component: Products },
      {
        path: '/test',
        component: Test,
        routes: [
          {
            path: '/test',
            exact: true,
            render: () => <Redirect to="/test/List" />
          },
          { path: '/test/list', component: List },
          { path: '/test/detail', component: Detail }
        ]
      },
      { path: '/posts', component: Posts },
      { path: '/404', component: NotFound },
      { path: '*', render: toNotFound }
    ]
  }
]

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Suspense Suspense fallback={<Skeleton active />}>
          {/* <Route path="/" exact component={Home} /> */}
          {renderRoutes(routes)}
        </Suspense>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
