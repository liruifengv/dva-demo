import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { renderRoutes } from 'react-router-config'
import { withRouter, routerRedux } from 'dva/router';
import PropTypes from 'prop-types'
import { connect } from 'dva';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MailOutlined
} from '@ant-design/icons'

const { SubMenu } = Menu
const { Sider, Content } = Layout

const BasicLayout = withRouter((props) => {
  const route = props.route
  const history = props.history
  const dispatch = props.dispatch
  const [collapsed, setCollapsed] = useState(false)

  // 菜单点击，跳转路由
  const clickMenu = ({ key }) => {
    // history.push(key)
    dispatch(routerRedux.push(key));
  }

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout>
      <Sider width={256} style={{ minHeight: '100vh' }} collapsible collapsed={collapsed}>
        <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }}/>
        <Menu theme="dark"
          mode="inline"
          defaultSelectedKeys={['/home']}
          selectedKeys={[history.location.pathname]}
          onClick={clickMenu}
        >
          <Menu.Item key="/home" icon={<UserOutlined />}>Home</Menu.Item>
          <Menu.Item key="/products" icon={<VideoCameraOutlined />}>Products</Menu.Item>
          <SubMenu key="/test" icon={<MailOutlined />} title="test">
            <Menu.Item key="/test/list">list</Menu.Item>
            <Menu.Item key="/test/detail">detail</Menu.Item>
          </SubMenu>
          <Menu.Item key="/posts" icon={<UploadOutlined />}>post</Menu.Item>
        </Menu>
      </Sider>
      <Layout >
        <Content>
          <div style={{ padding: 24, background: '#f0f2f5', minHeight: 360 }}>
            {renderRoutes(route.routes)}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
})

BasicLayout.propTypes = {
  route: PropTypes.any.isRequired
}

export default connect()(BasicLayout);