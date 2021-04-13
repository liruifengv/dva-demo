import React, {Suspense} from 'react';
import { Router, Switch, Redirect } from 'dva/router';
import { renderRoutes } from 'react-router-config'
import { Skeleton } from 'antd'
import BasicLayout from './pages/Layout'
const Home = React.lazy(() => import('./pages/Home'))
const Login = React.lazy(() => import('./pages/Login'))
const Test = React.lazy(() => import('./pages/Test/index'))
const List = React.lazy(() => import('./pages/Test/childPage/List'))
const Detail = React.lazy(() => import('./pages/Test/childPage/Detail'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const Posts = React.lazy(() => import('./pages/Posts/Posts'))

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
      { path: '/login', component: Login },
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
