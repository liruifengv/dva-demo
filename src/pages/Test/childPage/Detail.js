import React from 'react'
import PageContainer from '../../../components/PageContainer'

const Title = () => {
  return <div>默认配置</div>
}

const HeaderExplain = () => {
  return <div>更改此处用户设置不会影响现有用户，设置结果保存后将作为创建新用户时的默认设置</div>
}

const Content = () => {
  return <div>内容</div>
}

const Detail = () => {
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
export default Detail
