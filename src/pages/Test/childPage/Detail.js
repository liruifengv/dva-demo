import React from 'react'
import PageContainer from '../../../components/PageContainer'
import ColumnPanel from '../../../components/ColumnPanel'
import { Form, Button, Radio, Checkbox, DatePicker } from 'antd';
import './Detail.css'

const Title = () => {
  return <div>默认配置</div>
}

const HeaderExplain = () => {
  return <div>更改此处用户设置不会影响现有用户，设置结果保存后将作为创建新用户时的默认设置</div>
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 8 },
};

const ColumnPanelContent = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <Form
      {...tailLayout}
      name="basic"
      layout="vertical"
      initialValues={{ status: 'dective', exprieTime: false, passwordEmail: false, banModifyEmail: false }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        {...layout}
        label="导入用户的默认状态："
        name="status"
      >
        <Radio.Group>
          <Radio value="active">激活</Radio>
          <Radio value="dective">冻结</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        {...layout}
        name="exprieTime"
        valuePropName="checked"
      >
        <Checkbox>账号有效期：</Checkbox>
      </Form.Item>
      <Form.Item
        {...layout}
        label="截止时间："
        name="date"
        rules={[{ required: true, message: '请选择截止时间' }]}
      >
        <DatePicker placeholder="请选择时间" format='YYYY/MM/DD'/>
      </Form.Item>
      <Form.Item
        {...layout}
        name="passwordEmail"
        valuePropName="checked"
        extra="管理员首次为创建的子账户设置密码后，系统将自动发送通知邮件给子账户"
      >
        <Checkbox>设置密码后邮件通知</Checkbox>
      </Form.Item>
      <Form.Item
        {...layout}
        name="banModifyEmail"
        valuePropName="checked"
        extra="管理员创建的子账户，禁止用户自行修改邮箱"
      >
        <Checkbox>禁止用户自行修改邮箱</Checkbox>
      </Form.Item>
      <Form.Item {...layout}>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
      </Form.Item>
    </Form>
  )
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
