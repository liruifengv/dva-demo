import React, {useEffect} from 'react'
import { Form, Button, Radio, Checkbox, DatePicker } from 'antd';
import { connect } from 'dva';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 8 },
};

const ColumnPanelContent = ({ dispatch, form }) => {
  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch({
      type: 'form/saveForm',
      payload: values
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  useEffect(() => {
    console.log('form:', form)
  })

  return (
    <Form
      {...tailLayout}
      name="basic"
      layout="vertical"
      initialValues={form}
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

export default connect(({ form }) => ({
  form,
}))(ColumnPanelContent);
