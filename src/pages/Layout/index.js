import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
// import { useHistory } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import PropTypes from 'prop-types'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MailOutlined
} from '@ant-design/icons'

const { SubMenu } = Menu
const { Header, Sider, Content } = Layout

const BasicLayout = (props) => {
  const route = props.route
  const [collapsed, setCollapsed] = useState(false)
  const [selectedKey, setSelectedKey] = useState('/home')
  // FIXME
  // const history = useHistory()
  // 菜单点击，跳转路由
  const clickMenu = ({ key }) => {
    // history.push(key)
    setSelectedKey(key)
  }

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout>
      <Sider width={256} trigger={null} style={{ minHeight: '100vh' }} collapsible collapsed={collapsed}>
        <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }}/>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[selectedKey]} selectedKeys={[selectedKey]} onClick={clickMenu}>
          <Menu.Item key="/home" icon={<UserOutlined />}>Helloworld</Menu.Item>
          <Menu.Item key="/login" icon={<VideoCameraOutlined />}>login</Menu.Item>
          <SubMenu key="/test" icon={<MailOutlined />} title="test">
            <Menu.Item key="/test/list">list</Menu.Item>
            <Menu.Item key="/test/detail">detail</Menu.Item>
          </SubMenu>
          <Menu.Item key="/posts" icon={<UploadOutlined />}>post</Menu.Item>
        </Menu>
      </Sider>
      <Layout >
        <Header style={{ background: '#fff', padding: '0 20px' }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: toggle
        })}
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {renderRoutes(route.routes)}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

BasicLayout.propTypes = {
  route: PropTypes.any.isRequired
}

export default BasicLayout
