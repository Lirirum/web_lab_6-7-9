import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Table, Button, Modal, Form, Input } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  ]);

  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      const newUser = {
        id: users.length + 1,
        name: values.name,
        email: values.email,
      };

      setUsers([...users, newUser]);
      form.resetFields();
      setVisible(false);
    });
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ];

  return (
    <Layout   style={ { minHeight: '100vh' }}>
      <Sider width={80} theme="light">
      <div style={{ height: '32px', margin: '16px', background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="light" mode="vertical" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<PieChartOutlined />} />
          <Menu.Item key="2" icon={<DesktopOutlined />} />
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">         
         {users.map((item,index)=>(
           <Menu.Item key={index+2}>{item['name']}</Menu.Item>
         ))}
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="1">Team 1</Menu.Item>
            <Menu.Item key="2">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="3" icon={<FileOutlined />} />
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <Button type="primary" onClick={showModal} style={{ marginBottom: 16 }}>
              Add User
            </Button>
            <Table dataSource={users} columns={columns} rowKey="id" />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design Admin Page</Footer>
      </Layout>
      <Modal
        title="Add User"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" name="userForm">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter the name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please enter the email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default AdminPage;