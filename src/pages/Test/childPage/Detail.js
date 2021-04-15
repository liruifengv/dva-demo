import React from 'react'
import PageContainer from '../../../components/PageContainer'
import ColumnPanel from '../../../components/ColumnPanel'
import ColumnPanelContent from './ColumnPanelContent'
import { connect } from 'dva';
import './Detail.css'

const Title = () => {
  return <div>默认配置</div>
}

const HeaderExplain = () => {
  return <div>更改此处用户设置不会影响现有用户，设置结果保存后将作为创建新用户时的默认设置</div>
}


const Content = () => {
  return (
    <ColumnPanel
      title ='账号基础设置'
      explain = '账号的初始状态、有效期、初始密码设置方式均为创建账号时的基础设置。'
      content = { <ColumnPanelContent /> }
    >
    </ColumnPanel>
  )
}

const Detail = ({ dispatch, form }) => {
  return (
    <div className="P-login">
      <PageContainer
        title = { <Title /> }
        headerExplain = { <HeaderExplain /> }
        content = { <Content /> }
      >
      </PageContainer>
    </div>
  )
}

export default connect(({ form }) => ({
  form,
}))(Detail);
